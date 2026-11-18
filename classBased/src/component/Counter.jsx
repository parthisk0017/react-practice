import { Component } from "react";


export default class Counter extends Component{

    constructor()
    {
        super();

        this.state ={
            count: 0
        }
    }
    increament=()=>
    {
        console.log("increasing");
        this.setState({
            count: this.state.count +1
        })
        
    }
    decreament=()=>
    {
        console.log("decresing");
        this.setState({
            count:this.state.count -1
        })
        
    }
    reset =()=>{
        console.log("reseted");
        this.setState({
            count: 0
        })
    }

    render()
    {
        return(
            <>
                <h1> class based component</h1>
                <h2>Counter task</h2>

                <h2> count is :{this.state.count}</h2>
                <button onClick={this.increament}>Increament</button>
                <button onClick={this.decreament}>Decreament</button>
                <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}