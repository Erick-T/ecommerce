import { useState } from 'react'
import Card from "./components/Card.jsx"
import Navbar from './components/Navbar/Navbar.jsx'
import CounterContainer from './components/CounterContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar />
      <h1>Holis</h1>
      <div className="row">
        <div className="col-3">
          <Card
            title="Titulo 1"
            description="Description 1"
            img="https://picsum.photos/id/237/200/300"
          />
        </div>

        <div className="col-3">
          <Card
            title="Titulo 2"
            description="Description 2"
            img="https://picsum.photos/id/238/200/300"
          />
        </div>

        <div className="col-3">
          <Card
            title="Titulo 3"
            description="Description 3"
            img="https://picsum.photos/id/239/200/300"
          />
        </div>
      </div>
      <CounterContainer />



    </div>
  )
}

export default App
