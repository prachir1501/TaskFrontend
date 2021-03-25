import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



export default function Demo()
{

    const [rows,SetRows]=useState([])

    const addTask=()=>{

        // console.log("hello")

        // let newRows=[...rows];


        // newRows.push({id:1,status:"START"})

        

        // SetRows(newRows)

        // console.log(rows)

        axios.get('http://localhost:8000/newTest/').then((response)=>{
        
        console.log(response)

        SetRows(response.data)

        })


    }



    return(

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:50,marginBottom:50}}>

        <Paper elevation={5} style={{minHeight:650,width:"70%",justifyContent:"center",margin:"auto"}}>

      
      
        <div style={{margin:"auto",justifyContent:"center"}}>

        <Button onClick={()=>addTask()} variant="contained" color="primary" style={{margin:"auto",marginTop:50,marginBottom:50,marginLeft:"45%"}}>
        START TASK
      </Button>  


      </div>

      <TableContainer component={Paper} style={{marginTop:51,marginBottom:51,width:"90%",margin:"auto"}}>


      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task ID</TableCell>
            <TableCell >Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              
              <TableCell>{row.fields.primaryid}</TableCell>
              <TableCell>{row.fields.status}</TableCell>

              
            </TableRow>
          ))}

              
          
        </TableBody> 
      </Table>

      </TableContainer>






        </Paper>

        </div>
    )
}