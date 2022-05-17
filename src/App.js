import './App.css';
import { Col, Container, Row} from 'react-bootstrap';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Course, Courses, Students, Student, Login, NotFound} from './components'
function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Switch>
              <Route exact path = '/'>
                <Login />
              </Route>
              <Route exact path = '/student'>
                <Students />
              </Route>
              <Route exact path = '/course'>
                <Courses />
              </Route>
              <Route exact path = '/course/:id'>
                <Course />
              </Route>
              <Route exact path = '/student/:id'>
                <Student />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
