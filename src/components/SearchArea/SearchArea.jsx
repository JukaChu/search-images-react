import React, {memo, useState} from 'react';


function SearchArea(props) {
    // const [inputSearchValue, getInputSearchValue] = useState('');
    const {getImagesFromSearch, image} = props;
    let input;
    function getImageFromPixabay(value) {
        const searchInputValue = value;
        const imagess = [];
        let API_KEY = '13135008-ae7bbae4ed67dbd6241ad558b';
        let URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchInputValue)}`;
        fetch(URL)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log('hits', data.hits);
                return data.hits;
            })
            .then((imagesArray) => {
                console.log(imagesArray[0].largeImageURL);
                imagesArray.map((imag) => {
                    imagess.push(imag.largeImageURL);
                });
                return imagess
            })
            .then(() => {
                getImagesFromSearch(imagess);
                console.log('SHO ZA', image);
            });

    }

    function onInputSubmit(value) {
        console.log('input nash', value);
        getImageFromPixabay(value);



    }


    console.log();
    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                onInputSubmit(input.value)
            }}>
                <input type="text"
                       ref={node => input = node}
                       className='search-area'
                    // onInput={inputHandler}
                />
                <button type='submit'>Search</button>
            </form>
            <ul className='list'>
                {/*{store.map(()=>{})}*/}
            </ul>
        </div>
    )


}

export default SearchArea;


