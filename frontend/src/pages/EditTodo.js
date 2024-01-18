import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"
const EditTodo = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [titleInput, setTitleInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')

    const submitHandler = async () => {
        let obj = {
            _id: toUpdate.id,
            title: titleInput,
            description: descriptionInput
        }
        updateTodo(obj)
        alert('The item was successfully edited')
    }

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id)
            // console.log(data)
            setToUpdate({ id: data._id, title: data.title, description: data.description })
            setTitleInput(data.title)
            setDescriptionInput(data.description)
        }
        fetchTodo()
    }, [])
    return (
        <div>
            <h3>{toUpdate.title}</h3>
            <h4>{toUpdate.description}</h4>
            <div>
                <form onSubmit={submitHandler}>
                    <label>Edit Title:</label>
                    <input
                        type="text"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                    />
                    <br></br>
                    <label>Edit Description:</label>
                    <input
                        type="text"
                        value={descriptionInput}
                        onChange={(e) => setDescriptionInput(e.target.value)}
                    />
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