'use client';
import { useEffect, useState } from "react";
import Image from "../../components/Image";
import { useFetch } from "@/Hooks/useFetch";
import { getImgSrc } from "@/getImgSrc.js";

export default function Page({ params }) {    
    const data = useFetch(`https://swapi.dev/api/people/${params.id}/`);
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        setImgSrc(getImgSrc(data?.name));        
    }, [data]);
    
    return (
        <main className='flex justify-center'>
            <div>
                { imgSrc && <Image source={imgSrc} size={'w-[500px] h-[500px]'} alt={data?.name}/> }
                <div className='text-yellow-300'>
                    Character Name: {data?.name}
                    <br />
                    Height: {data?.height}
                    <br />
                    Birth Year: {data?.birth_year || 0}                
                </div>
            </div>
        </main>
    );
}