 import { useState } from "react";

const DeleteIndividualContact = ({dltContactCallback}) => {

const [deleteContactId, setDeleteContactId] = useState('');

const handleDeleteIndividualContact = (e) => {
  e.preventDefault();
  dltContactCallback(deleteContactId);
  setDeleteContactId('');
}

  return (
    <div>
      <h3>Delete Contact</h3>
      <form id="delete-contact" action="#" onSubmit={handleDeleteIndividualContact}>
        <fieldset>
          <label> ID: </label>
          <input 
          type="number" 
          min="1" 
          id="delete-contact-id"
          value={deleteContactId}
          onChange={(e) => setDeleteContactId(e.target.value)}
          />
        </fieldset>
        <input 
        type="submit"/>
      </form>
    </div>
  )
}
export default DeleteIndividualContact;