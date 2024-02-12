import { MdSearch } from 'react-icons/md';


const Search = ({ setSearchText }) => {
  return (
    <div className="search">
        <MdSearch className="search-icons" size='1.3em' />
        <input 
            onChange={ (e) => setSearchText(e.target.value) } 
            type="text" 
            placeholder="Type to search"
        />
    </div>
  )
}

export default Search;