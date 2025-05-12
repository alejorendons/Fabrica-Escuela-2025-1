import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterSuccess = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>¡Registro Exitoso!</h2>
      <p>Tu cuenta ha sido creada correctamente.</p>
      <button onClick={handleGoToLogin} style={{ marginTop: '1rem' }}>
        Ir al Login
      </button>
    </div>
  );
};

export default RegisterSuccess;
