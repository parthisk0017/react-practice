


const Card = (props)=>{
    let{title,price,rating,link} = props
    return(
        <div className="product-card">
            <img id="img" src={link} alt="" />
            <h2>{title}</h2>
            <h3 id="h3">{price}</h3>
            <h4 id="h4">{rating}⭐</h4>
        </div>
    )
}
export default Card