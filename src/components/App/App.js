import { useState } from "react"
import Treat from "../Treat/Treat"
import "./App.css"

function App() {
  const [fua, setFua] = useState({
    name: "фуа-гра",
    portion: 10,
    mouses: "мышь в подарок",
    weight: "0,5",
    description: "Печень утки разварная с артишоками.",
    disabled: false,
  })
  const [fish, setFish] = useState({
    name: "Рыбой",
    portion: 40,
    mouses: "2 мыши в подарок",
    weight: "2",
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    disabled: false,
  })
  const [chicken, setChicken] = useState({
    name: "Курой",
    portion: 100,
    mouses: "5 мышей в подарок",
    weight: "5",
    description: "Филе из цыплят с трюфелями в бульоне.",
    disabled: true,
  })

  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__title">Ты сегодня покормил кота?</h1>
        <div className="app__treat-box">
          <Treat meal={fua} />
          <Treat meal={fish} />
          <Treat meal={chicken} />
        </div>
      </div>
    </div>
  )
}

export default App
