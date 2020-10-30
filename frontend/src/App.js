import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { Container, Row } from 'react-bootstrap';
import Login from './pages/Login';
import Profile from './pages/Profile'
import Nav from './components/Nav'
import Assistant from './pages/Assistant';
function App() {
  return (

    <BrowserRouter>
      {/* <Container> */}
      <div className="App">
      <Header/>
      <Nav/>
     <Switch>
       <Route exact path="/">

       </Route>
       <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/assistant">
          <Assistant/>
        </Route>
     </Switch>
      </div>
      {/* </Container> */}
      {/* <Row className="justify-content-md-center footer">
                    <div class="kc-form-footer">
                        <a href="mailto:team@kurabye.ru" class="kc-form-footer__email">team@kurabye.ru</a>
                        <div class="kc-form-footer__copyright">
                            <span id="kc-form-footer__copyrigh-year">2020</span>, Команда Курабье
                        </div>
                        <a href="javascript:void(0);" class="kc-form-footer__link">Администрирование</a>
                    </div>
                </Row> */}
    </BrowserRouter>
   
  );
}

export default App;
