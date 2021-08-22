import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log(id, url, title);
    return (
        <div className="card shadow-lg animate__animated animate__fadeIn">
            <img src={ url } alt={title} />
            <p> { title } </p>
        </div>
    )
}
