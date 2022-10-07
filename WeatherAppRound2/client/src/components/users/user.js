import { useState, useEffect } from 'react';
import AddUser from './addUser';
import ViewFavWeather from '../weather/viewFavWeatherCard';


function User() {
  const [users, setUsers] = useState([]);
  const [seeAddForm, setSeeAddForm] = useState(false);
  const [viewUserWeather, setViewUserWeather] = useState(true);


  const values = {
    id: "",
    username: "",
    first_name: "",
    last_name: "",
    email: ""
  };

  useEffect(() => {
    fetch("http://localhost:5003/users")
      .then((response) => response.json())
      .then((user) => {
        setUsers(user);
        console.log('user', user)
      });
  }, []);

  //Code works too
  // const getUsers = async () => {
  //   const response = await fetch(`http://localhost:5003/users`);

  //   const user = await response.json();
  //   setUsers(user);
  //   console.log('user', user)
  // };
  // useEffect(() => {
  //   getUsers();
  // }, []);

  //ADD USER - EVENT HANDLER
  const handleAddUserP = (newUser) => {
    setUsers((user) => [...user, newUser]);
  };

  //SEE ADD FORM - TOGGLE
  const handleButton = () => {
    setSeeAddForm(!seeAddForm);
  };

  //SEE USERS INFO - TOGGLE
  const handleView = () => {
    setViewUserWeather(!viewUserWeather);
  }



  //DELETE USER - EVENT HANDLER
  // const handleDeleteContact = async (deleteUserCallback) => {
  //   const response = await fetch(`http://localhost:5003/users/${deleteUserCallback}`, {
  //     method: 'DELETE',
  //   })
  //   await response.json();
  //   const deleteUserFunction = users.filter((i) => i.id !== deleteUserCallback);
  //   setUsers(deleteUserFunction);
  // };

  //SEARCH BAR - Users
  const [searchUsers, setSearchUsers] = useState('');

  return (
    <div className='users-container'>
      <h3>Users</h3>

      {/* Search Bar  */}
      <input
        type="text"
        placeholder="Search Users..."
        onChange={(e) => { setSearchUsers(e.target.value) }}
      />
      {/* Search Filter,  Username List Mapped */}


      {viewUserWeather ? (
        <ul id="users">
          {users.filter((value) => {
            if (searchUsers === "") {
              return value
            } else if (value.username.toLowerCase().includes(searchUsers.toLowerCase())) {
              return value
            }
          }).map((user, index) => {
            return (
              <li key={index} onClick={handleView}>
                {user.username}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <h1 >Favorite Weather</h1>
          <ViewFavWeather />
          <button onClick={handleView}>Close</button>
        </div>
      )}

      {/* See Add Form Button */}
      {seeAddForm ? (
        <div>
        <AddUser addUser={handleAddUserP} /> 
        <button onClick={handleButton}>Back</button>
        </div>
      ) : (<button type="viewAdd" onClick={handleButton}>Add User</button>)
      }
    </div>
  );
}

export default User;