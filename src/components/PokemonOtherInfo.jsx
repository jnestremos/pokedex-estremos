import { useState } from 'react'
import './PokemonOtherInfo.css'
import FormsContent from './FormsContent'
import StatsContent from './StatsContent'
import TypesContent from './TypesContent'
import AbilitiesContent from './AbilitiesContent'
import EvolutionContent from './EvolutionContent'



function PokemonOtherInfo({ pokemon, evolutionChain, setName }) {        
    const [tabActive, setTabActive] = useState('forms')
    const tabs = [
        'forms',
        'stats',
        'types',
        'abilities',
        'evolution'
    ]                

    function RenderContent(){
        if(tabActive === 'forms'){
            return <FormsContent pokemon={pokemon}></FormsContent>     
        }
        else if(tabActive === 'stats'){
            return <StatsContent pokemon={pokemon}></StatsContent>
        }
        else if(tabActive === 'types'){
            return <TypesContent pokemon={pokemon}></TypesContent>
        }
        else if(tabActive === 'abilities'){
            return <AbilitiesContent pokemon={pokemon}></AbilitiesContent>
        }
        else if(tabActive === 'evolution'){                       
            return <EvolutionContent evolutionChain={evolutionChain} setName={setName}></EvolutionContent>
        }
     }

    return (
        <div className="other-info">
            <ul> 
                {tabs.map((tab, index) => {                    
                    const name = tab.charAt(0).toUpperCase() + tab.slice(1)
                    return <li className={(tab === tabActive && 'active').toString()} key={index} onClick={() => setTabActive(tab)}>{name}</li>
                })}                               
            </ul>
            <RenderContent></RenderContent>
        </div>
    )
}


export default PokemonOtherInfo