// import { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { CREATE_USER_MUTATION } from '../graphql/Mutations';
// import { useEffect } from 'react'; 


// const CreateUser = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [address, setAddress] = useState('');

//   const [createUser, { loading, error, data }] =
//     useMutation(CREATE_USER_MUTATION);


//   useEffect(() => {
//     // When the component is mounted, set overflow to hidden
//     document.body.style.overflow = 'hidden';

//     // When the component is unmounted, reset overflow
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();

//     createUser({
//       variables: {
//         name: name,
//         age: Number(age),
//         address: address,
//       },
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           required
//           type="text"
//           placeholder="Name"
//           onChange={e => {
//             setName(e.target.value);
//           }}
//         />
//         <input
//           required
//           type="number"
//           placeholder="Age"
//           onChange={e => {
//             setAge(e.target.value);
//           }}
//         />
//         <input
//           required
//           type="text"
//           placeholder="Address"
//           onChange={e => {
//             setAddress(e.target.value);
//           }}
//         />
//         <button type="submit">Create User</button>
//       </form>
//       <h2>Newly Added User</h2>
//       {loading && <div>Loading...</div>}
//       {error && <div>{error.message}</div>}
//       {data && <p>{data.createUser.name}</p>}
//     </div>
//   );
// };

// export default CreateUser;
