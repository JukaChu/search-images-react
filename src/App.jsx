import React, {useState, memo} from 'react';
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ImagesContainer from "./components/ImagesContainer/ImagesContainer";


function App() {


    const [imagesFromSearch, getImagesFromSearch] = useState([]);


    return (
        <>
            <SearchArea
                getImagesFromSearch={getImagesFromSearch}
                image={imagesFromSearch}/>
            {imagesFromSearch[0]
                ? <ImagesContainer
                    data={imagesFromSearch}
                    // getImagesFromSearch={getImagesFromSearch}
                />
                : <h1>Try search ur image</h1>
            }

        </>
    );

}

export default memo(App);
