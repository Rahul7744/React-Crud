import React,{ Component } from "react";
import Table from "./Table";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            details:[]
           

    }
   
}

componentDidMount() {

    let local_data = localStorage.getItem('data')
    local_data = JSON.parse(local_data)
    if(!local_data){
        local_data=[]
    }
    console.log("home" ,local_data);
    // const details = [...this.state.details,local_data]
    this.setState({
        details: local_data
        

    })
   
}

onDelete = (id) => {
    console.log("delete", id); 
    let data = this.state.details.filter((item, index)=> {
         return index !== id

    })
    this.setState({
        details:data


    })
   
}


    

    render(){
      
        return(
            <div>
           <Table details={this.state.details} onDelete={this.onDelete}/>
          
    
         
            <p>This is homepage</p>    
            </div>
        )

    }
    

}

export default Home