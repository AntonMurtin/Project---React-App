
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export const Header = () => {
    const { isAuthenticated, username, isAdmin } = useAuthContext();
   ;
    return (

        <header>

           

            <nav className='sticky'>
                <div className='logo'>
                    
                    <Link to="/" ><svg xmlns="https://rainsystems.eu/wp-content/uploads/Logo_Rain_Systems-mini.png" className="site__logo" width="53" height="54" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb"/><stop offset="100%" stopColor="white"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>
                    Rain Systems</Link>
                </div>
                <div className="list">
                
                    <Link to="/shop">Shop</Link>
                    {!isAuthenticated && (
                        <>
                         <Link to="/login">Login</Link>
                         <Link to="/register">Register</Link>
                         </>
                    )}
                    {isAdmin && (
                        <>
                         <Link to="/create">Create</Link>
                         <Link to="/logout">Logout</Link>
                         </>
                    )}
                     {isAuthenticated && !isAdmin && (
                         <>
                        
                         <Link to="/favorit">My Favorit</Link>
                         <Link to="/logout">Logout</Link>
                         </>
                    )}
                    <Link to="/search" className="search">Search</Link>
                    {isAuthenticated &&(

                        
                    <Link to="/proffile" >Hi {username}</Link>
                    )}
                        
                </div>
                
            </nav>
        </header>
    );
};