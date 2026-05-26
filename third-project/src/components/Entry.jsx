import Avater from "./Avater";

function Entry(props) {
  return (
    <div>
      <div className="term">
        <dt>
          <Avater emoji={props.emoji} />
          <span>{props.name}</span>
        </dt>
        <dd>{props.description}</dd>
      </div>
    </div>
  );
}
export default Entry;
