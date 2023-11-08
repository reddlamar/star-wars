import Character from './Character';
import Link from 'next/link';
import { getImgSrc } from '@/getImgSrc';

export default function Characters({ data }) {

    return (
        <div className='grid grid-cols-5 gap-12'>
            {
                data?.map((character, i) => {
                    const  source = getImgSrc(character.name);

                    return (
                        <Link href={`/details/${i + 1}`} className='hover:outline hover:outline-1 hover:outline-yellow-300'>
                            <Character key={character.name} character={character} source={source} imageSize={`w-[300px] h-[300px]`} />
                        </Link>
                    );
                })
            }
        </div>
    );
}