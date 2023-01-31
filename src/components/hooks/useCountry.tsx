import React, { useEffect, useState, useRef } from 'react'
import { ReqRestApi } from '../api/ReqRestApi';
import { IReqRestApiCountries, ICountries } from '../interfaces/IReqRestApiCountries';

function useCountry(){
    const DEFAULT_PAGE=1;
    const [countries, setCountries]=useState<ICountries[]>([]);
    const currentPage=useRef(DEFAULT_PAGE);

    const getData = async()=>{
        const response = await ReqRestApi.get<IReqRestApiCountries>(
            '/country', {params:{page: currentPage.current }}).then(
                ({data}) => data
            ).catch(console.log);

        response ? setCountries(response.data) : setCountries([]);
    }

    useEffect(()=>{getData(); }, []);

    const next=()=>{
        currentPage.current++;
        getData();
    }

    const before=()=>{
        currentPage.current--;
        getData();
    }
    
    const inicio = () => {
        currentPage.current = (1);
        getData();
    }

    const fin = () => {
        currentPage.current = (42);
        getData();
    }

    return {countries, next, before, inicio, fin, currentPage};

}
export {useCountry}