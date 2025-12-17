import { useEffect, useRef, useState } from "react";
import type { Hero } from "../types/hero"
import { useParams } from "react-router-dom";
import { useMessages } from "../context/MessageContext";
import HeroForm from "./HeroForm";

const apiUrl = import.meta.env.VITE_API_URL;

const HeroDetail = () => {

    const [hero, setHero] = useState<Hero | null>(null);
    const params = useParams()
    const { addMessage } = useMessages()


    //to prevent Multiple Fetches
    const fetched = useRef(false)

    useEffect(() => {
        if (!fetched.current) {
            fetch(`${apiUrl}/heros/${params.id}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setHero(data);
                    addMessage(`Hero ${data.name} Loaded`)
                });
            fetched.current = true;
        }
    }, [params.id, addMessage])

    if (!hero) return null;



    return (
        <>
            <h2 className='text-2xl' >Details</h2>
            <div>
                <span className='font-bold' >ID:</span>
                <span> {hero.id}</span>
            </div>
            <div className='space-x-2'>
                <span className='font-bold'>Name:</span>
                <span className='uppercase'> {hero.name}</span>
            </div>
            <div className='flex flex-col mt-2 pt-2 items-center gap-2 border-t'>
                <HeroForm hero={hero} setHero={setHero} />
            </div>
        </>
    )
}

export default HeroDetail