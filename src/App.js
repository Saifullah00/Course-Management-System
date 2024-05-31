import { ToastContainer} from 'react-toastify';
import {Col, Container, Row} from 'reactstrap'
import Header from './components/Header'
import AllCourses from './components/AllCourses'
import AddCourse from './components/AddCourse'
import Home from './components/Home'
import Menu from './components/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 


function App() {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menu/>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/add-course' element={<AddCourse/>}/>
                <Route path='/view-courses' element={<AllCourses/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;