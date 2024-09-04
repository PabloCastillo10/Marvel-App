import { useCharacters } from "../hooks/useCharacters"
import { BuscarCharacters } from "./BuscarCharacters"
import { ContenedorCharacters } from "./ContenedorCharacters";

export const MarvelApp = () => {

    const {characters, formatImageUrl, } = useCharacters()


  return (
    <>
    <BuscarCharacters BuscarCharacters={BuscarCharacters} />
            <ContenedorCharacters 
                characters={characters} 
                formtaImageuRL={formtaImageuRL} 
                nextPage={nextPage} 
                previousPage={previousPage} 
            />
      
    </>
  )
}
