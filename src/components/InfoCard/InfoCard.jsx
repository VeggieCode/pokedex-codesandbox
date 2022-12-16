import "./InfoCard.css";
import ElementalType from "../ElementalType/ElementalType";
import ProgressBar from "../ProgressBar/ProgressBar";

function InfoCard(props) {
  return (
    <div className="info-card">
      <div className="info-card__head">
        <h1 className="info-card__name">Pokemon</h1>
        <p className="info-card__id">#000</p>
      </div>
      <div className="info-card__type-container">
        <ElementalType />
        <ElementalType />
      </div>
      <p className="info-card__info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis
        sequi laudantium, similique sapiente eaque impedit libero voluptates
        facilis officia, odio perferendis eveniet consequatur? Nemo est
        consequatur distinctio ullam ratione.
      </p>
      <div className="info-card__general-info">
        <p className="info-card__data-sign">Altura</p>
        <p className="info-card__data">000m</p>

        <p className="info-card__data-sign">Peso</p>
        <p className="info-card__data">000kg</p>
      </div>

      <div className="info-card__stats-container">
        <ProgressBar />
        <p className="info-card__stat-sign">PS:</p>
        <p className="info-card__stat">255</p>

        <p className="info-card__stat-sign">PS:</p>
        <p className="info-card__stat">255</p>

        <p className="info-card__stat-sign">PS:</p>
        <p className="info-card__stat">255</p>

        <p className="info-card__stat-sign">PS:</p>
        <p className="info-card__stat">255</p>

        <p className="info-card__stat-sign">PS:</p>
        <p className="info-card__stat">255</p>

        <p className="info-card__stat-sign">PS:</p>
        <p className="info-card__stat">255</p>
      </div>
    </div>
  );
}

export default InfoCard;
