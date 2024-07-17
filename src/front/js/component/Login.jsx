import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

    /*const handleLogin = async (e) => {
        e.preventDefault();
        await actions.login(email, password);
        if (store.isAuthenticated) {
            navigate('/private');
        }
    };*/

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await actions.login(email, password);
        if (success) {
            navigate('/private');
        } else {
            alert("Credenciales inválidas");
        }
    };


    return (
        <div className='container'>
            <form className='d-flex justify-content-center mt-4 row' onSubmit={handleLogin}>
                <div className='col-md-6'>
                    <h2 className='text-center text_blue fw-bold'>Login</h2>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text_blue fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div id="emailHelp" className="form-text">No compartiremos tu email con nadie mas.</div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text_blue fw-bold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="col-md-12 btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

//export default Login