import { useState } from "react";
import "./app.css";

export default function app(){
    const [todos, settodos] = useState([
       { title: "go to gym",
        description: "hit the gym regularly",
        done: false
       },
    ]);

    function addtodo(){
        let newtodo=[];
        for(let i=0;i<todos.length;i++){
            newtodo.push(todos[i]);
        }
        newtodo.push({
            title: document.getElementById("title").value,
            description: document.getElementById.value,
            done: true
            //addnewtodo
        })
        settodos(newtodo);
    };
    return (
        <div>
            <input id="title" type="text" placeholder="Title"></input>
            <input id="description" type="text" placeholder="Description"></input>
            <br>
            <button onClick={addtodo}> add todo </button>
            </br>
            {todos.map((todo)=>{
                <Todo
                title={todo.title}
                description={todo.description}
                done={todo.done}
                />
            })}
        </div>
    );
}

function Todo(props){
    return (
        <div>
            <h2>{props.title}</h2>
             <h2>{props.description}</h2>
              <h2>{props.done ? "done" : "not done" }</h2>
        </div>
    )
}