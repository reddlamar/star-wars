import { useState } from 'react';

export default function SearchBar({ onChange }) {
    const [query, setQuery] = useState('');

    return (
        <div className='flex gap-x-2 h-8 self-end'>
            <input type='text' placeholder='Search...' className='px-2' value={query} onChange={e => {
                    setQuery(e.target.value);
                    onChange(e.target.value);
                }} 
            />
            {/* <button className='px-8 text-yellow-300 rounded bg-black outline outline-1 outline-yellow-300' onClick={() => onClick(query)}>Search</button> */}
        </div>
    );
}