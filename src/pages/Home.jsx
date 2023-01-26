import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import { axiosClient } from "../axios"
import PokemonList from "../components/PokemonList"
import SearchBar from "../components/SearchBar"
import './Home.css'

function Home() {    
    
    const [pokemons, setPokemons] = useState([])    
    const [query, setQuery] = useState('')        

    const fetchPokemons = async () => {
        // https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
        const res = await axiosClient.get('/pokemon/')
        console.log(res.data.results)
        // setPokemons(res.data.results)
        localStorage.setItem('pokemons', JSON.stringify(res.data.results));
        setPokemons(JSON.parse(localStorage.getItem('pokemons')))
    }

    function handleAddPokemon(name){
        if(name){
            axiosClient.get(`/pokemon/${name.toLowerCase()}`)
            .then((res) => {
                // https://pokeapi.co/api/v2/pokemon/1/
                const pokemon = res.data
                const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`
                console.log(url)
                const newPokemon = {
                    name: pokemon.name,
                    url
                }
                const pokemonsCopy = pokemons
                setPokemons([...pokemonsCopy, newPokemon])
                localStorage.setItem('pokemons', JSON.stringify([...pokemonsCopy, newPokemon]))                
            })
            .catch(() => {
                window.alert('Added pokemon does not exist!')
            }) 
        }               
    }

    function handleRemovePokemon(name){        
        const pokemonsCopy = pokemons.filter((pokemon) => pokemon.name !== name)
        setPokemons(pokemonsCopy)
        localStorage.setItem('pokemons', JSON.stringify(pokemonsCopy))
    }

    function handleSetQuery(queryValue){
    //  query = queryValue
        setQuery(queryValue)
        console.log(queryValue)
        const re = new RegExp(`^${queryValue}`, 'mi')
        const pokemons = JSON.parse(localStorage.getItem('pokemons'))
        const filteredPokemons = pokemons.filter((pokemon) => re.test(pokemon.name))
        setPokemons(filteredPokemons)
    }

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('pokemons')) || JSON.parse(localStorage.getItem('pokemons')).length === 0){           
            fetchPokemons()
        }
        else{
           setPokemons(JSON.parse(localStorage.getItem('pokemons'))) 
        }                      
    }, [])


    return (
        <div className="home">
            <h1>Pokedex</h1>
            <h3>Your one stop Pokemon directory!</h3>
            <SearchBar onQuery={handleSetQuery} handleAddPokemon={handleAddPokemon} query={query}></SearchBar>
            <IconContext.Provider value={{ size: '1em' }}>
                <PokemonList pokemons={pokemons} handleRemovePokemon={handleRemovePokemon}></PokemonList>
            </IconContext.Provider>            
        </div>    
    )
}

export default Home