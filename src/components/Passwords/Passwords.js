// import { useState } from 'react';
// var axios = require('axios');

// // Ownner must be linked to some sort of user ID
// const Passwords = (props) => {
//   const [values, setValues] = useState({
//     owner: '',
//     name: '',
//     username: '',
//     password: '',
//     description: ''
//   })

//   const submitHandler = (event) => {
//     var config = {
//       method: 'post',
//       url: 'http://localhost:3000/passwords/',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       data : {"owner": props.username, "name": name, "username": username,"password": password,"description":description}
//     };

//     axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <h1> Create Password </h1>
//         <label>Enter Name: </label>
//         <input type="text" placeholder="Enter name" value={values} onChange={(event) => setValues(event.target.value)} />
//         <label>Enter Username: </label>
//         <input type="text" placeholer="Enter username" value={values} onChange={(event) => setValues(event.target.value)} />
//         <label>Enter Password: </label>
//         <input type="text" placeholer="Enter password" value={values} onChange={(event) => setValues(event.target.value)} />
//         <label>Enter Description: </label>
//         <input type="text" placeholer="Enter description" value={values} onChange={(event) => setValues(event.target.value)} />

//         <button className="button" type="submit">Click to Register</button>
//     </form>
//   )
// }
