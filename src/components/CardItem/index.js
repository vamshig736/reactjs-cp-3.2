// Write your code here.

'./index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
