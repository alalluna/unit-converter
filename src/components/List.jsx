import React from 'react'

const List = ({ conversions, removeConversion }) => {
    return (
        <div className="div-list">
            <h3>Saved</h3>
            <ul>
                {conversions.map((conversion, index) => {
                    const [fromUnit, toUnit] = conversion.conversionType.split('-')
                    return (
                        <div className="elementSaved" key={index}>
                            <li>
                                {conversion.inputValue} {fromUnit} = {conversion.result} {toUnit}
                                <button onClick={() => removeConversion(index)}> x </button>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>

    )
}

export default List