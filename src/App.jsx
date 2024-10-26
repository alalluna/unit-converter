import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Converter from './components/Converter.jsx'
import List from './components/List.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [conversions, setConversions] = useState([])
  useEffect(() => {
    const storedConversions = JSON.parse(localStorage.getItem('conversions'))
    // console.log("Cargando desde localStorage:", storedConversions)
    if (storedConversions && Array.isArray(storedConversions)) {
      setConversions(storedConversions)
    }
  }, [])

  const addConversion = (conversionType, inputValue, result) => {
    const newConversion = { conversionType, inputValue, result }

    if (newConversion && newConversion.conversionType && newConversion.inputValue && newConversion.result) {
      setConversions((prevConversions) => {
        const updatedConversions = [...prevConversions, newConversion]
        localStorage.setItem('conversions', JSON.stringify(updatedConversions))
        return updatedConversions
      })
    } else {
      console.error("Error: newConversion tiene propiedades faltantes.", newConversion)
    }
  }

  const removeConversion = (index) => {
    const updatedConversions = conversions.filter((_, i) => i !== index)
    setConversions(updatedConversions)
    localStorage.setItem('conversions', JSON.stringify(updatedConversions))
  }

  return (
    <div className="app">
      <div className="header-container">
        <div className="divheader">
          <Header />
        </div>
      </div>
      <div className="body-content">
        <div className="section">
          <div className=" section-one">
            <Converter addConversion={addConversion} />
          </div>
          <div className=" section-two">
            <List conversions={conversions} removeConversion={removeConversion} />
          </div>

        </div>

      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default App
