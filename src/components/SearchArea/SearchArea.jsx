import React from 'react';
import {ColumnNumber} from "../ColumnNumber/ColumnNumber";


function SearchArea(props) {
    const {getImagesFromSearch, setColumnNumber, columnNumber, setJustifyCenter} = props;
    let input;

    function getImageFromGoogle(value) {

        const imagesFromGoogle = [];
        let cse = '004733479139527503443:ortosxeoty0';
        let api = 'AIzaSyDqXaAWnnN4ram4ADDMbh-BmeRv_MH5dR0';
        let URL = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${cse}&q=${encodeURIComponent(value)}&searchType=image`;
        fetch(URL)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log('hits', data);
                return data.items;
            })
            .then((items) => {
                items.map((item) => {
                    let photo = item.link;
                    imagesFromGoogle.push(photo);
                    return imagesFromGoogle;
                })
            })
            .then(() => {
                getImagesFromSearch(imagesFromGoogle);
            })


    }

    function onInputSubmit(value) {
        console.log('input nash', value);
        getImageFromGoogle(value);


    }


    console.log();
    return (
        <div>
            <ColumnNumber columnNumber={columnNumber}
                          setColumnNumber={setColumnNumber}
                          setJustifyCenter={setJustifyCenter}/>
            <form className='search-area__form' onSubmit={event => {
                event.preventDefault();
                onInputSubmit(input.value)
            }}>
                <input type="text"
                       ref={node => input = node}
                       className='search-area'

                />
                <button type='submit'>Search</button>
            </form>

        </div>
    )


}

export default SearchArea;


