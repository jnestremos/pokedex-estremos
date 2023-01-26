import PokemonDetails from "../components/PokemonDetails"
import { useEffect, useState } from "react"
import { axiosClient } from "../axios"
import './Details.css'
import { IconContext } from 'react-icons'


function Details() {
    const [pokemon, setPokemon] = useState({})
    const [evolutionChain, setEvolutionChain] = useState({})
    const [name, setName] = useState('')
    
    useEffect(() => {
        const name = window.location.pathname.split('/').at(-1)
        setName(name)
        fetchPokemonDetails(name)
        fetchPokemonEvolution(name)
    }, [name])

    const fetchPokemonDetails = async (name) => {
        const res = await axiosClient.get(`/pokemon/${name}`)        
        setPokemon(res.data)
    }

    const fetchPokemonEvolution = async (name) => {
        let res = await axiosClient.get(`/pokemon-species/${name}`)
        let evolutionURL = res.data.evolution_chain.url;                
        evolutionURL = `${evolutionURL.split('/').at(-3)}/${evolutionURL.split('/').at(-2)}`        
        res = await axiosClient.get(`/${evolutionURL}`)
        setEvolutionChain(res.data)
    }


    return (
        <IconContext.Provider value={{ size: '1em' }}>
            <div className="details">
                <PokemonDetails pokemon={pokemon} evolutionChain={evolutionChain} setName={setName}></PokemonDetails>
            </div>
        </IconContext.Provider>               
    )
}

export default Details