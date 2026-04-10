
import "./card.css"

interface Props {
  title: string,
  price: number
}

function Card({ title, price }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  )
}

export default Card