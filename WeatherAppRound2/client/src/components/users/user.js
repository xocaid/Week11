import { useState, useEffect } from 'react';
import AddUser from './addUser';

function User() {
  const [users, setUsers] = useState([]);

  const values = {
    id: "",
    username: "",
    first_name: "",
    last_name: "",
    email: ""
  };

  const getUsers = async () => {
    const response = await fetch(`http://localhost:5003/users`);
    const user = await response.json();
    setUsers(user);
  };
  useEffect(() => {
    getUsers();
  }, []);

  //ADD USER - EVENT HANDLER
  const handleAddUser = (newUser) => {
    setUsers((user) => [...user, newUser]);
  };

  // //DELETE USER - EVENT HANDLER
  // const handleDeleteContact = async (deleteUserCallback) => {
  //   const response = await fetch(`http://localhost:3001/users/${deleteUserCallback}`, {
  //     method: 'DELETE',
  //   })
  //   await response.json();
  //   const deleteUserFunction = users.filter((i) => i.id !== deleteUserCallback);
  //   setUsers(deleteUserFunction);
  // };

  //VIEW
  // const [viewUserId, setViewUserId] = useState();

  return (
    <div>
      {/* <ul id="users-list">
        {users.map((user, index) => {
          return (
            <li key={index}> Name: {user.name}, Id: {user.id}, Email: {user.email}
            </li>);
        })}
      </ul> */}

<h1>hello world</h1>
[{users.username}]

      <AddUser addContact={handleAddUser} />

    </div>
  );
}

export default User;