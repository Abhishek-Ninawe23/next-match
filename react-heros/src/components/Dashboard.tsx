import { useEffect, useRef, useState } from "react"
import type { Hero } from "../types/hero"
import { Link } from "react-router-dom"
import { useMessages } from "../context/MessageContext"

const Dashboard = () => {

    const { addMessage } = useMessages()

    const apiUrl = import.meta.env.VITE_API_URL;

    const [heros, setHeros] = useState<Hero[]>([])

    //to prevent Multiple Fetches
    const fetched = useRef(false)

    useEffect(() => {
        if (!fetched.current) {
            fetch(`${apiUrl}/heros?_limit=4`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setHeros(data);
                    addMessage("Top Heros Loaded")
                });
            fetched.current = true;
        }
    }, [addMessage])

    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-2xl ">Top Heros</h2>
            <div className="flex gap-3">
                {
                    heros.map(hero => (
                        <Link key={hero.id} to={`/heros/${hero.id}`} className="p-4 bg-slate-700 text-white rounded-lg cursor-pointer">{hero.name}</Link>
                    ))
                }
            </div>

        </div>
    )
}
export default Dashboard