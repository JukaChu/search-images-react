import React, {memo} from 'react';
import './ImagesContainer.css';

function ImagesContainer(props) {
    const {data} = props;

    return (
        <div className='images-container__image'>
            {data.map((oneImage) => {
                return <img src={oneImage} className='image' alt='image'/>
            })}

        </div>
    )

}

export default ImagesContainer;