import { Container, Navbar } from "react-bootstrap";

export default function TopMenu(){
  return (
    <Navbar bg="light" expand="lg" style={{marginBottom: 20}}>
      <Container>
        <Navbar.Brand href="/">Camunda History Viewer</Navbar.Brand>
      </Container>
    </Navbar>
  )


}