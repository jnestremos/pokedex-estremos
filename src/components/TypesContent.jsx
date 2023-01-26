function TypesContent({ pokemon }) {
    return (
        <div className='pokemon-types'>
            {pokemon.types.map((type, index) => {                                     
               return (
                <div key={index} className='pokemon-type'>
                    <h3>{type?.type?.name?.charAt(0)?.toUpperCase() + type?.type?.name?.slice(1)}</h3> 
                </div>
               )
            })}
        </div>
    )
}

export default TypesContent