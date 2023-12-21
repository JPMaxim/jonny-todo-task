import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/addTodo'>
                        Add Todo
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar