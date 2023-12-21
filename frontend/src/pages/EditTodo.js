import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"
const EditTodo = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const submitHandler = async () => {
        let obj = {
            _id: toUpdate._id,
            text: userInput
        }
        updateTodo(obj)
        alert('The item was successfully edited')
    }

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id)
            setToUpdate(data)
            setUserInput(data)
        }
        fetchTodo()
    }, [])
    return (
        <div>
            <h4>{toUpdate.text}</h4>
            <div>
                <form onSubmit={submitHandler}>
                    <label>
                        <div>Edit:</div>
                        <input
                            type="text"
                            value={userInput.text}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>

            {/*
            <h1>edit</h1>
            <h2>{toUpdate.text}</h2>
            <input
                onChange={() => { }}
            />
            <button onClick={submitHandler}>submit</button> */}
        </div>
    )
}
export default EditTodo