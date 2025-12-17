
interface productI{
    name : string;
    price: string;
    image : string;
}

const Card = ( {name  , price , image} : productI) => {
  return (
    <div className="card">
        <h3>{name}</h3>
        <p>{price}</p>
        <img src= {image} alt="" />

    </div>
  )
}

export default Card
