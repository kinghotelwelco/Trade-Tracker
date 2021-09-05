import React, {useState } from 'react' ;
import { TextField, Button, Typography, Paper  } from '@material-ui/core';
import FileBase  from 'react-file-base64';
import { useDispatch} from 'react-redux';

import useStyles from './styles';
import { createPost} from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));        
    }

    const clear = () => {

    }

    return (
        <Paper className = {classes.paper}>
            <form autoComplete= "off" noValidate className= {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant= "h6">Log a Trade</Typography>
            <TextField name = "ticker"  variant = "outlined"  label = "Ticker" fullWidth value = {postData.ticker}onChange= {(e) => setPostData({ ...postData, ticker: e.target.value })}/>
            <TextField name = "date"  variant = "outlined"  label = "Date" fullWidth value = {postData.date}onChange= {(e) => setPostData({ ...postData, date: e.target.value })}/>
            <TextField name = "pnl"  variant = "outlined"  label = "PnL" fullWidth value = {postData.pnl}onChange= {(e) => setPostData({ ...postData, pnl: e.target.value })}/>
            <TextField name = "notes"  variant = "outlined"  label = "Notes" fullWidth value = {postData.notes}onChange= {(e) => setPostData({ ...postData, notes: e.target.value })}/>
            <div className= {classes.fileInput}><FileBase type= "file" multiple={false} onDone= {({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>           
            <Button className= {classes.buttonSubmit} variant= "contained" color = "primary" size = "large" type = "submit" fullWidth>Submit</Button>
            <Button variant= "contained" color = "secondary" size = "small" onClick={clear} fullWidth>Clear</Button>

            </form>
            </Paper>
    );
}

export default Form;