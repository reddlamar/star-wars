'use client';
import { useEffect, useState } from 'react';
import Characters from './components/Characters.js';
import SearchBar from './components/SearchBar.js';
import { useFetch } from '../Hooks/useFetch.js';

export default function Home() {
  const data = useFetch('https://swapi.dev/api/people/');
  const [chars, setChars] = useState([]);
  const [filteredChars, setFilteredChars] = useState([]);

  function handleSearch(query) {
    const filteredData = chars?.filter(char => char.name.toLowerCase().includes(query)); 
    setFilteredChars(filteredData);   
  }

  useEffect(() => {
    setChars(data?.results);
    setFilteredChars(data?.results);setFilteredChars(data?.results);
  }, [data]);

  return (
    <main className='flex flex-col gap-y-1 min-h-screen p-24'>
      <div className='flex justify-between'>
        <h1 className='text-yellow-300 text-6xl'>Star Wars Info App</h1>
        <SearchBar onChange={handleSearch} />
      </div>
      <div>
        {filteredChars?.length > 0 && <Characters data={filteredChars} />}
      </div>      
    </main>
  );
}
