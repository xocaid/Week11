import { useState, useReducer, useEffect } from "react";


const reducer = (state, action) => {
  console.log(action, 'this is the action');
  switch (action.type) {
    case 'editId':
      console.log('Logged if the editId action is being dispatched');
      return { ...state, id: action.payload };

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
        id: "",
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

  const getIndividualContact = async () => {
    const response = await fetch('http://localhost:5002/contacts');
    const individualContact = await response.json();
    setIndividualContact(individualContact);
  };

  useEffect(() => {
    getIndividualContact();
  }, []);

  //const initialState is associated with useReducer below(const [state, dispatch = useReducer(reducer, initialState)])
  //initialState needs to be declared for useReducer
  const initialState = {
    id: "",
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
      id: state.id,
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      phone_number: state.phone_number,
      notes: state.notes
    };
    setSearchInput(e.target.value);

    const response = await fetch('http://localhost:5002/contacts', {
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
    const response = await fetch(`http://localhost:5002/contacts/${dltContactCallback}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteContactFunction = individualContact.filter((i) => i.id !== dltContactCallback);
    setIndividualContact(deleteContactFunction);
  }
  //VIEW
  const [viewContactId, setViewContactId] = useState();

  //SEARCH BAR - create variable
  const [searchInput, setSearchInput] = useState("");



  return (
    <section className="listofcontacts-page">
      <h2>List of Contacts</h2>
      <div>
        <h3>All Individuals</h3>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {setSearchInput(e.target.value)}}
        />

        <table className="listofcontacts-table">
          <thead>
            <tr className='table-heading'>
              {/* Instead of listing each individual header, map it out. */}
              {['ID', 'First Name', 'Last Name', 'Email', 'Phone Number', 'Notes', '', ''].map((item) => (
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
            {individualContact.filter((value) =>{
              if(searchInput == ""){
                return value
              }else if(value.first_name.toLowerCase().includes(searchInput.toLowerCase()) || value.last_name.toLowerCase().includes(searchInput.toLowerCase()) || value.email.toLowerCase().includes(searchInput.toLowerCase()) || value.phone_number.toLowerCase().includes(searchInput.toLowerCase()) ){
                return value
              }
            }).map((contact, index) => {
              if (contact.id === viewContactId) {
                return (
                  <tr key={index}>
                    <td>{contact.id} </td>
                    <td> {contact.first_name} </td>
                    <td> {contact.last_name} </td>
                    <td>{contact.email} </td>
                    <td>{contact.phone_number} </td>
                    <td> {contact.notes} </td>
                    <td><button onClick={() => setViewContactId(true)}>View</button></td>
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td>{contact.id} </td>
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



        <div className="AddContactDiv">
          <h3>Add Contact</h3>
          <form id="add-contact" className="formborder" action="#" onSubmit={handleAddIndivdualContact}>
            <fieldset>
              <label>ID: </label>
              <input
                type="text"
                id="editId"
                placeholder="Contact ID"
                value={state.id}
                onChange={(e) =>
                  dispatch({
                    type: "editId",
                    payload: e.target.value,
                  })
                }
              />
              <br />

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
        </div>
      </div>
    </section>
  )
}
export default ContactList;