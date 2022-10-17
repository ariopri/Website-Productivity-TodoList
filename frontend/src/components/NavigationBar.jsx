import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import "./style/NavigationBar.css";

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: "#60a5fa",
  };
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(false);

  const cekkin = async () => {
    if (token) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    cekkin();
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setIsLogin(false);
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={navStyle}
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="text-light-100 ">
              <b>Gabungin</b>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" variant="dark">
              <div className="text-light ">
                <a className="nav-link text-light" href="/">
                  <b>Beranda </b>
                </a>
              </div>
              <div>
                <a className="nav-link text-light" href="/fitur">
                  <b> Features </b>
                </a>
              </div>
              <div>
                <a className="nav-link text-light" href="/faq">
                  <b> Customers </b>
                </a>
              </div>
              <div>
                <a className="nav-link text-light" href="/about">
                  <b> About US</b>
                </a>
              </div>
            </Nav>
            <Nav className="ms-auto">
              <div className="nav-item active button-primary third">
                <b>
                  {isLogin ? (
                    <a
                      className="nav-link btn btn-warning text-dark"
                      onClick={logout}
                      href="/"
                    >
                      <b>Logout</b>
                    </a>
                  ) : (
                    <a href="/Login" className="nav-link text-light ">
                      <b>{isLogin ? "Login" : "Login"}</b>
                    </a>
                  )}
                </b>
              </div>
              <div>
                <a className="nav-link text-light" href="/about">
                  <b> Sign Up</b>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;