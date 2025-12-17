import type { FormEvent } from "react";
import { useMessages } from "../context/MessageContext";
import type { Hero } from "../types/hero";
import { useNavigate } from "react-router-dom";

type Props = {
    hero?: Hero;
    setHero?: (hero: Hero) => void;
}


const HeroForm = ({ hero, setHero }: Props) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const { addMessage } = useMessages();
    const navigate = useNavigate();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        const url = hero ? `${apiUrl}/heros/${hero.id}` : `${apiUrl}/heros`;

        const method = hero ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                body: JSON.stringify({ name: formData.get('name') })
            });

            if (!response.ok) throw new Error('Request failed: ' + response.statusText);

            const data = await response.json();

            const message = hero ? `Hero ${hero.name} updated to ${data.name}` : `Hero ${data.name} created`

            addMessage(message);


            if (hero && setHero) {
                setHero(data);
            } else {
                navigate(`/heros/${data.id}`);
            }

        } catch (error) {
            console.log(error);
            addMessage('Failed to update hero')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label >Hero Name</label>
                <div className="flex flex-row gap-3">
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        className='border border-gray-300 rounded-2xl p-2 w-1/4'
                        defaultValue={hero?.name || ''}
                    />
                    <button type="submit" className="btn" >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
export default HeroForm