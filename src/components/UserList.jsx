import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Trie from './Trie';
import { fetchUsers } from '../utils/fetchUsers';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [trie, setTrie] = useState(new Trie());

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setFiltered(data);
      const t = new Trie();
      data.forEach(user => t.insert(user.name.trim().toLowerCase())); // Normalize here
      setTrie(t);
    });
  }, []);

  const handleSearch = (text) => {
    const prefix = text.trim().toLowerCase();
    if (!prefix) {
      setFiltered(users);
      return;
    }
    const names = trie.getWordsWithPrefix(prefix);
    setFiltered(
      users.filter(u => names.includes(u.name.trim().toLowerCase()))
    );
  };
  

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">User Directory</h2>
      <SearchBar onSearch={handleSearch} />

      <div className="grid gap-6 max-w-6xl mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(user => (
          <div key={user.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">{user.name}</h3>
            <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
            <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-700"><strong>Company:</strong> {user.company.name}</p>
            <p className="text-gray-700">
              <strong>Website:</strong>{" "}
              <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                {user.website}
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserList;
