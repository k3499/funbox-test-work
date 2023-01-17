import Treat from "../Treat/Treat"
import "./App.css"

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Ты сегодня покормил кота?</h1>
      <div className="app__wrapper">
        <Treat />
        <Treat />
        <Treat />
      </div>
    </div>
  )
}

export default App
