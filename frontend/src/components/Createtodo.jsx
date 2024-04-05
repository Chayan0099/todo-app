import { useState } from "react";

export function Createtodo(){
    const [title, setTitle] = useState(); 
    const [description, setDescription] = useState(); 

    return ( <div>
        <input style={{padding:10, margin:10}}type="text" placeholder="title" 
        onChange = {function(e){
            const value = e.target.value; 
            setTitle(e.target.value); 
        }}
        ></input><br />
        <input style={{padding:10, margin:10}}type="text" placeholder="description"
        onChange= {function(e){
            const value = e.target.value; 
            setDescription(e.target.value)
        }}
        ></input><br />

        <button style={{padding:10, margin:10}} 
       onClick={() => {
        fetch('http://localhost:3000/createtodo',{
            method: 'POST', 
            body: JSON.stringify({
                title: title,
                description: description
            }), 
            headers: { 
                'content-type': 'application/json'
            }
        })
        .then(async function(res){
            const json = res.json(); 
            alert('Todo added'); 
        })
       }}>Add todo</button>
        </div>
    )
}