import React from 'react';

const NavBar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        React + TypScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">Список дел</a>
        </li>
        <li>
          <a href="/">Информация</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
