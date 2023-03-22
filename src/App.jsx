import { useState } from 'react'
import { Cell } from './components/Cell/Cell'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cell />
    </div>
  )
}

export default App
