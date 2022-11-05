import { createContext } from "react"
import { useState } from "react";
import { useEffect } from "react"

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [posts, setPosts] = useState();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f42c02a377msh6fb9b84dab60020p10e1d6jsn5f66a6651e29',
            'X-RapidAPI-Host': 'instagram-scraper2.p.rapidapi.com'
        }
    };

    const GetDataInstagram = async () => {

        await fetch('https://instagram-scraper2.p.rapidapi.com/medias?user_id=1998503151&batch_size=30', options)
            .then(response => response.json())
            .then(response => {
                const { edges } = response.data.user.edge_owner_to_timeline_media;
                const postsUser = edges.map(post => {
                    const { id, display_url, edge_media_to_caption, edge_media_preview_like: { count }, } = post.node;
                    const { text } = edge_media_to_caption.edges[0].node;
                    return {
                        id,
                        img: display_url,
                        tittle: text,
                        likes: count,
                        isLoading: false,
                    }
                });
                setPosts(postsUser);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        GetDataInstagram();
    }, [])

    console.log(posts);

    return (
        <DataContext.Provider value={{ posts }} >
            {props.children}
        </DataContext.Provider>
    )
}
