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
			auth: false
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: async (email, password) => {
				const requestOptions = {  
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/login', requestOptions);
					if (response.ok) {
						const data = await response.json();
						localStorage.setItem("token", data.access_token);
						setStore({ auth: true });
						return true; // Login successful
					} else {
						setStore({ auth: false });
						return false; // Login failed
					}
				} catch (error) {
					console.error("Login error:", error);
					setStore({ auth: false });
					return false; // Login failed
				}
			},
			checkAuth: () => {
				const token = localStorage.getItem('token');
				if (token) {
					setStore({ auth: true });
				} else {
					setStore({ auth: false });
				}
			},
			logout: () => {
				console.log('logout desde flux');
				localStorage.removeItem("token");
				setStore({ auth: false });
			},
			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			signup: async (email, password) => {
				// Lógica para registrar un nuevo usuario
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password })
				};
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/signup", requestOptions);
					return response.ok; // return true if response.ok, otherwise false
				} catch (error) {
					console.error("Error en el registro:", error);
					return false;
				}
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
