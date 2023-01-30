import './PokemonDetails.css'
import PokemonOtherInfo from './PokemonOtherInfo'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

function PokemonDetails({ pokemon, evolutionChain, setName }) {    
    // console.log(pokemon)   
    // console.log(evolutionChain)   
    const name = (pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)).toString()
    const imageSrc = pokemon?.sprites?.other['official-artwork']?.front_default    
    return (
        <div className="pokemon-details">
            <header> 
                <div className='arrow-left'>
                    <Link to={'/'}>
                        <AiOutlineArrowLeft></AiOutlineArrowLeft>          
                    </Link>                    
                </div>                  
                <h3>{name}</h3>                
            </header>
            <div className='details-main-image'>
                <img src={imageSrc} alt="" width="100%"/>
            </div> 
            <div className='details-main-info'>
                <div>
                    <h4>ID:</h4>                        
                    <p>&nbsp;{pokemon?.id}</p>
                </div>
                <div>
                    <h4>Base XP:</h4>                        
                    <p>&nbsp;{pokemon?.base_experience}</p>
                </div>
                <div>
                    <h4>Height:</h4>                        
                    <p>&nbsp;{pokemon?.height}</p>
                </div>
                <div>
                    <h4>Weight:</h4>                        
                    <p>&nbsp;{pokemon?.weight}</p>
                </div>
            </div>       
            <PokemonOtherInfo pokemon={pokemon} evolutionChain={evolutionChain} setName={setName}></PokemonOtherInfo>            
        </div>
    )
}

export default PokemonDetails