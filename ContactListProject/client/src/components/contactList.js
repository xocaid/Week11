import { useState, useReducer, useEffect } from "react";
import addUser from "./addUser.png"

const reducer = (state, action) => {
  console.log(action, 'this is the action');
  switch (action.type) {
    case 'editFirstName':
      console.log('Logged if the editLastName action is being dispatched');
      return { ...state, first_name: action.payload };

    case 'editLastName':
      console.log('Logged if the editLastName action is being dispatched');
      return { ...state, last_name: action.payload };

    case 'editEmail':
      console.log('Logged if the editEmail action is being dispatched');
      return { ...state, email: action.payload };

    case 'editPhoneNumber':
      console.log('Logged if the editPhoneNumber action is being dispatched');
      return { ...state, phone_number: action.payload };

    case 'editNotes':
      return { ...state, notes: action.payload };

    case 'clearForm':
      return {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        notes: ""
      };

    default:
      return state;
  }
};

const ContactList = () => {
  const [individualContact, setIndividualContact] = useState([]);
  //DISPLAY Button for Add Form
  const [seeAddForm, setSeeAddForm] = useState(false);
  //SEARCH BAR 
  const [searchInput, setSearchInput] = useState('');
  //VIEW Contact
  const [viewContactId, setViewContactId] = useState('');


  const getIndividualContact = async () => {
    const response = await fetch('http://localhost:4002/contacts');
    const individualContact = await response.json();
    setIndividualContact(individualContact);
  };

  useEffect(() => {
    getIndividualContact();
  }, []);

  //const initialState is associated with useReducer below(const [state, dispatch = useReducer(reducer, initialState)])
  //initialState needs to be declared for useReducer
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    notes: ""
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //ADD CONTACT  - EVENT HANDLER
  const handleAddIndivdualContact = async (e) => {
    e.preventDefault();
    const newIndividualContact = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      phone_number: state.phone_number,
      notes: state.notes
    };
    setSearchInput(e.target.value);

    const response = await fetch('http://localhost:4002/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newIndividualContact)
    });
    const content = await response.json();
    setIndividualContact([...individualContact, content]);
    dispatch({ type: 'clearForm' })
  };

  // DELETE EVENT  - EVENT HANDLER
  const handleDeleteContact = async (dltContactCallback) => {
    const response = await fetch(`http://localhost:4002/contacts/${dltContactCallback}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteContactFunction = individualContact.filter((i) => i.id !== dltContactCallback);
    setIndividualContact(deleteContactFunction);
  }

  //TOGGLE - Add Contact Form BUTTON
  const handleButton = () => {
    setSeeAddForm(!seeAddForm);
  };

  //TOGGLE - Table Headers
  const handleView = () =>{
    setViewContactId(!viewContactId);
  }

  return (
    <section className="listofcontacts-page">
      <h2>List of Contacts</h2>
      <div>
        <h3>All Individuals</h3>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => { setSearchInput(e.target.value) }}
        />

        <table className="listofcontacts-table">
          <thead>
            <tr className='table-heading'>
              {/* Instead of listing each individual header, map it out. */}
              {/* If/else can't be used so had to use && as per googling, it's working*/}
              {viewContactId !== '' &&
                ['First Name', 'Last Name', 'Email', 'Phone Number', 'Notes', '', ''].map((item) => (
                  <th key={item}>
                    {item}
                  </th>
                ))
                ||
                viewContactId === '' &&
                ['First Name', 'Last Name', ''].map((item) => (
                  <th key={item}>
                    {item}
                  </th>
                ))
              }
            </tr>
          </thead>

          <tbody>
            {/* DISPLAY CONTACTS LIST */}
            {/* FILTER FOR SEARCH INPUT - first & last name, email, phone# */}
            {individualContact.filter((value) => {
              if (searchInput === "") {
                return value
              } else if (value.first_name.toLowerCase().includes(searchInput.toLowerCase()) || value.last_name.toLowerCase().includes(searchInput.toLowerCase()) || value.email.toLowerCase().includes(searchInput.toLowerCase()) || value.phone_number.toLowerCase().includes(searchInput.toLowerCase())) {
                return value
              }
            }).map((contact, index) => {
              if (contact.id === viewContactId) {
                return (
                  <tr key={index}>
                    <td> {contact.first_name} </td>
                    <td> {contact.last_name} </td>
                    <td>{contact.email} </td>
                    <td>{contact.phone_number} </td>
                    <td> {contact.notes} </td>
                    <td><button onClick={() => setViewContactId('')}>View</button></td>
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td> {contact.first_name} </td>
                    <td> {contact.last_name} </td>
                    {/* <td>{contact.email} </td>
                  <td>{contact.phone_number} </td>
                  <td> {contact.notes} </td> */}
                    <td> <button className="delete-button" onClick={() => handleDeleteContact(contact.id)}>Delete</button> <button>Edit</button> </td>
                    <td><button onClick={() => setViewContactId(contact.id)}>View</button></td>
                  </tr>
                );
              };
            })}
          </tbody>
        </table>

        {/* See Add Contact Form Button */}
        {seeAddForm ? (

          <div className="AddContactDiv">
            <h3>Add Contact</h3>
            <form id="add-contact" className="formborder" action="#" onSubmit={handleAddIndivdualContact}>
              <fieldset>

                <label>First Name: </label>
                <input
                  type="text"
                  id="editFirstName"
                  placeholder="Jane"
                  value={state.first_name}
                  onChange={(e) =>
                    dispatch({
                      type: "editFirstName",
                      payload: e.target.value,
                    })
                  }
                />
                <br />
                <label>Last Name: </label>
                <input
                  type="text"
                  id="editLastName"
                  placeholder="Smith"
                  value={state.last_name}
                  onChange={(e) =>
                    dispatch({
                      type: "editLastName",
                      payload: e.target.value,
                    })
                  }
                />
                <br />

                <label>Email: </label>
                <input
                  type="text"
                  id="editEmail"
                  placeholder="jsmith@gmail.com"
                  value={state.email}
                  onChange={(e) =>
                    dispatch({
                      type: "editEmail",
                      payload: e.target.value,
                    })
                  }
                />
                <br />

                <label>Phone Number: </label>
                <input
                  type="text"
                  id="editPhoneNumber"
                  placeholder="(123)555-4567"
                  value={state.phone_number}
                  onChange={(e) =>
                    dispatch({
                      type: "editPhoneNumber",
                      payload: e.target.value,
                    })
                  }
                />
                <br />

                <label>Notes: </label>
                <input
                  type="text"
                  id="editNotes"
                  value={state.notes}
                  onChange={(e) =>
                    dispatch({
                      type: "editNotes",
                      payload: e.target.value,
                    })
                  }
                />
                <br />

              </fieldset>
              <input type="submit" value="Add Individual" />
            </form>
            <button onClick={handleButton}> Close</button>
          </div>
        ) : (
          <div>
            <br />
            <img src={addUser} className="icon" alt="add-user" onClick={handleButton} />
          </div>
        )}
      </div>
    </section>
  )
}
export default ContactList;