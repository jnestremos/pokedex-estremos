import { Link } from "react-router-dom";

function EvolutionContent({ evolutionChain, setName }) {
    let evolutionChains = [];
    let container = [];
    evolutionChains.push([evolutionChain?.chain], evolutionChain?.chain.evolves_to)                           
    evolutionChains[1]?.forEach((chain) => {                                
        chain?.evolves_to?.forEach((c) => {                    
            container.push(c)
        })
    })
    evolutionChains.push(container)                                  
    return(
        <div className='pokemon-evolutions'>                    
            <h3 style={{textAlign: 'center'}}>1st Stage</h3>
            <div className='pokemon-evolution'>
                <Link to={`/pokemon/${evolutionChains[0][0]?.species?.name}`} onClick={() => setName(evolutionChains[0][0]?.species?.name)} style={{ flex:'100%' }}>
                    <h3>{evolutionChains[0][0]?.species?.name?.charAt(0)?.toUpperCase() + evolutionChains[0][0]?.species?.name?.slice(1)}</h3>                                             
                </Link>                                                                      
            </div>                                                                                 
            {evolutionChains.map((evolution, index) => {
                let renderPokemon;
                if(index !== 0){
                    renderPokemon = evolution.map((pokemon, i) => {                                                                                                                                                         
                        return (
                            <Link key={i} to={`/pokemon/${pokemon?.species?.name}`} onClick={() => setName(pokemon?.species?.name)} style={{ flex:`${(1 / evolution.length) * 100}` }}>
                                <h3>{pokemon?.species?.name?.charAt(0)?.toUpperCase() + pokemon?.species?.name?.slice(1)}</h3>  
                            </Link>                                
                        )
                    })
                    if(renderPokemon.length > 0){
                        return (
                            <div key={index}>
                                <h3 key={index} style={{textAlign: 'center'}}>{index === 1 ? '2nd' : '3rd'} Stage</h3>                                        
                                <div className='pokemon-evolution'>                                        
                                    {renderPokemon}                                                                                                                                                                                     
                                </div>
                            </div>                                    
                        )  
                    }
                    else{
                        return null
                    }                         
                } 
                return null                                            
            })}                                
        </div>
    )
}

export default EvolutionContent