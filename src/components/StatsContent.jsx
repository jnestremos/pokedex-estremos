function StatsContent({ pokemon }) {
    return(
        <div className='pokemon-stats'>
            <div>
                <h4>HP:</h4>                        
                <p>&nbsp;{pokemon?.stats?.at(0)?.base_stat}</p>
            </div>
            <div>
                <h4>Attack:</h4>
                <p>&nbsp;{pokemon?.stats?.at(1)?.base_stat}</p>
            </div>
            <div>
                <h4>Defense:</h4>
                <p>&nbsp;{pokemon?.stats?.at(2)?.base_stat}</p>
            </div>
            <div>
                <h4>SP-Attack:</h4>
                <p>&nbsp;{pokemon?.stats?.at(3)?.base_stat}</p>
            </div>
            <div>
                <h4>SP-Defense:</h4>
                <p>&nbsp;{pokemon?.stats?.at(4)?.base_stat}</p>
            </div>
            <div>
                <h4>Speed:</h4>
                <p>&nbsp;{pokemon?.stats?.at(5)?.base_stat}</p>
            </div>
        </div>
    )
}

export default StatsContent