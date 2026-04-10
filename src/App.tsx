import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {default as useProduct} from "./hooks/usePtroduct"
import Card from './components/card'

function App() {
  const {
    product,
    filtro,
    setFiltro,
  } = useProduct();
  return (
    <>
      <input
        type="text"
        placeholder="Buscar producto"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {product.map((p) => (
        <Card
          key={p.id}
          title={p.title}
          price={p.price}
        />
      ))}
    </>
  )
}

export default App
