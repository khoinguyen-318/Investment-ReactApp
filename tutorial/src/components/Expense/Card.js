import "./Card.css";

const Card = (props) => {
  return <div className={"cart " + props.className}>{props.children}</div>;
};
export default Card;
