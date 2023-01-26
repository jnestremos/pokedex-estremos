import './SearchBar.css'

function SearchBar({ onQuery, query, handleAddPokemon }) {
  return (
    <div className="search-bar">
        <input type="search" placeholder="Search here..." onChange={(e) => onQuery(e.target.value)} value={query} />        
        <button onClick={() => handleAddPokemon(window.prompt('Please add a new pokemon'))}>Add</button>
    </div>
  )
}

export default SearchBar