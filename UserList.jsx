import { useState, useEffect } from 'react'
import React from 'react'



const UserList = () => {
    // Removed unused uuid variable to fix the error
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }
   

  return (
      <div>
          <h1>User List</h1>
          <ul className='uuid'>
              {users.map((user) => (
                  <li key={user.id}>
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                  </li>
              ))}
          </ul>
         
          
      
      </div>
  )
}

export default UserList