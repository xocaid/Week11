// import { useState } from "react";


// const ViewCard = (props, {viewCallback}) => {

//   //VIEW
//   const [viewContactId, setViewContactId] = useState(false);
  
//   const [viewFirstName, setViewFirstName] = useState('');
//   const [viewLastName, setViewLastName] = useState('');
//   const [viewEmail, setViewEmail] = useState('');
//   const [viewPhoneNumber, setViewPhoneNumber] = useState('');
//   const [viewNotes, setViewNotes] = useState('');

//   const handleView = (e) => {
//     e.preventDefault();
//     viewCallback(contact.id);
//     setViewContactId(false);

//   }

//   return (
//     <table className="listofcontacts-table">
//       <thead>
//         <tr className='table-heading'>
//           {/* Instead of listing each individual header, map it out. */}
//           {['ID', 'First Name', 'Last Name', 'Email', 'Phone Number', 'Notes', '', ''].map((item) => (
//             <th key={item}>
//               {item}
//             </th>
//           ))
//           }
//         </tr>
//       </thead>
//       <tbody>
//         {/* Display all Individuals here */}
//         {props.individualContact.map((contact, index) => {
//           if (contact.id === viewContactId) {
//             return (
//               <tr key={index}>
//                 <td>{contact.id} </td>
//                 <td> {contact.first_name} </td>
//                 <td> {contact.last_name} </td>
//                 <td>{contact.email} </td>
//                 <td>{contact.phone_number} </td>
//                 <td> {contact.notes} </td>
//                 <td><button onClick={() => setViewContactId(true)}>View</button></td>
//               </tr>
//             );
//           } else {
//             return (
//               <tr key={index}>
//                 <td>{contact.id} </td>
//                 <td> {contact.first_name} </td>
//                 <td> {contact.last_name} </td>
//                 <td> <button className="delete-button" onClick={() => handleDeleteContact(contact.id)}>Delete</button> <button>Edit</button> </td>
//                 <td><button onClick={() => setViewContactId(contact.id)}>View</button></td>
//               </tr>
//             );
//           };
//         })}
//       </tbody>
//     </table>
//   )
// }
// export default ViewCard;