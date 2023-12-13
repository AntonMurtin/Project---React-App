import {Link} from 'react-router-dom'


export const Footer=()=>{
  const spase='  '
    return (
<footer >
  
<Link to="" ><i class="fa-solid fa-envelope-open-text fa-2x"></i>{spase}rainsystems@mail.bg</Link>

<Link to="/abalt" ><i class="fa-solid fa-circle-info fa-2x"></i></Link>

<Link to="https://rainsystems.eu/?fbclid=IwAR2BpFsMu5czvR8LLnkYrqjwHZwBSmv5CR_a7oWzOXZkK82OqBitf9ekfoU" ><i class="fa-solid fa-globe fa-2x"></i></Link>

<Link to="https://www.facebook.com/rainsystems" ><i class="fa-brands fa-facebook fa-2x"></i></Link>

<Link to="" >0888111111<i class="fa-solid fa-phone fa-2x"></i></Link>

</footer>

)
}
{/* <footer>
<ul class="footer-links">
<li>
<a href="”>About</a>
</li>
<li>
<a href="">Privacy Policy</a>
</li>
<li>
<a href="">Disclaimer</a>
</li>
</ul>
</footer> */}