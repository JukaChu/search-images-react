import React from 'react';
import './ImagesContainer.css';

function ImagesContainer(props) {
    const {data} = props;

    return (
        <div className='images-container__image'>
            {data.map((oneImage) => {
                return (
                    <div className='image__container'>
                        <img src={oneImage} className='image__picture' alt='imageFromGoogle'/>
                    </div>
                )
            })}

        </div>
    )

}

export default ImagesContainer;