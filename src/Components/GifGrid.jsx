import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { imgs, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {
                loading && <p className="animate__animated animate__flash animate__infinite infinite">loading...</p>
            }
            <div className="card-grid">
                {
                    imgs.map( img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
                
            </div>
        </>
    )
}
