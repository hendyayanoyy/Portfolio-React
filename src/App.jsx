import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './layouts/hero'
import Technology from './layouts/technologies'
import Work from './layouts/where-work'
import WhatWork from './layouts/whats-work'

function App() {

  return (
 <>
 <div className="mb-20">
<Navbar/>
 </div>
 
 <div className='mb-20'>
<Hero/>
 </div>

<div className='pt-32 mb-32'>
<Technology/>
</div>

<div className='pt-32 mb-32'>
<Work/>
</div>

<div>
  <WhatWork/>
</div>
 </>
  )
}

export default App
