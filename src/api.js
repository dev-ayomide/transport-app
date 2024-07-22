// const API = {
//     register: async (formData) => {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || 'Failed to register');
//       return data;
//     },
//     login: async (credentials) => {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || 'Failed to login');
//       return data;
//     },
//   };
  
//   export default API;
  