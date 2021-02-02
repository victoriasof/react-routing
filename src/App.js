import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';

import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { HomePage } from "./components/HomePage";

const StyledDiv = styled.div`
  background-color: green;
  color: white;
  height: 200px;
  width: 200px;
`;

function App() {
  const isLogged = true;
  const styles = {
    nav: {
      backgroundColor: 'orange',
      color: 'white',
      padding: '10px 15px 10px 15px'
    }
  };

  if (isLogged) {
    styles.nav.backgroundColor = 'green';
  }

  return (
    <div className="App">
      <Router>
        <nav style={styles.nav}>
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
          <NavLink to="/about" activeClassName="active-link">About</NavLink>
          <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
          <NavLink to="/activePage" activeClassName="active-link">Active Page Test</NavLink>
        </nav>

        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/activePage">
            <p>Active page test</p>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

      <StyledDiv />
    </div>
  );
}

export default App;
