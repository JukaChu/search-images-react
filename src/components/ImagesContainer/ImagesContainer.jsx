import React from 'react';
import './ImagesContainer.css';

function ImagesContainer(props) {
    const {data, columnNumber, justifyCenter} = props;

    return (
        <div className={justifyCenter}>
            {data.map((oneImage) => {
                return (
                    <div className={`image__container--${columnNumber}`}>
                        <img src={oneImage} className='image__picture' alt='imageFromGoogle'/>
                    </div>
                )
            })}

        </div>
    )

}

export default ImagesContainer;