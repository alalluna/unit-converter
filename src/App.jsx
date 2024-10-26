import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Converter from './components/Converter.jsx'
import List from './components/List.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [conversions, setConversions] = useState([])


  const addConversion = (conversionType, inputValue, result) => {
    setConversions([...conversions, { conversionType, inputValue, result }])
  }

  const removeConversion = (index) => {
    setConversions(conversions.filter((_, i) => i !== index))
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
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
