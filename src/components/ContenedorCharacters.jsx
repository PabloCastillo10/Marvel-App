import React from "react";


export const ContenedorCharacters = ({ characters, formtaImageuRL, nextPage, previousPage }) => {
    return (
        <div style={{
            backgroundImage: 'url("https://i.ibb.co/2gqPmL3/marvelstudios-7611c.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div className="d-flex flex-row row row-cols-5">
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id} style={{ margin: '10px', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                            <h5 className="text-warning m-3">{char.name}</h5>
                            <img src={formtaImageuRL(char)} style={{ width: '8rem' }} className="rounded-5 rounded-top-0 border border-warning m-3" alt={char.name}/>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-between m-3">
                <button className="btn btn-warning" onClick={previousPage}>Anterior</button>
                <button className="btn btn-warning" onClick={nextPage}>Siguiente</button>
            </div>
        </div>
    );
}