import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top" size="small">
        <Container>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Employee-requests">Employee Requests</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/employer-update-requests">Update Employee</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/advertisement/add">Add Job Position</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/job-positions/add">Add Job Employee</Link>
          </Menu.Item>

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
          <Menu.Item>
            <Link to="/my-favourites">My Favourites</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
