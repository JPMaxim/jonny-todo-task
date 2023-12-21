import { useState } from "react"
import {addTodo} from "../api/addTodo"

const AddTodo = () => {
    const [userInput, setUserInput] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        // what function will run?
        let response = await addTodo(userInput)
        // console.log(response)
        alert("Successfully added Item")
    }

    return (
        <div>
            <h1>
                add item
            </h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo