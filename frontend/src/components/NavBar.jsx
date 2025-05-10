import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return <Navbar bg="dark" className="mb-4" style={{height: "3.75rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none">Мессенджер</Link>
            </h2>
            <span className="text-info">Имя</span>
            <Nav>
                <Stack direction="horizontal" gap={3}>
                    <Link to="/login" className="link-light text-decoration-none">Войти</Link>
                    <Link to="/register" className="link-light text-decoration-none">Зарегистрироваться</Link>
                </Stack>
            </Nav>
        </Container>
    </Navbar>;
}

export default NavBar;