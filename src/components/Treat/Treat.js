import { useState } from "react"
import "./Treat.css"

const Treat = ({ meal }) => {
  const [selected, setSelected] = useState(false)
  const [hover, setHover] = useState(false)
  const [firstLeave, setFirstLeave] = useState(false)
  const [available, setAvailable] = useState(meal.disabled)
  console.log(available)
  const select = (evt) => {
    evt.preventDefault()
    console.log(evt)
    if (!selected) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }

  const handleHover = () => {
    if (selected) {
      if (!hover && !firstLeave) {
        setHover(true)
        console.log(" первый раз навел")
      } else if (!hover && firstLeave) {
        setHover(true)
        console.log(" второй раз навел")
      }
    }
  }
  const handleHoverLeave = () => {
    if (hover && !firstLeave) {
      console.log(" первый раз покинул")
      setFirstLeave(true)
      setHover(false)
    } else if (hover && firstLeave) {
      console.log(" второй раз покинул")
      setHover(false)
    }
  }

  return (
    <div className="treat">
      <div
        className={
          "treat__block " +
          (selected ? "selected" : "") +
          (available ? "disabled" : "")
        }
        onClick={select}
        onMouseOver={handleHover}
        onMouseLeave={handleHoverLeave}
      >
        <div className="treat__head-block">
          {hover && selected && firstLeave ? (
            <p className="treat__category treat__category-selected">
              Котэ не одобряет?
            </p>
          ) : (
            <p className="treat__category">Сказочное заморское яство</p>
          )}
        </div>
        <div className="treat__body-block">
          <h2 className="treat__title">Нямушка</h2>
          <p className="treat__subtitle">с {meal.name}</p>
          <p className="treat__features">
            <strong>{meal.portion}</strong> порций
          </p>
          <p className="treat__features">{meal.mouses}</p>
          <div className="treat__cat"></div>
          <div className="treat__weight-circle">
            <p className="treat__weight">{meal.weight}</p>
            <p className="treat__weight-metric">кг</p>
          </div>
        </div>
      </div>
      {selected ? (
        <p className="treat__call">{meal.description}</p>
      ) : !meal.disabled ? (
        <p className="treat__call">
          Чего сидишь? Порадуй котэ,{" "}
          <a href="#" className="treat__call-link" onClick={select}>
            купи.
          </a>
        </p>
      ) : (
        <p className="treat__call treat__call-disabled">
          Печалька, с {meal.name} закончился.
        </p>
      )}
    </div>
  )
}

export default Treat
