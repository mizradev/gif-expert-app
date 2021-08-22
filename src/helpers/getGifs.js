export const getGifs = async ( category ) => {
    // const res = await fetch(`${BASE_URL}/gifs/search?q=Rick and morty&api_key=${API_KEY}&limit=10`)
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=JhEF1vYAPk05pkraSnNa2F2l6GIAmuIc&limit=10`)
    const { data } = await res.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}