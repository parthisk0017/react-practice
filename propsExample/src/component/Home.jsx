import Card from "./Card"



let Home = ()=>{
    return(
        <>
        <header>
            <h1>THis is home component</h1>
        </header>
        <main>
            <Card product= {"laptop"}price={"50000"}rating ={"4.5"}/>
            <Card product= {"mobile"}price={"50000"}rating ={"4.9"}/>
            <Card product= {"tab"}price={"60000"}rating ={"4.8"}/>
        </main>
        </>
    )
}
export default Home