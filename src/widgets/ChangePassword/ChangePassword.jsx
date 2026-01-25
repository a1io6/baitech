import React from 'react';

const ChangePassword = () => {
  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] font-['Montserrat']">
      {/* Общий контейнер 1440px */}
      <div className="max-w-[1440px] mx-auto pt-6 lg:pt-[40px]">
        
        {/* Хлебные крошки (Breadcrumbs) - Мобилдикте кичине padding */}
        <div className="px-4 lg:pl-[80px] mb-8 lg:mb-[40px]">
          <nav className="text-[12px] lg:text-[14px] text-[#4b5563]">
            Главная / Личный кабинет / <span className="text-[#1f2937] font-medium">Изменить пароль</span>
          </nav>
        </div>

        {/* Форма блогу */}
        <div className="px-4 lg:pl-[80px]">
          <form className="flex flex-col gap-6 lg:gap-[25px]">
            
            {/* Пароль инпуту */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] lg:text-[16px] font-medium text-[#1f2937]">
                * Пароль
              </label>
              <input
                type="password"
                placeholder="Пароль"
                className="w-full lg:w-[845px] h-[48px] px-[20px] bg-white border border-[#D1D5DB] rounded-[8px] outline-none focus:border-[#122D52] transition-colors"
              />
            </div>

            {/* Паролду ырастоо инпуту */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] lg:text-[16px] font-medium text-[#1f2937]">
                * Подтвердите пароль
              </label>
              <input
                type="password"
                placeholder="........................"
                className="w-full lg:w-[845px] h-[48px] px-[20px] bg-white border border-[#D1D5DB] rounded-[8px] outline-none focus:border-[#122D52] transition-colors"
              />
            </div>

            {/* Сактоо баскычы - Мобилдикте w-full, Түсү скриншоттогудай кочкул көк */}
            <div className="mt-4 lg:mt-[15px]">
              <button
                type="submit"
                className="w-full lg:w-[280px] h-[52px] lg:h-[48px] bg-[#122D52] text-white font-medium rounded-[8px] hover:bg-[#0d213d] transition-colors text-[16px] lg:text-[14px]"
              >
                Сохранить
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ChangePassword;