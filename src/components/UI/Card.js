import './Card.css'

const Card = (props) => {
  const classes = 'card ' + props.className
  // white space after the card is important! this makes the div a part of 2 different CSS classes.

  return <div className={classes}>{props.children}</div>
}

export default Card
