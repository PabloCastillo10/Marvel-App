import { useEffect, useState } from "react"
import { reqCharacteres } from "../services/characters"

export const useCharacters = () => {
    const [characters, setCharacters] = useState([])
    const [offset, setOffset] = useState(0)
    const [limit] = useState(20)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        reqCharacteres(offset, limit, searchTerm).then(data => {
            setCharacters(data.results)
        })
    }, [offset, limit, searchTerm])

    const fetchNextPage = () => {
        setOffset(prevOffset => prevOffset + limit)
    }

    const fetchPreviousPage = () => {
        if (offset > 0) {
            setOffset(prevOffset => prevOffset - limit)
        }
    }

    const searchCharacters = (term) => {
        setSearchTerm(term)
        setOffset(0)  
    }

    const formatImageUrl = (char) => {
        const imagePath = char.thumbnail
        return `${imagePath.path}.${imagePath.extension}`
    }

    return {
        characters,
        formatImageUrl,
        fetchNextPage,
        fetchPreviousPage,
        searchCharacters
    }
}
