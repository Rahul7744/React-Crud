import React, { Component } from "react";
// import LocalStoreManager from "../Managers/LocalStoreManager";
// import { KeyMaps } from "./../Constants/KeyMaps"
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            per_page: 5
        }
    }
    handleDelete = (id) => {
        console.log("handle", id)
        this.props.onDelete(id);
    }

    handleClick = (pageNo) => {
        this.setState({ page: pageNo })
    }
    rowChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        var pageNo = this.state.page
        var per_page_no = this.state.per_page
        var toatalData = this.props.details
        //    console.log(toatalData)
        var total_pages = Math.ceil(toatalData.length / per_page_no)
        let start = (pageNo - 1) * per_page_no  //10
        let end = start + per_page_no // 10
        let slicedData = toatalData.slice(start, end)
        //   console.log(slicedData)
        var pageNumbers = []
        for (var i = 1; i <= total_pages; i++) {
            pageNumbers.push(i)
        }
        // console.log(pageNumbers)
        var button = pageNumbers.map(btn => {
            return (
                
                <button className=" btn btn-light"onClick={() => this.handleClick(btn)}>{btn}</button>
                
            )
        })


        // *************************************************************
        console.log("render-table", this.props.details)
        // const { data } = this.state.details

        const columns = ["Company", "Location", "Job-Title", "Openings", "Salary", "Edit", "Delete"]

        return (
            <div>

                <table className="table table-striped">
                    <thead className=" table-dark">
                        <tr>

                            {columns.map((col, index) => <th key={index} scope="col">{col}</th>)}

                        </tr>
                    </thead>
                    {slicedData.map((item, id) => {
                        return (
                            <tbody className="bg-white">
                                <tr key={id}>

                                    <td>{item.company}</td>
                                    <td>{item.location}</td>
                                    <td>{item.jobtitle}</td>
                                    <td>{item.openings}</td>
                                    <td>{item.salary}</td>
                                    <td><img alt="" style={{ "width": "30%" }} src="https://img.icons8.com/material-sharp/24/000000/edit.png" /></td>
                                    <td><img alt="" onClick={() => { this.handleDelete(id) }} style={{ "width": "30%" }} src="https://img.icons8.com/flat_round/64/000000/delete-sign.png" /></td>

                                </tr>
                            </tbody>

                        )

                    })}





                </table>￼
                <select className="form-control offset-5 mb-5 btn btn-light" style={{width: "120px"}} onChange={this.rowChange} name="per_page">
                    <option value="" selected>Per Page</option>
                    <option value="5">5</option>
                    <option value="￼10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
                <div className="float-right">
                    {button}
                </div>
                   
            
            </div>
        )

    }


}


export default Table
