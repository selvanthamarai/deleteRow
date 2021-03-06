
import React, { useState, useEffect } from 'react'
import { useAsyncEndpoint } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Textfield from '../TextFieldComonent/Textfield';
import OptionField from '../OptionField/OptionType';
import logo from '../Logo/logo.svg'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleAppBar from '../SimpleAppBar/SimpleAppBar';
import MadeWithLove from '../Footer/Footer'
import LeaveButton from '../ApproveRejectButton/ApproveRejectButtons'
import axios from 'axios';
import { User, Addexpenses } from '../constant/tableconstant'
// import Orders from '../../dashboard/Orders';
import Table from '../TablePagination/Table'
import { array } from 'prop-types';
// import { BrowserRouter as link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },

}));


export default function SignUp(props) {
  const classes = useStyles();

  console.log('permissionprops', props)


  const [values, setValues] = useState({ empname: '', employeeid: '', leavereason: '', startdate: '', enddate: '', leavetype: '' });

  const changeHandler = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  //const rows=[1];

  const [rows, setRows] = useState([{}]);

  const setMethod = (event) => {
    console.log("====", rows.length)
    //  let array=rows
    setRows([...rows, "addRow"])
  }

const index=0;
rows.map((num)=>{
  index++
  if(num==5){
    console.log(index)
    remove(index);
  }
})

  const remove = (event) => {
    
      rows.splice(index,1)

    useState([...array,array])
    
  }





  // // //       setRows() const setCount = () => {  

  // //       setRows(rows.push(1))

  //       rows.push(1)
  //      console.log("hello world");

  //  };

  // const getVal = rows => {
  //        // rows.push(1)
  //   console.log('hello', rows)
  //   setRows({ ...rows, [rows.push(1)]: rows })
  // }







  //const rows=[1];




  //  console.log("hello world",rows.length);






  const getValue = value => {
    console.log('permission value', value)
    setValues({ ...values, ['leavetype']: value })
  }

  const submitHandler = e => {
    console.log('sss', values)
    const { empname, employeeid, leavereason, startdate, enddate, leavetype } = values

    if (!empname || !employeeid || !leavereason || !startdate || !enddate || !leavetype) return
    e.preventDefault();
    // axios.post(
    //   'https://jsonplaceholder.typicode.com/posts',values
    // ).then(response=>{
    //   console.log("response",response)
    // })
    // .catch(error=>{
    //   console.log("error",error)
    // })
    // console.log("permision", values)
    // props.prop.history.push('/dashboard', { type: 'Leave Application' });
    fetch('http://localhost:5000/employee/{id}/leave',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, body: JSON.stringify(values)
      })
      .then(response => {
        console.log("response", response)
        props.history.push('/signin');

      }
      )
      .catch(e => console.log("hi", e));
  }









  console.log('SSSS', values)
  return (
    <div>
      {/* <SimpleAppBar /> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={logo} alt="logo" />
          </Avatar>
          <Typography component="h1" variant="h5">
            {props.prop.location.state.actual_type === "User" ? "Leave Request form" : "Expense submit form"}

            {/* {props.type==="User"?"hello":null} */}
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={1}>
              <Textfield name="employeeid" id="employeeid" label="id Number" autoComplete="eid" variant="outlined" sms="6" autof={true} value={values.employeeid} onchange={changeHandler} />
              <Textfield name="empname" id="empname" label="Name" autoComplete="name" variant="outlined" sms="6" autof={false} value={values.empname} onchange={changeHandler} />
              {props.prop.location.state.actual_type === "User" ? <Textfield name="leavereason" id="leavereason" label="Leave Reason" autoComplete="lreason" variant="outlined" sms="false" autof={false} value={values.leavereason} onchange={changeHandler} /> : null}
              {props.prop.location.state.actual_type === "User" ? <Textfield name="startdate" id="startdate" label="" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.startdate} onchange={changeHandler} /> : null}
              {props.prop.location.state.actual_type === "User" ? <Textfield name="enddate" id="enddate" label="" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.enddate} onchange={changeHandler} /> : null}
              {props.prop.location.state.actual_type === "User" ? <OptionField getValue={getValue} values={["Sick", "Personal", "Casual"]} label="leave type" /> : null}

            </Grid>


            <Grid container justify="flex-end">
            </Grid>
          </form>
          <br />
          <FormControlLabel
            control={<null value="" color="primary" />}
            label={props.prop.location.state.actual_type === "User" ? "I want to receive inspiration, marketing promotions and updates via email." : null}
          />

        </div>

        <Box mt={5}>
          {/* <MadeWithLove /> */}
        </Box>
      </Container>
      <div class="row">
        {/* <div class="col-sm-8"></div> */}
        <div class="col-sm-10"></div>
        <div class="col-sm-2"><Fab onClick={setMethod} variant="extended" color="primary"><AddIcon />Add</Fab></div>

        {/* <div class="col-sm-2"><Fab  onClick={() => remove()} variant="extended" color="secondary">Remove</Fab></div>     */}
      </div>

      <Table rows={rows} delete={remove} />
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2"><LeaveButton type="submit" full={false} variant="contained" color="primary" className={classes.submit} label="Submit" /></div>
      </div>

    </div>

  );
}



// array=[1,2,3,4]

// array.map((data)=>{

//     return(

//     )
// })