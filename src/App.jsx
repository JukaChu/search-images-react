import React, {useState, memo} from 'react';
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ImagesContainer from "./components/ImagesContainer/ImagesContainer";


function App() {

    const [columnNumber, setColumnNumber] = useState(3);
    const [imagesFromSearch, getImagesFromSearch] = useState([]);
    const [justifyCenter, setJustifyCenter] = useState('images-container__image');


    return (
        <>
            <div className='search'><h1>Search by Google on React</h1></div>
            <SearchArea
                getImagesFromSearch={getImagesFromSearch}
                image={imagesFromSearch}
                columnNumber={columnNumber}
                setColumnNumber={setColumnNumber}
                setJustifyCenter={setJustifyCenter}
            />
            {imagesFromSearch[0]
                ? <ImagesContainer
                    data={imagesFromSearch}
                    getImagesFromSearch={getImagesFromSearch}
                    columnNumber={columnNumber}
                    justifyCenter={justifyCenter}
                />
                : <h1>Your images will displayed there</h1>
            }

        </>
    );

}

export default memo(App);
