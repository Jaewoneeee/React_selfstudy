import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
import  data  from './data.js'
import Card from './components/Card.js'
import Detail from './components/Detail.js'
import About from './components/About.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom' 

function App() {

  const [shoes, setShoes] = useState(data);
  console.log(shoes)

  const navigate = useNavigate();

  return (
    <div>


      {/* className 줘서 커스터마이징 가능 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to = "/">홈</Link>
      <Link to = "/detail">상세페이지</Link>
       */}

      <Routes>
        <Route path="/" element = {
        <>
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
        </>} />
        {/* <Route path="/detail" element={ <Detail shoes={shoes}/>} /> */}
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/>} />

        <Route path="/about" element={ <About />}>
          <Route path='member' element={<div>멤버</div>}/>
          <Route path='location' element={<div>위치</div>}/>
        </Route>
        <Route path="/event" element={ <Event />}>
          <Route path='one' element={<div>첫 주문시 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>

    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
