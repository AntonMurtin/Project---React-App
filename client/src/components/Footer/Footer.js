import { Link } from 'react-router-dom'


export const Footer = () => {

    return (
        <footer >

            <Link to="" ><i className="fa-solid fa-envelope-open-text fa-2x"></i>: rainsystems@mail.bg</Link>

            <Link to="/abalt" ><i className="fa-solid fa-circle-info fa-2x"></i></Link>

            <Link to="https://rainsystems.eu/?fbclid=IwAR2BpFsMu5czvR8LLnkYrqjwHZwBSmv5CR_a7oWzOXZkK82OqBitf9ekfoU" ><i className="fa-solid fa-globe fa-2x"></i></Link>

            <Link to="https://www.facebook.com/rainsystems" ><i className="fa-brands fa-facebook fa-2x"></i></Link>

            <Link to="" >0888111111<i className="fa-solid fa-phone fa-2x"></i></Link>

        </footer>

    )
}
