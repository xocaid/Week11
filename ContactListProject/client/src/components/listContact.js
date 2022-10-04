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
//   // const [viewContactId, setViewContactId] = useState();

//   return (
//     <div>
// <ViewCard/>
//     <div>
//       <AddContactForm addContact={handleAddContact}/>
//       </div>
//     </div>
//   );
// }

// export default ListContact;