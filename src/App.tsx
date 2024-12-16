import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Button from '@ui/components/Button'
import { cn } from '@app/utils/index'

export default function App() {
  const [state, setState] = useState()
  return (
    <BrowserRouter>
      <Button />
    </BrowserRouter>
  )
}
