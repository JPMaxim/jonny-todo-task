import { useState } from "react"
import { addTodo } from "../api/addTodo"

const AddTodo = () => {
    const [titleInput, setTitleInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")

    const handleSubmit = async (e) => {
        // e.preventDefault()
        // what function will run?
        let response = await addTodo(titleInput, descriptionInput)
        // console.log(response)
        alert("Successfully added Item")
    }

    return (
        <div>
            <h1>
                add item
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Task Title</label>
                <input
                    type="text"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                />
                <br></br>
                <label>Enter Task Description</label>
                <input
                    type="text"
                    value={descriptionInput}
                    onChange={(e) => setDescriptionInput(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddTodo