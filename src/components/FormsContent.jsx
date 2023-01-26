function FormsContent({ pokemon }) {
    return (
        <div className='pokemon-forms'>
            <img src={pokemon?.sprites?.back_default} alt="" width='100%' />
            <img src={pokemon?.sprites?.front_default} alt="" width='100%' />                    
        </div>
    )   
}

export default FormsContent