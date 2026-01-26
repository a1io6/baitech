import React from 'react';

const AddAddressPage = () => {
  const inputFields = [
    { label: "* Имя", placeholder: "Name" },
    { label: "* Фамилия", placeholder: "Surname" },
    { label: "* email", placeholder: "Email address" },
    { label: "* Адрес 1", placeholder: "..........................." },
    { label: "* Адрес 2", placeholder: "..........................." },
    { label: "* Почтовый индекс", placeholder: "..........................." },
    { label: "* Страна", placeholder: "..........................." },
    { label: "* Регион / Область", placeholder: "..........................." },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] font-['Montserrat'] py-[40px]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Хлебные крошки */}
        <div className="pl-[80px] mb-[40px]">
          <nav className="text-[14px] text-[#4b5563]">
            Главная / Личный кабинет / <span className="text-[#1f2937] font-medium">Адресная книга</span>
          </nav>
        </div>

        {/* Форма контейнери */}
        <form className="pl-[80px] flex flex-col">
          <div className="flex flex-col gap-[20px]">
            {inputFields.map((field, index) => (
              <div key={index} className="flex flex-col gap-[8px]">
                <label className="text-[16px] font-medium text-[#1f2937]">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-[848px] h-[48px] px-[20px] bg-white border border-[#D1D5DB] rounded-[8px] outline-none focus:border-[#122D52] transition-colors shadow-sm"
                />
              </div>
            ))}
          </div>

          {/* Радио кнопкалар (Основной адрес) */}
          <div className="mt-[46px] flex flex-col gap-[15px]">
            <span className="text-[16px] font-medium text-[#1f2937]">Основной адрес</span>
            <div className="flex gap-[30px] items-center">
              <label className="flex items-center gap-[10px] cursor-pointer">
                <input type="checkbox" className="w-[18px] h-[18px] accent-[#122D52]" defaultChecked />
                <span className="text-[14px]">Да</span>
              </label>
              <label className="flex items-center gap-[10px] cursor-pointer">
                <input type="checkbox" className="w-[18px] h-[18px] accent-[#122D52]" />
                <span className="text-[14px]">Нет</span>
              </label>
            </div>
          </div>

          {/* Сактоо баскычы */}
          <div className="mt-[60px] pb-[100px]">
            <button
              type="submit"
              className="w-[280px] h-[48px] bg-[#122D52] text-white font-medium rounded-[8px] hover:bg-[#0d213d] transition-all text-[16px]"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressPage;