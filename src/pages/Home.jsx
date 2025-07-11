import React, { useState, useEffect } from 'react';
import PageContent from '../components/PageContent';
import { SearchBar } from '../components/searchbar';
import UserTable from '../components/UserTable';
import AddUserForm from './AddUserForm';
import './css/Home.css';

export default function Home({ sidebarState }) {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [addingUser, setAddingUser] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setAllUsers(json);
        setFilteredUsers(json);
      });
  }, []);

  const addUser = (user) => {
    // A more robust way to generate a unique ID
    const newId = allUsers.length > 0 ? Math.max(...allUsers.map(u => u.id)) + 1 : 1;
    const newUser = { ...user, id: newId, address: { zipcode: user.address.zipcode }, phone: user.phone };
    const updatedUsers = [...allUsers, newUser];
    setAllUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredUsers(allUsers);
      return;
    }
    const results = allUsers.filter((user) => {
      return (
        user &&
        user.name &&
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredUsers(results);
  };

  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Fixed Header */}
      <div className="sticky top-0 z-30 bg-white">
        <PageContent title="Home" />
      </div>
      <div className='App'>
        <div className='Search-Bar-Container'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
          <button onClick={() => setAddingUser(true)} className="bg-green-500 text-white pt-2 px-4 py-2 rounded text-sm sm:text-base" style={{ marginTop: '10px' }}>Add User</button>
          <UserTable users={filteredUsers} />
          {addingUser && <AddUserForm addUser={addUser} setAddingUser={setAddingUser} sidebarState={sidebarState} />}
        </div>
      </div>
    </div>
  );
}
