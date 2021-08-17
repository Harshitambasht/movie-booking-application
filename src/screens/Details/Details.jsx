import React from 'react';
import './Details.css';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Grid from '@material-ui/core/Grid';
import Header from '../../common/Header/Header';

function Details(props) {
   
    return (
        <div>
            <div>
                <Header id={props.match.params.id} baseUrl={props.baseUrl} showBookShowButton="true"/>
            </div>
            <div className="btn">
                <NavLink to="/" activeStyle={{ textDecoration: "none", color: "black", }}>
                    <Grid container>
                        <Grid ><ChevronLeftIcon /></Grid>
                        <Grid style={{ marginTop: "1px" }} ><Typography>Back to Home</Typography></Grid>
                    </Grid>
                </NavLink>
            </div>
            <div className="details">
                <div className="left1">
                    <Left />

                </div>
                <div className="middle" ><Middle /></div>
                <div className="right1"> <Right /> </div>
            </div>
        </div>
    );
}
export default Details;
