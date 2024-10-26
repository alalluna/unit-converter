import React, { useState, useEffect } from 'react'
import Heart from '../assets/Heart.svg'
import Exchange from '../assets/Exchange.svg'
import CaretDown from '../assets/CaretDown.svg'

// km=kilometros mi=millas ft=pies in= pulgada cm=centimetros yardas=yr milimetros=mm
//declarar el valor de las medidas

const conversions = {
    'km-miles': value => (value * 0.621371).toFixed(2),
    'miles-km': value => (value / 0.621371).toFixed(2),
    'feet-metres': value => (value * 0.3048).toFixed(2),
    'metres-feet': value => (value / 0.3048).toFixed(2),
    'cm-inches': value => (value * 0.393701).toFixed(2),
    'inches-cm': value => (value / 0.393701).toFixed(2)
    // 'yr-mm': value => (value * 914.4).toFixed(2),
    // 'mm-yr': value => (value / 914.4).toFixed(2)
}

const Converter = ({ addConversion }) => {
    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState('')
    const [conversionType, setConversionType] = useState('km-miles')

    // const selectRef = useRef(null)

    useEffect(() => {
        if (inputValue === '') {
            setResult('')
        } else {
            setResult(conversions[conversionType](parseFloat(inputValue)))
        }
    }, [inputValue, conversionType])

    const handleSwap = () => {
        const [from, to] = conversionType.split('-')
        const newConversionType = `${to}-${from}`
        setConversionType(newConversionType)
        setInputValue(result)
        setResult(conversions[newConversionType](parseFloat(result)))
    }

    const handleCaretClick = () => {
        selectRef.current.focus()
    }

    return (
        <div className='div-converter'>
            <h2>convert</h2>
            <div className="select-input-container">
                <div className="select-container">
                    <select className="converter-select" value={conversionType} onChange={e => setConversionType(e.target.value)}>
                        {Object.keys(conversions).map(conversion => (
                            <option key={conversion} value={conversion}>
                                {conversion}
                            </option>
                        ))}
                    </select>
                    <button className="caret-button" onClick={handleCaretClick}>
                        <img src={CaretDown} alt="seleccionar unidad de medida" />
                    </button>
                    <button className="exchange-button" onClick={handleSwap}>
                        <img src={Exchange} alt="Intercambiar Unidades" />
                    </button>
                </div>
                <div className="input-container">
                    <input className="converter-input" type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                    <span className="unit-display">{conversionType.split('-')[0]}</span>
                </div>

            </div>

            <div className="heart-result-container">
                <button onClick={() => addConversion(conversionType, inputValue, result)} className="converter-heart">
                    <img src={Heart} alt="Guardar" style={{ width: "24px", height: "24px" }} />
                </button>
                <div className="result-container">
                    {result} {conversionType.split('-')[1]}
                </div>
            </div>

        </div>
    )

}

export default Converter