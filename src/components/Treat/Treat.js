import "./Treat.css"

function Treat() {
  return (
    <div className="treat">
      <div className="treat__block">
        <div className="treat__head-block">
          <p className="treat__category">Сказочное заморское яство</p>
        </div>
        <div className="treat__body-block">
          <h2 className="treat__title">Нямушка</h2>
          <p className="treat__subtitle">с фуа-гра</p>
          <p className="treat__features">
            <strong>10</strong> порций
          </p>
          <p className="treat__features">мышь в подарок</p>
          <div className="treat__cat"></div>
          <div className="treat__weight-circle">
            <p className="treat__weight">0,5</p>
            <p className="treat__weight-metric">кг</p>
          </div>
        </div>
      </div>
      <p className="treat__call">
        Чего сидишь? Порадуй котэ,{" "}
        <a href="#" className="treat__call-link">
          купи.
        </a>
      </p>
    </div>
  )
}

export default Treat
