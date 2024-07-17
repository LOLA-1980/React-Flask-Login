import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.isAuthenticated) {
      navigate('/login');
    } else {
      actions.getPrivateMessage();
    }
  }, [store.isAuthenticated, navigate, actions]);


  return (
    <div className='container'>
      <h1 className='text-center mt-4'>Página Privada</h1>
      <div className='text-center'>
        {store.message ? <p>{store.message}</p> : <p>Loading...</p>}
      </div>
    </div>
  );

};

//export default Private;
