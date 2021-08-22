import React, {useState} from 'react';

import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);


    return (
        <>
            <div className="text-center"><h2>Gifgif</h2></div>
            <AddCategory setCategories={setCategories} />
            <hr />
           {/*  <button onClick={addCategory}>Agregar</button> */}
            <ol>
                {categories.map(category => <GifGrid key={category} category={category} />)}
            </ol> 
        </>
    )
}
