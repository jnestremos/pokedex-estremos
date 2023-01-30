import './PokemonList.css'
import { Link } from "react-router-dom"
import { AiOutlineClose } from 'react-icons/ai'
function PokemonList({ pokemons, handleRemovePokemon }) {    
  return (
    <ul className='pokemon-list'>
        {pokemons.map((pokemon, index) => {
          const id = pokemon.url.split('/').at(-2)
          // console.log(id)
          const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            return(
              <li key={index}>
                <div className='close-button' onClick={() => handleRemovePokemon(pokemon.name)}>
                  <AiOutlineClose></AiOutlineClose>
                </div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={`${pokemon.name}`} width='100%'/>
                <Link to={`/pokemon/${pokemon.name}`}>
                  <p>{name}</p>
                </Link>                       
              </li>        
            )
        })}
    </ul>
  )
}

export default PokemonList