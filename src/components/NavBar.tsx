import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <Link to="/" className="brand-logo">
        React + TypScript
      </Link>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
