import { useState, useEffect } from 'react';
import AddUser from './addUser';

function User() {
  const [users, setUsers] = useState([]);
  const [seeAddForm, setSeeAddForm] = useState(false);

  const values = {
    username: "",
    first_name: "",
    last_name: "",
    email: ""
  };

  const getUsers = async () => {
    const response = await fetch(`http://localhost:5003/users`);

    const user = await response.json();
    setUsers(user);
    console.log('user', user)
  };
  useEffect(() => {
    getUsers();
  }, []);

  //ADD USER - EVENT HANDLER
  const handleAddUser = (newUser) => {
    setUsers((user) => [...user, newUser]);
  };

  //SEE ADD FORM - TOGGLE
  const handleButton = () => {
    setSeeAddForm(!seeAddForm);
  };

  //DELETE USER - EVENT HANDLER
  // const handleDeleteContact = async (deleteUserCallback) => {
  //   const response = await fetch(`http://localhost:5003/users/${deleteUserCallback}`, {
  //     method: 'DELETE',
  //   })
  //   await response.json();
  //   const deleteUserFunction = users.filter((i) => i.id !== deleteUserCallback);
  //   setUsers(deleteUserFunction);
  // };

  //SEARCH USER
  // const [viewUserId, setViewUserId] = useState();

  return (
    <div>
      <div className='users-container'>
        <h3>Users</h3>
        <ul id="users">
          {users.map((user, index) => {
            return (
              <li key={index}> {user.username}
              </li>);
          })}
        </ul>
      </div>

      {seeAddForm ? (
        <AddUser addContact={handleAddUser} />
      ) : (<button type="viewAdd" onClick={handleButton}>Add User</button>)
      }
    </div>
  );
}

export default User;