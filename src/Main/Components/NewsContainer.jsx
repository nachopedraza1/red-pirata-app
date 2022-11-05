import { useContext } from "react";
import { NewItem } from "../Components"
import { DataContext } from "../Context/DataProvider";

export const NewsContainer = () => {

    const { posts = [] } = useContext(DataContext);

    return (
        <>
            {
                posts.map(post => {
                    return <NewItem key={post.id} {...post} />
                })
            }
        </>
    )
}
