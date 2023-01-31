import React from 'react'
import { Tabla } from './Tabla';
import { useCountry } from './useCountry';


export const Paises = () => {
    const { countries, next, before, inicio, fin, currentPage} = useCountry();
    
  return (
    <>
    <h1>Países</h1>
    
    {
        countries.map(country => <div>
            <Tabla key={country.id} {...country}/></div>
        )
    }
    
    
    <div>
          {currentPage.current === 1 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>
              <button className='btn btn-info m-2' onClick={() => next()}>Siguiente</button>
              <button className='btn btn-danger' onClick={() => fin()}>Fin</button>
            </div>
          ) : currentPage.current >= 2 && currentPage.current <= 41 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>
              <button className='btn btn-warning m-2' onClick={() => before()}>Anterior</button>
              <button className='btn btn-info' onClick={() => next()}>Siguiente</button>
              <button className='btn btn-danger m-2' onClick={() => fin()}>Fin</button>
            </div>
          ) : currentPage.current === 42 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>
              <button className='btn btn-warning m-2' onClick={() => before()}>Anterior</button>
              <button className='btn btn-danger' onClick={() => fin()}>Fin</button>
            </div>
          ) : null}
        </div>
    </>
  );
}