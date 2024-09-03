import React from 'react';
import { useAuth } from '../auth/AuthContext'; // Asegúrate de importar tu contexto de autenticación
import { useNavigate } from 'react-router-dom';
import '../assets/styles/VerPerfil.css'; // Asegúrate de agregar los estilos

const VerPerfil = () => {
  const { user } = useAuth(); // Obtener el usuario autenticado
  const navigate = useNavigate();

  const handleEditarPerfil = () => {
    navigate("/editar-perfil");
  };

  return (
    <div className="perfil-container">
      <h2>Mi Perfil</h2>
      <div className="perfil-info">
        <img src={`https://localhost:44309/${user.foto}`} alt="Foto de perfil" className="perfil-photo" />
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Apellido:</strong> {user.apellido}</p>
        <p><strong>Usuario:</strong> {user.user}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Teléfono:</strong> {user.telefono}</p>
        <p><strong>Dirección:</strong> {user.direccion}</p>
      </div>
      <button className="editar-perfil-button" onClick={handleEditarPerfil}>
        Editar Perfil
      </button>
    </div>
  );
};

export default VerPerfil;
