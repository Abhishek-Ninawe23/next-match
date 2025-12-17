import { useState, useRef, useEffect } from "react"
import type { Hero } from "../types/hero"
import { Link } from "react-router-dom"
import { useMessages } from "../context/MessageContext";

const HerosList = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { addMessage } = useMessages()
    const [heros, setHeros] = useState<Hero[]>([])

    //to prevent Multiple Fetches
    const fetched = useRef(false)

    useEffect(() => {
        if (!fetched.current) {
            fetch(`${apiUrl}/heros`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setHeros(data);
                    addMessage('Heros Loaded')
                });
            fetched.current = true;
        }
    }, [addMessage, apiUrl])


    return (
        < >

            <div className="flex gap-3">
                <h2 className='text-2xl'>My Heros</h2>
                <Link to='/heros/create' className="btn">Create new</Link>
            </div>

            <ul className='flex flex-col gap-2 my-3'>
                {
                    heros.map(hero => (
                        <Link to={`/heros/${hero.id}`} key={hero.id} className='flex cursor-pointer' >
                            <span className='bg-slate-600 text-white rounded-l p-2'>{hero.id}</span>
                            <span className='p-2 bg-slate-300 rounded-r w-full'>{hero.name}</span>
                        </Link>))
                }
            </ul>
        </>
    )
}

export default HerosList