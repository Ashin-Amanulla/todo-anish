import React, { useState } from 'react';
import { Container, TextField, Button, Chip } from '@mui/material';
import styled from 'styled-components';


//styles
const Wrapper = styled.div`
margin-top: 100px;
height:auto;
display:flex;
justify-content:center;
align-items:center;

& h1{
   margin-bottom:50px;
}

& ul{
    margin-top:100px;
    padding: 20px 10px 20px 10px;
    border: 0.25px solid grey;
    border-radius:5px;
    
}
& li{
list-style:none;
margin-top:15px;
margin-bottom:15px;
overflow:hidden;
}
  
  `




const Todo = () => {

    //*Hooks
    var [myTasks, setMyTasks] = useState([]);
    var [userTask, setUserTask] = useState("");

    //*Functions

    const myTaskHandle = (event) => {       //To Assign the input value to userTask variable
        setUserTask(
            userTask = event.target.value)

    }

    const addTask = () => {                 //To push the newly added data to Array
        if (userTask.trim()) {              // Validation check -> Not empty
            setMyTasks(
                myTasks => [...myTasks, userTask]
            )
            setUserTask(                    //To make Input field back to empty
                userTask = ''
            )

        }
        else {
            alert("Enter Data...!!")
        }
    }

    const handleDelete = (event) => {             //To delete from array

        let index = event.currentTarget.id;
        setMyTasks(
            myTasks => [myTasks.splice(index, 1)]
        )
        console.log("delete")
        
    }

    return (


        <Wrapper>


            <Container
                style={{ textAlign: "center", }}
                maxWidth="sm">


                <h1> Todo App</h1>


                <TextField
                    value={userTask}
                    onChange={myTaskHandle}
                    label='Enter the task'
                    fullWidth
                    variant='outlined'
                    sx={{ marginBottom: '40px' }}

                />

                <Button
                    variant="contained"
                    onClick={addTask}
                > Add </Button>

                <ul>
                    {myTasks.map((value, index) => {
                        return (
                            <li key={value + index}
                            id={value+index}                            >
                                <Chip
                                    label={value}
                                    variant="outlined"
                                    id={index}
                                    onClick={handleDelete}
                                   

                                />
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </Wrapper>

    )
}

export default Todo;

