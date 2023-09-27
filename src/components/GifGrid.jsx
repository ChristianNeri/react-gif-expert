import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // const [counter, setCounter] = useState(10);




    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
                // ? ( <h2>Cargando...</h2> )
                // : null
            }
            

            <div className="card-grid">
                {/* images.map */}
                {
                    images.map( (image)  => (
                        <GifItem 
                        key={ image.id }
                        { ...image }
                        // title = { image.title }
                        // url = { image.url }
                        />
                    ))
                }
            </div>
            {/* <h5>{ counter }</h5>
            <button  onClick={ () => setCounter( counter + 1 ) }>+1</button> */}
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}