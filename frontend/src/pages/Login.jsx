import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
function Login(props) {
    function login() {
        props.history.push("/profile");
    }
  return (
    <div className="login-page">
        <div className="login-window">
            <div className="login-variant left">
                <Row className="justify-content-center h2-label">
                    <h2>
                    Вход в личный кабинет
                        </h2>
                </Row>
                <Row className="input-row">
                    <input type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите логин"/>
                </Row>
                <Row className="input-row">
                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите пароль"/>
                </Row>
                <Row className="input-row">
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Чужой компьютер</label>
                    </div>
                </Row>
                <Row className="input-row">
                    <Button className="login-btn" onClick={login}>Войти</Button>
                </Row>
                <Row>
                
                </Row>
            </div>
            <div className="login-variant right">
            <Row className="justify-content-center h2-label">
                    <h2>
                    Вход через сервисы
                        </h2>
                </Row>
                <div className="another-variant">
                    <div className="gosuslugi">

                    </div>
                   
                </div>
                <div className="another-variant">
                    <div className="sber">

                    </div>
                   
                </div>
                <div className="another-variant-m">
                    <div className="mosru">

                    </div>
                   
                </div>
                <Row className="justify-content-md-center">
                <div className="small-icon yandex">
                    
                    </div>
                    <div className="small-icon google">
                        
                        </div>
                        <div className="small-icon mail">
                        
                        </div>
                        <div className="small-icon facebook">
                        
                        </div>
                        <div className="small-icon vk">
                        
                        </div>
                        <div className="small-icon ok">
                        
                        </div>
                </Row>
               
            </div>
            
        </div>
    </div>
  );
}

export default withRouter(Login);
