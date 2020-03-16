import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import TodoPages from './pages/TodoPages';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={TodoPages} path="/" exact />
          <Route component={AboutPage} path="/about" />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
