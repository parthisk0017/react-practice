
import products from '../data.json'
import Card from './Card';

const Home =()=>{
    let Products =[]
       console.log(products);
    return (
    <>
        <nav>
            <h1>Product Task</h1>
        </nav>
        <main>
            {
                products.map((ele)=>{
                    return (
                                <Card
                                    title={ele.title}
                                    price={ele.price}
                                    rating={ele.rating.rate}
                                    link={ele.image}
                                    key={ele.id}
                                />
                                )

                })
            }
        </main>
    </>
    )
}
export default Home