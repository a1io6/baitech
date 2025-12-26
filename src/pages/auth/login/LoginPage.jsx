import React, { useState } from "react";
import InputField from "../../../shared/ui/InputField/InputField";
import Button from "../../../shared/ui/ButtonRegister/Button";
import Divider from "../../../shared/ui/Divider/Divider";
import "./LoginPage.scss";
import { Link, useNavigate } from "react-router";
import CloseRegister from "../../../shared/ui/CloseRegister/CloseRegister";

const LoginPage = ({ type = "login" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`login-form `}>
      <div className="login-form__container">
      <CloseRegister onClose={() => {navigate("/")}}/>
        <header className="login-form__header">
          <h2
            onClick={() => navigate("/login")}
            className={`login-form__title ${type === "login" ? "active" : ""}`}
          >
            Вход
          </h2>
          <h2
            href="#"
            className={`login-form__title ${
              type === "register" ? "active" : ""
            }`}
            onClick={() => navigate("/register")}
          >
            Регистрация
          </h2>
        </header>

        <form onSubmit={handleSubmit} className="login-form__form">
          {type === "register" && (
            <>
              <InputField
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                required
              />
              <InputField
                type="text"
                placeholder="Введите фамилию"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                disabled={isLoading}
                required
              />
              <InputField
                type="number"
                placeholder="Введите телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
                required
              />
            </>
          )}
          <InputField
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
          />

          <InputField
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />

          {error && <div className="login-form__error">{error}</div>}

          <Divider />

          {type === "register" && (
            <div className="login-form__terms-container">
              <input type="checkbox" className="login-form__terms-checkbox" />
              <p className="login-form__terms">
                Регистрируясь вы соглашаетесь с нашими{" "}
                <a href="#" className="login-form__terms-link">
                  условиями обслуживания
                </a>
              </p>
            </div>
          )}

          <Button
            type="submit"
            variant="dark-blue"
            size="large"
            fullWidth
            loading={isLoading}
            disabled={isLoading}
          >
            Войти
          </Button>
        </form>

        {type === "login" && (
          <footer className="login-form__footer">
            <Link to="/forgot-password" className="login-form__forgot-password">
              Забыли пароль?
            </Link>
          </footer>
        )}
      </div>

    </div>
  );
};

export default LoginPage;
