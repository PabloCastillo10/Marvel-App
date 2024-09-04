import { useState, useEffect } from "react";
import { reqCharacters } from "";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        reqCharacters(name, offset).then((data) => {
            setCharacters(data.results);
        });
    }, [name, offset]);

    const searchCharacter = (name) => {
        setName(name);
        setOffset(0); 
    }

    const nextPage = () => {
        setOffset((prevOffset) => prevOffset + 20); 
    }

    const previousPage = () => {
        setOffset((prevOffset) => Math.max(prevOffset - 20, 0)); 
    }

    const formtaImageuRL = (char) => {
        const imagePath = char.thumbnail;
        const url_image = `${imagePath.path}.${imagePath.extension}`;
        return url_image;
    }

    return {
        characters,
        formtaImageuRL,
        searchCharacter,
        nextPage,
        previousPage
    };
}