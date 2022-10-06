import { useState } from "react";

const DeleteUser = ({deleteUserCallback}) => {

const [deleteUserId, setDeleteUserId] = useState('');

const handleDeleteUser = (e) => {
  e.preventDefault();
  deleteUserCallback(deleteUserId);
  setDeleteUserId('');
}

  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={handleDeleteUser}>
        <fieldset>
          <label> ID: </label>
          <input 
          type="number" 
          min="1" 
          id="delete-contact-id"
          value={deleteUserId}
          onChange={(e) => setDeleteUserId(e.target.value)}
          />
        </fieldset>
        <input 
        type="submit"/>
      </form>
    </div>
  )
}
export default DeleteUser;