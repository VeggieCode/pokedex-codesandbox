import "./ProgressBar.css";

function ProgressBar({ stat, amount }) {
  //Block -Eleento- Modificador
  return (
    <div className="skill">
      <div className="info">
        <p className="stat">
          <span className="lista"></span>
          {stat}
        </p>
        <span className="porcentaje">{amount}</span>
      </div>
      <div className="barra">
        <div id="html " className="barra-progreso"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
