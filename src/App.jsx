import React, { useState } from 'react'
import CourseForm from './CourseForm'
import ToDoList from './ToDoList'
import './global.css'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    let[state, setState] = useState({
        course : "",
        trainer : "",
        items : [],     // to store multiple course, trainer's data together
        id : uuidv4()   // to generate unique id
    })

    let {course, trainer, items, id} = state

    let handleChange = (e) => {
        let {name, value} = e.target
        setState({...state, [name] : value})
    }

    let handleSubmit = (e)=>{ 
        e.preventDefault() 
        let newItem = { 
            id : id , 
            course : course , 
            trainer : trainer 
        } 

        setState({ 
            items : [...items, newItem] , 
            id : uuidv4(), //generating id for the next data 
            course : "", 
            trainer : "" 
        }) 
    }

    let handleDelete = (x) => {

        let filteredItems = items.filter((value) => value.id != x)
        console.log(filteredItems);
        setState({...state, items : filteredItems})
    } 

    let handleUpdate = (y) => {
        
        let restItems = items.filter((value) => value.id != y)
        console.log("restItems ", restItems);

        let updateItem = items.find((value) => value.id == y)
        console.log("updateItem ", updateItem);

        setState({
            items : restItems,
            course : updateItem.course,
            trainer : updateItem.trainer,
            id : updateItem.id
        })

    }

  return (
    <>
        <article>
            <h1>ToDoList</h1>
            <main>
                <CourseForm
                    course={course} 
                    trainer={trainer}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit} />
                <ToDoList items={items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            </main>
        </article>
    </>
  )
}

export default App