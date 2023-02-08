function Card(props) {
  const { names, images } = props

  return (
    <div className="card">
      <img src={images} />
      <h3>{names}</h3>
    </div>
  )
}

export default Card
