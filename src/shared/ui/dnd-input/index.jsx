// DnDInput.jsx
import React, { useCallback, useState } from 'react';
import { Camera, Trash2, Video, FileImage, Loader } from 'lucide-react';
import Dropzone from 'react-dropzone';

const DnDInput = ({
  tooltip,
  onFileSelect,
  multiple = false,
  maxFiles = 4,
  hide = false,
  title,
  acceptBoth = false,
  acceptVideo = false,
  err,
  className,
  isLoading,
  initialUrl,
  heightCamera,
  clearOnSelect = false,
  showPlaceholder = true,
  acceptPdf = false,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const isVideoFile = (file) => file?.type.startsWith('video/');
  const isImageFile = (file) => file?.type.startsWith('image/');
  const isPdfFile = (file) => file?.type === 'application/pdf' || file?.name.endsWith('.pdf');

  const handleDrop = useCallback(
    (acceptedFiles) => {
      let validFiles = [];

      if (acceptPdf) {
        validFiles = acceptedFiles.filter(file => isPdfFile(file));
      } else if (acceptBoth) {
        validFiles = acceptedFiles.filter(
          file => isVideoFile(file) || isImageFile(file)
        );
      } else {
        validFiles = acceptedFiles.filter(file => {
          return acceptVideo ? isVideoFile(file) : isImageFile(file);
        });
      }

      if (validFiles.length === 0) {
        let fileTypes;
        if (acceptPdf) {
          fileTypes = 'PDF файлы';
        } else if (acceptBoth) {
          fileTypes = 'изображения или видео файлы';
        } else {
          fileTypes = acceptVideo ? 'видео файлы' : 'изображения';
        }
        alert(`Пожалуйста, выберите только ${fileTypes}`);
        return;
      }

      const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
      let updatedFiles;
      let updatedUrls;

      if (multiple) {
        const totalFiles = selectedFiles.length + validFiles.length;
        if (totalFiles > maxFiles) {
          alert(`Максимум ${maxFiles} файлов`);
          return;
        }
        updatedFiles = [...selectedFiles, ...validFiles];
        updatedUrls = [...previewUrls, ...newPreviewUrls];
      } else {
        previewUrls.forEach(url => URL.revokeObjectURL(url));
        updatedFiles = validFiles;
        updatedUrls = newPreviewUrls;
      }

      setSelectedFiles(updatedFiles);
      setPreviewUrls(updatedUrls);

      if (onFileSelect) {
        onFileSelect(updatedFiles);
      }
      
      if (clearOnSelect) {
        try {
          (updatedUrls || []).forEach(url => URL.revokeObjectURL(url));
        } catch {}
        setSelectedFiles([]);
        setPreviewUrls([]);
      }
    },
    [
      selectedFiles,
      previewUrls,
      multiple,
      maxFiles,
      onFileSelect,
      acceptVideo,
      acceptBoth,
      clearOnSelect,
      acceptPdf,
    ]
  );

  const removeFile = useCallback(
    (index) => {
      URL.revokeObjectURL(previewUrls[index]);

      const newFiles = selectedFiles.filter((_, i) => i !== index);
      const newUrls = previewUrls.filter((_, i) => i !== index);

      setSelectedFiles(newFiles);
      setPreviewUrls(newUrls);

      if (onFileSelect) {
        onFileSelect(newFiles);
      }
    },
    [selectedFiles, previewUrls, onFileSelect]
  );

  React.useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, []);

  const acceptedFileTypes = (() => {
    if (acceptPdf) {
      return { 'application/pdf': ['.pdf'] };
    } else if (acceptBoth) {
      return {
        'image/*': [],
        'video/*': [],
      };
    } else if (acceptVideo) {
      return { 'video/*': [] };
    } else {
      return { 'image/*': [] };
    }
  })();

  const renderPreview = (url, file) => {
    return (
      <div className={`${isLoading ? '' : ''} relative h-full`}>
        {isLoading && (
          <div className='absolute top-[-5px] left-[-5px] w-[105%] h-[110%] z-[3] bg-[rgba(12,12,12,0.9)]'>
            <Loader
              size={36}
              color='white'
              className='animate-spin absolute top-[50%] left-[50%] translate-x-[-100%] translate-y-[-50%] z-[30]'
            />
          </div>
        )}
        {isPdfFile(file) ? (
          <div className='w-full h-full flex flex-col items-center justify-center bg-white rounded-[28px]'>
            <FileImage size={64} className='mb-2 text-red-500' />
            <p className='text-sm font-medium text-gray-700 truncate px-4 max-w-full'>
              {file.name}
            </p>
            <p className='text-xs text-gray-500'>
              {Math.round(file.size / 1024)} KB
            </p>
          </div>
        ) : isVideoFile(file) ? (
          <video
            src={url}
            className='w-full h-full object-cover rounded-[28px]'
            controls={false}
            muted
            preload='metadata'
          />
        ) : (
          <img
            src={url}
            alt='Preview'
            className='w-full h-full object-cover rounded-[28px]'
          />
        )}
      </div>
    );
  };

  const getEmptyStateContent = () => {
    if (acceptBoth) {
      return {
        icon: <FileImage className='text-[#727272] mb-2' size={48} />,
        dragText: 'Отпустите медиа файлы здесь...',
        placeholderText: 'Добавьте фото или видео филиала, или ',
      };
    } else if (acceptVideo) {
      return {
        icon: <Video className='text-[#727272] mb-2' size={48} />,
        dragText: 'Отпустите видео здесь...',
        placeholderText: 'Добавьте видео филиала, или ',
      };
    } else if (acceptPdf) {
      return {
        icon: <FileImage className='text-[#727272] mb-2' size={48} />,
        dragText: 'Отпустите PDF файл здесь...',
        placeholderText: 'Добавьте PDF файл, или ',
      };
    } else {
      return {
        icon: <Camera className='text-[#727272] mb-2' size={48} />,
        dragText: 'Отпустите изображения здесь...',
        placeholderText: 'Добавьте фото, или ',
      };
    }
  };

  const emptyStateContent = getEmptyStateContent();

  return (
    <div className={`w-full ${className || ''}`}>
      <div className='flex flex-col gap-3 -mt-3'>
        {tooltip && !hide && (
          <div className='flex items-center gap-2'>
            <h3 className='font-medium'>{tooltip.title}</h3>
            <span className='text-sm text-gray-500'>{tooltip.description}</span>
          </div>
        )}

        {title && (
          <h2
            className={`text-[17px] ml-2 font-medium ${err ? 'text-red-600' : 'text-[rgba(0,0,0,0.5)]'}`}
          >
            {title}
          </h2>
        )}

        <Dropzone
          onDrop={handleDrop}
          multiple={multiple}
          maxFiles={maxFiles}
          accept={acceptedFileTypes}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <section className='w-full'>
              <div
                className={`w-full border cursor-pointer hover:border-2 rounded-[24px] transition-all p-1 flex items-center flex-col gap-3 text-center justify-center relative overflow-hidden 
                  ${err ? 'border-red-600 bg-[#F9F2F2]' : 'bg-[#F1F1F1]'}
                  ${
                    isDragActive
                      ? 'border-2 border-[#2A85FF]'
                      : 'hover:border-[#2A85FF]'
                  }
                  ${heightCamera ? heightCamera : 'h-[300px]'}
                  `}
                {...getRootProps()}
              >
                <input {...getInputProps()} />

                {previewUrls.length > 0 ? (
                  <div className='w-full h-full relative'>
                    {multiple ? (
                      <div className='w-full h-full grid grid-cols-2 gap-1'>
                        {previewUrls.slice(0, 4).map((url, index) => (
                          <div key={index} className='relative'>
                            {renderPreview(url, selectedFiles[index])}
                            {index === 3 && previewUrls.length > 4 && (
                              <div className='absolute inset-0 bg-black/50 flex items-center justify-center rounded-[28px]'>
                                <span className='text-white text-sm font-medium'>
                                  +{previewUrls.length - 4}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      renderPreview(previewUrls[0], selectedFiles[0])
                    )}
                    {isDragActive && (
                      <div className='absolute inset-0 bg-blue-50/90 flex items-center justify-center rounded-[28px]'>
                        <p className='text-[14px] text-[#2A85FF] font-medium'>
                          {emptyStateContent.dragText}
                        </p>
                      </div>
                    )}
                  </div>
                ) : initialUrl ? (
                  <div className='w-full h-full relative'>
                    {acceptPdf ? (
                      <div className='w-full h-full flex flex-col items-center justify-center bg-white rounded-[28px]'>
                        <FileImage size={64} className='mb-2 text-red-500' />
                        <p className='text-sm font-medium text-gray-700'>
                          PDF файл
                        </p>
                        <a 
                          href={initialUrl} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className='text-xs text-blue-500 hover:underline mt-1'
                          onClick={(e) => e.stopPropagation()}
                        >
                          Открыть
                        </a>
                      </div>
                    ) : acceptVideo ? (
                      <video
                        src={initialUrl}
                        className='w-full h-full object-cover rounded-[28px]'
                        controls={false}
                        muted
                        preload='metadata'
                      />
                    ) : (
                      <img
                        src={initialUrl}
                        alt='Preview'
                        className='w-full h-full object-cover rounded-[28px]'
                      />
                    )}
                    {isDragActive && (
                      <div className='absolute inset-0 bg-blue-50/90 flex items-center justify-center rounded-[28px]'>
                        <p className='text-[14px] text-[#2A85FF] font-medium'>
                          {emptyStateContent.dragText}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className='w-full h-full flex flex-col items-center justify-center'>
                    {emptyStateContent.icon}
                    {isDragActive ? (
                      <p className='text-[14px] text-[#2A85FF] font-medium'>
                        {emptyStateContent.dragText}
                      </p>
                    ) : (
                      showPlaceholder && (
                        <p className='text-[14px] px-5 text-[#727272]'>
                          {emptyStateContent.placeholderText}
                          <span className='font-bold text-[#101010]'>
                            Выберите файлы
                          </span>
                        </p>
                      )
                    )}
                  </div>
                )}
              </div>
            </section>
          )}
        </Dropzone>

        {/* Список загруженных файлов */}
        {previewUrls.length > 0 && (
          <div className='w-full space-y-2'>
            {previewUrls.map((url, index) => (
              <div
                key={index}
                className='max-w-[130px] rounded-[20px] border-[#F1F1F1] p-2 py-3 pl-3 border bg-[#F6F6F8] flex items-center justify-between gap-3'
              >
                <div className='flex items-center gap-3 w-full truncate'>
                  <div className='flex flex-col gap-1 truncate flex-1'>
                    <p className='text-[#101010] text-[14px] font-semibold truncate'>
                      {selectedFiles[index]?.name ||
                        (isPdfFile(selectedFiles[index])
                          ? 'PDF документ'
                          : isVideoFile(selectedFiles[index])
                          ? 'Видео'
                          : 'Изображение')}
                    </p>
                    <p className='text-[14px] text-[#727272] truncate'>
                      {Math.round((selectedFiles[index]?.size || 0) / 1024)} KB
                      {isPdfFile(selectedFiles[index])
                        ? ' • PDF'
                        : isVideoFile(selectedFiles[index])
                        ? ' • Видео'
                        : ' • Изображение'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFile(index)}
                  className='text-white rounded-full w-[40px] h-[40px] p-2 cursor-pointer transition-colors hover:bg-[rgba(44,44,44,0.8)] shadow-[inset_0_1px_2px_0_rgba(248,248,248,0.2)] bg-[#2C2C2C] flex-shrink-0 flex items-center justify-center'
                  type='button'
                >
                  <Trash2 width={16} height={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DnDInput;

// Пример использования:
// 
// import DnDInput from './DnDInput';
// 
// function MyForm() {
//   const handleFileSelect = (files) => {
//     console.log('Selected files:', files);
//   };
// 
//   return (
//     <DnDInput
//       title="Загрузите фото"
//       onFileSelect={handleFileSelect}
//       multiple={true}
//       maxFiles={4}
//     />
//   );
// }
//
// Необходимые зависимости:
// npm install react-dropzone lucide-react