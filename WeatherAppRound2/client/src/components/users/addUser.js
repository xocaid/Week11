import { useState } from 'react';

const AddUser = (props) => {
  const [userForm, setUserForm] = useState({
    // id:"",
    username: "",
    first_name: "",
    last_name: "",
    email:""
  });

  //create functions that handle the event of the user typing into the form
  // const handleId = (event) => {
  //   const userId = event.target.value;
  //   setUserForm((users) => ({ ...users, id: userId }));
  // };
  const handleUsername = (event) => {
    const userUserName = event.target.value;
    setUserForm((users) => ({ ...users, username: userUserName }));
    console.log(userUserName);
  };
  const handleFirstName = (event) => {
    const userFirstName = event.target.value;
    setUserForm((users) => ({ ...users, first_name: userFirstName }));
    console.log(userFirstName);
  };
  const handleLastName = (event) => {
    const userLastName = event.target.value;
    setUserForm((users) => ({ ...users, last_name: userLastName }));
    console.log(userLastName);
  };
  const handleEmail = (event) => {
    const userEmail = event.target.value;
    setUserForm((users) => ({ ...users, email: userEmail }));
    console.log(userEmail);
  };

  //A function to handle the post request
  const postUser = (newUser) => {
    return fetch("http://localhost:5003/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addUser(data);
      });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    postUser(userForm);
    setUserForm({
      username: "",
      first_name: "",
      last_name: "",
      email:""
    })
  };

  return (
    <form onSubmit={handleAddUser} className="addform-container" >
      <fieldset>

        <label>Username: </label>
        <input
          type="text"
          id="add-username"
          placeholder="username"
          required
          value={userForm.username.toLowerCase()}
          onChange={handleUsername}
        />
        <br />

        <label>First Name: </label>
        <input
          type="text"
          id="add-first-name"
          placeholder="John"
          required
          value={userForm.first_name}
          onChange={handleFirstName.toLowerCase()}
        />
        <br />

        <label>Last Name: </label>
        <input
          type="text"
          id="add-last-name"
          placeholder="Smith"
          value={userForm.last_name}
          onChange={handleLastName.toLowerCase()}
        />
        <br />

        <label>Email: </label>
        <input
          type="text"
          id="add-email"
          placeholder="jsmith@gmail.com"
          required
          value={userForm.email}
          onChange={handleEmail}
        />

      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;