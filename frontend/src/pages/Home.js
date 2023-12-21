import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";
const Home = () => {
    const [todos, setTodos] = useState([])


    const deleteHandler = async (id) => {
        let data = await deleteTodo(id)
        let copy = [...todos]
        copy.splice( copy.findIndex(el => el._id == id) ,1)
        setTodos(copy)
    }
    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
            console.log(data.message)
        }
        fetchTodos()
    }, [])

    if (!todos) return <h1>loading...</h1>
    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <div key={todo._id}>
                        <Card 
                            key={todo._id}
                            index={index}
                            deleteHandler={deleteHandler} 
                            todo={todo}
                        />
                    </div>
                )
            })}
        </div>
    );

}

export default Home