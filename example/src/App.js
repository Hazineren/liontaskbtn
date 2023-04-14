import React from 'react'

import { ExampleComponent, Button } from 'liontaskbtn'
import 'liontaskbtn/dist/index.css'

const App = () => {
  return (
    // Butonlarımızın stillendirmelerini type'ına göre yaptık
    <>
    <div className='container'>
      <Button type='primary' text='Primary Button'></Button>
      <Button type='Default Button' text='Default Button'></Button>
      <Button type='dashed' text='Dashed Button'></Button>
      <Button type='text' text='Text Button'></Button>
      <Button type='link' text='Link Button'></Button>
      </div>
    </>
  )
}

export default App
