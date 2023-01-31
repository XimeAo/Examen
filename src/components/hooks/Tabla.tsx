import React from 'react'
import { ICountries } from '../interfaces/IReqRestApiCountries';


export const Tabla = (pais: ICountries) => {
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Año</th>
      <th scope="col">Color</th>
      <th scope="col">pantone_value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{pais.name}</th>
      <td>{pais.year}</td>
      <td>{pais.color}</td>
      <td>{pais.pantone_value}</td>
    </tr>
  </tbody>
</table>
    
    </>
  )
}