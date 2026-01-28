import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-wrapper">
      <div className="inner-content">
        <div className="error-visual">
          <h1 className="error-number">404</h1>
          <div className="divider"></div>
        </div>
        
        <h2 className="error-heading">Упс! Баракча табылган жок</h2>
        <p className="error-description">
          Сиз издеген баракча өчүрүлгөн же дареги өзгөртүлгөн болушу мүмкүн. 
          Төмөндөгү баскычты басып башкы бетке өтүңүз.
        </p>

        <button className="go-home-button" onClick={() => navigate('/')}>
          На главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;