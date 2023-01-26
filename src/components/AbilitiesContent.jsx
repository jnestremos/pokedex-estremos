function AbilitiesContent({ pokemon }) {
    return (
        <div className='pokemon-abilities'>
            {pokemon.abilities.map((ability, index) => {
               return (
                <div key={index} className='pokemon-ability'>
                    <h3>{ability?.ability?.name?.charAt(0)?.toUpperCase() + ability?.ability?.name?.slice(1)}</h3> 
                </div>
               ) 
            })}
        </div>
    )
}

export default AbilitiesContent