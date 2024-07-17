import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');

  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await actions.signup(email, password, name, lastname, phone);
    navigate('/login');
  };


  return (
    <div>
      <form className="container d-flex justify-content-center vh-100" onSubmit={handleSignup}>
        <div className='col-md-6'>
          <h2 className='text-center text_blue fw-bold mt-3'>Crear Cuenta</h2>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label text_blue fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label text_blue fw-bold">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputLastname" className="form-label text_blue fw-bold">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="inputLastname"
              placeholder="Apellido"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPhone" className="form-label text_blue fw-bold">Telefono</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label text_blue fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="col-md-12 btn btn-primary mt-5">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

//export default Signup