import { Link} from "react-router-dom"
import {Box, Button, Container} from "@chakra-ui/react"
import "../Styles/Navbar.css";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () =>{
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  
    return (
        <Box>
            <Container className={click ? 'nav-menu active' : 'navbar_main'} >
                <Box className="navbar_left">
                    <Box className="nav_logo" onClick={closeMobileMenu}>
                      <Link to="/">
                        </Link>
                    </Box>
                    <Box
                      className="nav_products"
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      >
                        <Link
                          className="nav_products_link"
                          to="/recruiting"
                          onClick={closeMobileMenu}
                          >
                            Products & solutions
                            <i className='fas fa-caret-down' />
                        </Link>
                            {dropdown && <Dropdown />}
                        </Box>
                        <Box>
                          <Link
                            className="nav_resources" 
                            to="/resources"
                            onClick={closeMobileMenu}
                            >
                              Resoures
                                  {/* <i className='fas fa-caret-down' /> */}
                            </Link>
                        </Box>
                        <Box
                          >
                            <Link className="nav_aboutus"
                              to="/about us"
                              onClick={closeMobileMenu}
                                > About us</Link>
                       </Box>
                       <Box
                          >
                          <Link className="nav_community" 
                            to="/community"
                            onClick={closeMobileMenu}
                            >
                            Coummnity
                          </Link>
                       </Box>
                    </Box>

                    <Box className="navbar_right">
                      <Button className="navbar_signin">
                        <Link style={{textDecoration:"none"}} to="/signin"  onClick={closeMobileMenu}>Sign in</Link>
                      </Button>
                      <Button className="navbar_request_a_demo" minHeight='43px' lineHeight='1' cursor="pointer" size="lg" borderRadius="15px" height="2.5rem" backgroundColor='blue'  onClick={closeMobileMenu}>
                        <Link style={{textDecoration:"none", color:'white'}} to="/requestdemo" onClick={closeMobileMenu}>Request a demo</Link>
                      </Button>
                      <Box className="search_box"></Box>
                  </Box>
            </Container>
        </Box>
    )
    }
    export default Navbar;