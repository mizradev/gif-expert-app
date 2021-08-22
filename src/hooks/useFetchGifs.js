import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        imgs: [],
        loading: true
    });

    useEffect(() => {
        getGifs( category )
            .then( imgs => {
                
                setState({
                    imgs,
                    loading: false
                })
                
            })
    }, [ category ]);


    return state;
}