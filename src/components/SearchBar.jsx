import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import debounce from '../utils/debounce';

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState('');

  const debouncedSearch = useMemo(() => debounce(onSearch, 300), [onSearch]);

  const handleInput = (e) => {
    const val = e.target.value;
    setText(val);
    debouncedSearch(val);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search users by name..."
        value={text}
        onChange={handleInput}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );
};

export default SearchBar;
