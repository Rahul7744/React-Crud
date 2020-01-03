import React from 'react';
import {Link} from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// import TableChartIcon from '@material-ui/icons/TableChart';


const Navbar = () => {
    return (
     
            <div className="shadow-lg p-3 mb-5 bg-white rounded d-flex justify-content-center">
                <Paper>
                    <Tabs>
                        <Link to="/home"><Tab icon={<HomeIcon />} label="Home" /></Link>
                        <Link to="/form"><Tab icon={<PersonAddIcon />} label="Add-Details" /></Link>
                       
                        {/* <Link to="/table"><Tab icon={<TableChartIcon />} label="Table" /></Link> */}

                    </Tabs>
                </Paper>
            </div>
       

    )

}

export default Navbar