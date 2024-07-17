import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Carousel } from "../component/Carousel.jsx"


export const Home = () => {
	const { store, actions } = useContext(Context);



	return (
		<div>
			<Carousel />
			<div className="container mt-5">
				<h1>Bienvenido a PetShop</h1>
				<p>Tu tienda única para todas las necesidades de tu mascota. Desde comida hasta juguetes, tenemos todo para mantener a tus mascotas felices y saludables.</p>
			</div>
		</div>
	);
};
