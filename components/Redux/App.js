import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/Users";

const App = () => {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <div className="addUser">
        <input
          type={"text"}
          placeholder="Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type={"text"}
          placeholder="Username..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>

            <input
              type="text"
              placeholder="change username"
              onChange={(e) => {
                setNewUsername(e.target.value);
              }}
            />
            <button
              onClick={() =>
                dispatch(updateUser({ id: user.id, username: newUsername }))
              }
            >
              update
            </button>
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
