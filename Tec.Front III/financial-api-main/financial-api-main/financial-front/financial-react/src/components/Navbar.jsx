import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/customers'>Usuarios</Link>
    </nav>
  )
}

export default Navbar