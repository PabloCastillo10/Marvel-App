import { useCharacters } from "../hooks/useCharacters"
import { ContainerCharacters } from "./ContainerCharacters"
import { BuscarCharacters } from "./BuscarCharacters" 

export const MarvelApp = () => {
    const { characters, formatImageUrl, fetchNextPage, fetchPreviousPage, searchCharacters } = useCharacters()

    return (
        <>
            <div className="container mt-4">
                <BuscarCharacters onSearch={searchCharacters} />
                <ContainerCharacters 
                    characters={characters} 
                    formatImageUrl={formatImageUrl} 
                    nextPage={fetchNextPage} 
                    previousPage={fetchPreviousPage}
                />
            </div>
        </>
    )
}
