import DessertCard, {DessertCardProp} from "./components/DessertCard"
import { useEffect, useState } from "react"
const App = () => {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([])

  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(apiDesserts => setDesserts(apiDesserts))
  },[desserts])
  return (
    <div className="dessert-grid">
        {
          desserts.map(dessert => <DessertCard{...dessert}/>)
        }
    </div>
  )
}

export default App