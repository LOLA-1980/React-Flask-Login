//const BASE_URL = 'https://fuzzy-space-system-gj7wg6jq49rh75q-3001.app.github.dev';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			/*users: [
				// Usuario predeterminado
				{
					email: "test@example.com",
					password: "password123",
					name: "Lola",
					lastname: "Hernandez",
					phone: 1234567
				}
			],*/ // Agrega una lista de usuarios para simular la base de datos

			token: localStorage.getItem('token') || null,
			isAuthenticated: !!localStorage.getItem('token')
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			login: async (email, password) => {
				const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password })
				});
				const data = await response.json();
				if (response.ok) {
					localStorage.setItem('token', data.token);
					setStore({ isAuthenticated: true, token: data.token });
					return true;  // Retorna true si el login fue exitoso
				} else {
					console.log(data.msg);
					return false;  // Retorna false si hubo un error
				}
			},


			signup: async (email, password, name, lastname, phone) => {
				const response = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password, name, lastname, phone })
				});
				const data = await response.json();
				if (!response.ok) {
					console.log(data.msg);
				} else {
					alert('Usuario registrado exitosamente');
					navigate('/login');
				}
			},

			getPrivateMessage: async () => {
				const token = store.token;
				const response = await fetch(`${process.env.BACKEND_URL}/api/private`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});
				const data = await response.json();
				if (response.ok) {
					setStore((prevState) => ({
						...prevState,
						message: data.msg
					}));
				} else {
					console.log(data.msg);
				}
			},

			logout: () => {
				localStorage.removeItem('token');
				setStore({ isAuthenticated: false, token: null });
				getActions().navigate('/login');
			},


			/*signup: async (email, password) => {
				const response = await fetch('/api/signup', {
					method: 'POST',
					headers:{
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, password }),
				})
			}*/
			/*signup: async (email, password, name, lastname, phone) => {
				const store = getStore();
				const newUser = { email, password, name, lastname, phone };
				//Simula la adicion del usuario a la base de datos
				setStore({ users: [...store.users, newUser] });

				alert('Usuario registrado exitosamente');
				window.location.href = '/login';
			},*/
			/*login: async (email, password) => {
				const store = getStore();
				const user = store.users.find(user => user.email === email && user.password === password);

				if (user) {
					const token = "fake-token"; // Simula un token de autenticación
					sessionStorage.setItem('token', token);
					setStore({ token, isAuthenticated: true });
				} else {
					alert('Credenciales Inválidas');
				}
			},*/
			/*logout: () => {
				sessionStorage.removeItem('token');
				setStore({ token: null, isAuthenticated: false });
			}*/
		}
	};
};

export default getState;
