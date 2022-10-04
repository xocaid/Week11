// import { useState, useEffect } from 'react';
// import AddContactForm from './addContactForm';
// import ViewCard from './contactView';


// function ListContact() {
//   const [individualContact, setIndividualContact] = useState([]);

//   //Added for curentContact useState
//   const values = { 
//     id: "",
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone_number: "",
//     notes: ""
//   };

//   useEffect(() => {
//     fetch("http://localhost:5002/contacts")
//       .then((response) => response.json())
//       .then((individualContact) => {
//         setIndividualContact(individualContact);
//       });
//   }, []);

//   //ADD SPECIES - EVENT HANDLER
//   const handleAddContact = (contact) => {
//     setIndividualContact((contact) => [...contact, contact]);
//   };

//   //DELETE SPECIES - EVENT HANDLER
//   const handleDeleteContact = async (deleteContactCallback) => {
//     const response = await fetch(`http://localhost:5002/contacts/${deleteContactCallback}`, {
//       method: 'DELETE',
//     })
//     await response.json();
//     const deleteContactFunction = individualContact.filter((i) => i.id !== deleteContactCallback);
//     setIndividualContact(deleteContactFunction);
//   };

//   //VIEW
//   const [viewContactId, setViewContactId] = useState();

//   return (
//     <div>

// <table className="listofcontacts-table">
//           <thead>
//             <tr className='table-heading'>
//               {/* Instead of listing each individual header, map it out. */}
//                {['ID', 'First Name', 'Last Name', 'Email', 'Phone Number', 'Notes', '', ''].map((item) => (
//                   <th key={item}>
//                     {item}
//                   </th>
//                 ))
//               }
//             </tr>
//           </thead>
//           <tbody>
//             {/* Display all Individuals here */}
//             {individualContact.map((contact, index) => {
//               if(contact.id === viewContactId){
//                 return(
//                 <tr key={index}>
//                   <td>{contact.id} </td>
//                   <td> {contact.first_name} </td>
//                   <td> {contact.last_name} </td>
//                   <td>{contact.email} </td>
//                   <td>{contact.phone_number} </td>
//                   <td> {contact.notes} </td>
//                   <td><button onClick={() => setViewContactId(true)}>View</button></td>
//                   </tr>
//                 );
//               }else{
//               return (
//                 <tr key={index}>
//                   <td>{contact.id} </td>
//                   <td> {contact.first_name} </td>
//                   <td> {contact.last_name} </td>
//                   {/* <td>{contact.email} </td>
//                   <td>{contact.phone_number} </td>
//                   <td> {contact.notes} </td> */}
//                   <td> <button className="delete-button" onClick={() => handleDeleteContact(contact.id)}>Delete</button> <button>Edit</button> </td>
//                   <td><button onClick={() => setViewContactId(contact.id)}>View</button></td>
//                 </tr>
//               );
//             };
//           })}
//           </tbody>
//         </table>

//     <div>
//       <ViewCard/>
//       <AddContactForm addContact={handleAddContact}/>
//       </div>
//     </div>
//   );
// }

// export default ListContact;