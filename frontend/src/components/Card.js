import { Link } from "react-router-dom"
// import { deleteTodo } from "../api/deleteTodo"

const Card = ({ todo, deleteHandler, index }) => {

    return (
        <div>
            <h2>{`Item ${index + 1}`}</h2>
            <p>{todo.text}</p>
            <Link
                to={`/${todo._id}`} 
            >
            <button>edit</button>
            </Link>
            <button onClick={() => deleteHandler(todo._id)}>delete</button>
        </div>
    )
}
export default Card