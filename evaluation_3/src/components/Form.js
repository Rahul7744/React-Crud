import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BusinessIcon from '@material-ui/icons/Business';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import LocalStoreManager from "../Managers/LocalStoreManager";
// import { KeyMaps }from "./../Constants/KeyMaps"
class Form extends Component {
   constructor(){
       super();
       this.state = {
        data:[],
        id:"",
        company:"",
        location:"",
        jobtitle:"",
        openings:"",
        salary:"",


       }
    //    this.store = new LocalStoreManager();
   }
   
    handleChange = (e) => {
        // console.log(this.state);
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", this.state);
        // const data = {}
        const data = {
            id:Math.random(),
            company:this.state.company,
            location:this.state.location,
            jobtitle:this.state.jobtitle,
            openings:this.state.openings,
            salary:this.state.salary


        }
        this.setState({
            data: [...this.state.data, data]},()=>localStorage.setItem('data',JSON.stringify(this.state.data)))
    }
    
    componentDidMount(){
        let local_data = JSON.parse(localStorage.getItem('data'))
        if(!local_data){
            local_data=[]
        }
        this.setState({
            data: local_data
        })
    }
    

    render() {
        console.log(this.state.data)
        return (
            <form className="flex offset-4 mt-5" onSubmit={this.handleSubmit}>
                <div><BusinessIcon className="m-4" /><TextField id="standard-basic" label="Company" name="company" value={this.state.company} onChange={this.handleChange}/></div>
                
                <div><LocationCityIcon className="m-4" /><TextField id="standard-basic" label="Location" name="location" value={this.state.location} onChange={this.handleChange}/></div>
                <div><CodeIcon className="m-4"/><TextField id="standard-basic" label="jobtitle" name="jobtitle" value={this.state.jobtitle} onChange={this.handleChange}/></div>
                <div><WorkIcon className="m-4" /><TextField id="standard-basic" type="number"  label="openings"name="openings" value={this.state.openings} onChange={this.handleChange}/></div>
                <div><AttachMoneyIcon className="m-4" /><TextField id="standard-basic"  type="number" label="salary"name="salary" value={this.state.salary} onChange={this.handleChange}/></div>
                <div><Button type="submit"className="m-5 btn btn-outline-primary" variant="contained" >Submit</Button></div>
            </form>
        )
    }
}

export default Form