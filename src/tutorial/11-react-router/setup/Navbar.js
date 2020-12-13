import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link> {/* creating links */}
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/people'>People</Link>
				</li>
			</ul>
		</nav>
  )
};

export default Navbar;
