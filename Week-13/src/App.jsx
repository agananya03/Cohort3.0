import React from 'react'
import {Input} from './components/Input'
import { Button } from './components/Button'
import './App.css'

const App = () => {
  return (
     <div className='h-screen bg-blue-700'>
      <Input type="text" placeholder={"username"}></Input>
      <Button disabled={true}>Sign Up</Button>
     </div>
  )
}

export default App
