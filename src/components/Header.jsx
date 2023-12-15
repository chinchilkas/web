import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import styles from '../styles/Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand={"lg"} className={styles.header}>
            <Container fluid className="mx-2">
                <Navbar.Brand
                    and href="#" className={styles.logo}>
                    <img
                        src="/images/logo_4.png"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" activeKey="/">
                        <Nav.Link className={styles.navItem}>
                            <Link className={styles.navItem} to={"/"}>Home</Link>
                        </Nav.Link>
                        <Nav.Link className={styles.navItem}>
                            <Link className={styles.navItem} to={"/all_pets"}>PetList</Link>
                        </Nav.Link>
                        <Nav.Link className={styles.navItem}>
                            <Link className={styles.navItem} to={"/cart"}>Cart</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" className={styles.navItem}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;