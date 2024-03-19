import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Components/Container'

function App() 
{
  const [count, setCount] = useState(0)
  let healthyItems=["Apple","Banana","Mango","PineApple","Watermelon","Dragon Fruit","Papaya"];
  
    let msg= healthyItems.length===0 && <h3>im hungry</h3>;
    return(
      <>
      <Container>
        <h1>Healthy Food</h1>
        {msg}
        <ul className="list-group">
          {healthyItems.sort().map(item=><li key={item} className="list-group-item">{item}</li>)}
          </ul> 
     </Container>
       <Container>
       <p>
        the above items are healthy food items , good for ur health</p>
    </Container>
    </>
    )
    }
export default App
