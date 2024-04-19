import { Col, Container, Nav, NavLink, Row, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-altGray  min-w-full h-[150px]">
          <Col className="mx-5">
            <h1>
              <a href="/" className="text-white">
                {" "}
                Chat Not GPT
              </a>
            </h1>
          </Col>

          <Col>
            <Nav className="flex-row">
              <NavLink href="/" className="text-white">
                How it works
              </NavLink>
              <NavLink href="/" className="text-white">
                About Me
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
