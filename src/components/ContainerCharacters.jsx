import React from 'react';

export const ContainerCharacters = ({ characters, formatImageUrl, nextPage, previousPage }) => {
    return (
        <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id} className="col">
                            <div className="card h-100 text-center p-3" style={{ backgroundColor: 'rgba(2, 3, 5, 0.0)', borderRadius: '10px' }}>
                                <h5 className="text-success m-3">{char.name}</h5> 
                                <img 
                                    src={formatImageUrl(char)} 
                                    style={{ width: '8rem' }} 
                                    className="rounded-5 rounded-top-0 border border-info m-3" 
                                    alt={char.name} 
                                /> 
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-between m-3">
                <button className="btn btn-success" onClick={previousPage}>Anterior</button>
                <button className="btn btn-success" onClick={nextPage}>Siguiente</button>
            </div>
        </div>
    );
}
