import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
import  data  from './data.js'
import Card from './components/Card.js'

function App() {

  const [shoes, setShoes] = useState(data);
  console.log(shoes)

  return (
    <div>
      {/* className 줘서 커스터마이징 가능 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className="container">
        <div className="row">
          {/* <Card shoes={shoes[0]} i={1} />
          <Card shoes={shoes[1]} i={2} />
          <Card shoes={shoes[2]} i={3} /> */}
        {
          shoes.map( (a, i) => {
            return (
              <Card shoes={shoes[i]} i={i} />
            )
          })
        }

        </div>
      </div> 
    </div>
  );
}

export default App;
