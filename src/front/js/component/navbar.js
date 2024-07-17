import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        actions.logout();
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg background_blue">
            <div className='container-fluid'>
                <Link className='navbar-brand d-flex text-white fw-bold fs-1' to='/'>PetShop</Link>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        {!store.isAuthenticated ? (
                            <>
                                <li className='nav-item'>
                                    <Link className='nav-link text-white fs-5' to='/signup'>Signup</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link text-white fs-5' to='/login'>Login</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='nav-item'>
                                    <Link className='nav-link text-white fs-5' to='/private'>Private</Link>
                                </li>
                                <li className='nav-item'>
                                    <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
