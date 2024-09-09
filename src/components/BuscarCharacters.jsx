import { useState } from "react";

export const BuscarCharacters = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = () => {
        onSearch(searchTerm)
    }

    return (
        
        <div className="container-fluid, navbar bg-body-tertiary">
            <input
                type="text"
                placeholder="Buscar personaje"
                className="form-control"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className="btn btn-success mt-2" onClick={handleSearch}>Buscar </button>
        </div>
    );
}
