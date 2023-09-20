import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Demon Slayer']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // console.log( newCategory )
        setCategories([ newCategory, ...categories ])
        // setCategories( cat=> [ ...categories, 'Valorant' ])
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                    // <div key={ category }>
                    //     <h3>{ category }</h3>
                    //     <li>{ category }</li>
                    // </div>
                ))
                
            }
        </>
    )
}