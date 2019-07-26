import React, {useState, memo} from 'react';
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ImagesContainer from "./components/ImagesContainer/ImagesContainer";


function App() {


    const [imagesFromSearch, getImagesFromSearch] = useState([]);


    return (
        <>
            <div className='search'><h1>Search by Google on React</h1></div>
            <SearchArea
                getImagesFromSearch={getImagesFromSearch}
                image={imagesFromSearch}/>
            {imagesFromSearch[0]
                ? <ImagesContainer
                    data={imagesFromSearch}
                    getImagesFromSearch={getImagesFromSearch}
                />
                : <h1>Your images will displayed there</h1>
            }

        </>
    );

}

export default memo(App);
