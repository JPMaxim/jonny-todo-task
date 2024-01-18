import { Link } from "react-router-dom"
// import { deleteTodo } from "../api/deleteTodo"

const Card = ({ todo, deleteHandler, index }) => {

    return (
        <div>
            {index < 9 
                ? <div>
                    <h2>{`0${index + 1} ${todo.title}`}</h2>
                    <h3>{todo.description}</h3>
                </div> 
                : <div>
                    <h2>{`${index + 1} ${todo.title}`}</h2>
                    <h3>{todo.description}</h3>
                </div>}
            
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