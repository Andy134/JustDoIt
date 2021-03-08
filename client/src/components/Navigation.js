import {useHistory, Link} from 'react-router-dom'

function Navigation() {
    return (
        <>
        <ul id="navigation">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
        </>
    )
}

export default Navigation