import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Header from './components/Header'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'> 
      <Header />
      <Hero />
      <About />
    </main> 
    
    
  )
}

export default App