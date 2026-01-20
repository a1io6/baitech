import React from "react";
import InputField from "../../../shared/ui/InputField/InputField";
import Button from "../../../shared/ui/ButtonRegister/Button";
import "./ForgotPassword.scss";
import CloseRegister from "../../../shared/ui/CloseRegister/CloseRegister";
import { useNavigate } from "react-router";

function ForgotPassword({ type = "forgotPassword" }) {
    const navigate = useNavigate()
  return (

    <div className="forgot-password-page-container">
        <CloseRegister onClose={() => {navigate("/")}}/>
      <div className="forgot-password-page">
        <h2 className="forgot-password-page__title">
          {type === "forgotPassword"
            ? "Забыли пароль?"
            : "Создайте новый пароль"}
        </h2>
        <h4 className="forgot-password-page__subtitle">{type === "forgotPassword" ? "Введите почту, к которой привязан ваш аккаунт" : "Введите новый пароль"}</h4>
        <form className="forgot-password-page__form">
          {type === "forgotPassword" ? (
            <InputField type="email" required placeholder="Введите email" />
          ) : (
            <>
              <InputField
                type="password"
                required
                placeholder="Введите новый пароль"
              />
              <InputField
                type="password"
                required
                placeholder="Повторите новый пароль"
              />
            </>
          )}
          <Button type="submit" variant="dark-blue">
            {type === "forgotPassword"
              ? "Получить код"
              : "Сохранить новый пароль"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
