import {BsSearch} from "react-icons/bs"
import "./Searchbar.css"


// eslint-disable-next-line react/prop-types
const Searchbar = ({searchTerm,setSearchTerm,searchMovies}) => {

    const onIconClick=()=>{
        
        if(!searchTerm){
            return;
        }else{
            searchMovies(searchTerm)
            setSearchTerm("")
        }
    }
  return (
    <div className="header">
      <h1>FilmHouse</h1>

    <div className="search-field">
        <BsSearch size={25} className="search-icon"/>
        <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="search" placeholder="Search for your Favourite Movie..." />
        <button onClick={onIconClick}>Search</button>
    </div>
      
    </div>
  )
}

export default Searchbar;
