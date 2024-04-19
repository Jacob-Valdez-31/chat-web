import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-altGray flex justify-start"
    >
      <Container className="min-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar.Brand
          href="/"
          className="flex items-start justify-start text-white"
        >
          Chat Not GPT
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-end justify-end bg-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isOpen ? (
            <Nav className="min-w-full flex items-end justify-end">
              <Nav.Link href="#features" className="text-white ">
                How it works
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About Me
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="">
              <Nav.Link href="#features" className=" text-white">
                How it works
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About Me
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
