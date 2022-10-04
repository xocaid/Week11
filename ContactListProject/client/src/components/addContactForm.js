import { useState } from 'react';


const AddContactForm = (props) => {
  const [contactForm, setContactForm] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    notes: ""
  });

  //create functions that handle the event of the user typing into the form
  const handleId = (event) => {
    const contactId = event.target.value;
    setContactForm((contact) => ({ ...contact, name: contactId }));
  };

  const handleFirstName = (event) => {
    const contactFirstName = event.target.value;
    setContactForm((contact) => ({ ...contact, type: contactFirstName }));
  };
  const handleLastName = (event) => {
    const contactLastName = event.target.value;
    setContactForm((contact) => ({ ...contact, population: contactLastName }));
  };
  const handleEmail = (event) => {
    const contactEmail = event.target.value;
    setContactForm((contact) => ({ ...contact, created_on: contactEmail }));
  };
  const handlePhoneNumber = (event) => {
    const contactPhoneNumber = event.target.value;
    setContactForm((contact) => ({ ...contact, created_on: contactPhoneNumber }));
  };
  const handleNotes = (event) => {
    const contactNotes = event.target.value;
    setContactForm((contact) => ({ ...contact, created_on: contactNotes }));
  };

  //A function to handle the post request
  const postContact = (newContact) => {
    return fetch("http://localhost:5002/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addContact(data);
      });
  };
//addContact will be the props
  const handleAddContact = (e) => {
    e.preventDefault();
    postContact(contactForm);
    setContactForm({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      notes: ""
    })
  };
  

  return (
    <form onSubmit={handleAddContact} className="formborder" >
      <fieldset>

      <label>ID: </label>
        <input
          type="text"
          id="add-id"
          value={contactForm.id}
          onChange={handleId}
        />
        <br />

        <label>First Name: </label>
        <input
          type="text"
          id="add-first -name"
          placeholder="Jane"
          required
          value={contactForm.first_name}
          onChange={handleFirstName}
        />
        <br />

        <label>Last Name: </label>
        <input
          type="text"
          id="add-last-name"
          placeholder="Smith"
          value={contactForm.last_name}
          onChange={handleLastName}
        />
        <br />

        <label>Email: </label>
        <input
          type="text"
          id="add-email"
          placeholder="jsmith@gmail.com"
          value={contactForm.email}
          onChange={handleEmail}
        />
        <br />

        <label>Phone Number: </label>
        <input
          type="text"
          id="add-phone-number"
          placeholder="(123)555-4567"
          required
          value={contactForm.phone_number}
          onChange={handlePhoneNumber}
        />
        <br />

        <label>Notes: </label>
        <input
          type="text"
          id="add-notes"
          value={contactForm.notes}
          onChange={handleNotes}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddContactForm;