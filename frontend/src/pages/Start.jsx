import React from 'react';
import { Container, Row } from 'react-bootstrap';
function Start() {
  return (
      <div>
    <Container>
    <Row className="justify-content-center">
        <h2>Как стать ИП?</h2>
    </Row>
    <Row className="justify-content-center">
    <ul className="ip-list">
            <li><a href="#1">ШАГ 1. Подача документов на регистрацию ИП </a></li>
            <li><a href="#1">ШАГ 2. Выбор системы налогообложения для ИП</a></li>
            <li><a href="#2">ШАГ 3. Получение компенсации от центра занятости</a></li>
            <li><a href="#3">ШАГ 4. Регистрация ИНН</a></li>
            <li><a href="#4">ШАГ 5. Выбор ОКВЭД для ИП</a></li>
            <li><a href="#5">ШАГ 6. Онлайн-заявление на регистрацию ИП</a></li>
            <li><a href="#6">ШАГ 7. Получение свидетельства о регистрации ИП</a></li>
            <li><a href="#7">Отказ в получении свидетельства о регистрации ИП</a></li>
            <li><a href="#8">Регистрация ИП по временной регистрации</a></li>
        </ul>
    </Row>
    </Container>
    
</div>
  );
}

export default Start;
