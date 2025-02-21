import search from "../assets/magnifyingGlass.svg"

const SearchIcon = () => {
    return(
        <button className="absolute left-5 top-4">
            <img src={search} alt="search icon" />
        </button>
    )
}

export default SearchIcon