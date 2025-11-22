import "./UserList.css";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    setIsLoading(true);
    const response = await fetch(apiUrl);
    const json = await response.json();
    // console.log("json", json);
    setIsLoading(false);
    if (json) {
      setUsers(json);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("users=", users[0]);
  return (
    <>
      {isLoading ? <h1>Loading Users, please wait...</h1> : <h1>Users</h1>}

      {users.length > 0 ? (
        <div className="user-list">
          {/* users list goes here */}
          {users.map((user) => {
            return (
              <div key={user.id} className="user-card">
                <div>👤{user.name}</div>
                <div>📱{user.phone}</div>
                <div>
                  📍{user.address.street}, {user.address.city} -{" "}
                  {user.address.zipcode}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No users found</h1>
      )}
      {/* {users.length > 0 ? <div></div> : <h2>No users found<h2/>}     */}
    </>
  );
}

export default UserList;
