'use client';
import Image from './Image';

export default function Character({ character, source, imageSize }) {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <Image source={source} size={imageSize} alt={character.name} />            
            <span className='text-2xl text-yellow-300'>{character.name}</span>
        </div>
    );
}