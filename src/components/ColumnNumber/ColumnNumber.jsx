import React from 'react';


export function ColumnNumber(props) {
    const {setColumnNumber, columnNumber, setJustifyCenter} = props;

    function onOptionClick(e) {
        let selectedValue = e.target.value;
        if (selectedValue === 1) {
            setJustifyCenter('images-container__image images-container__image--center');

        } else {
            setJustifyCenter('images-container__image');

        }
        setColumnNumber(selectedValue);
        console.log(columnNumber);

    }

    return (
        <div>
            <h3>Change number of columns</h3>
            <select onChange={e => onOptionClick(e)} defaultValue={1}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    )
}