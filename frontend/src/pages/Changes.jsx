import React from 'react';
import { Container, Row } from 'react-bootstrap';
function Changes() {
  return (
    <div>
        <Container>
        <Row className="justify-content-center">
            <h2>Изменения в законодательстве</h2>
            <div class="article-tile">
                    <h2>Нулевая налоговая ставка для ИП </h2>
                    <p>
                        В 2020 г., как и в текущем, впервые зарегистрированные налогоплательщики для осуществления деятельности в производственной, социальной, научной сферах, в сфере бытовых услуг населению и услуг по предоставлению мест для временного проживания вправе будут применять налоговую ставку в размере 0% со дня их государственной регистрации в качестве индивидуальных предпринимателей непрерывно в течение двух налоговых периодов<sup>6</sup>.
                    </p>
                    <p>
                        Такое налоговое послабление является одной из мер, направленных на развитие предпринимательской деятельности. Оно не исключает возможности применения специальных налоговых режимов, надзорных каникул и других мер поддержки.
                    </p>
                    <hr/>
                    <small>
                        <p>
                    <sup>6</sup> Федеральный закон от 29 декабря 2014 г. № 477-ФЗ «О внесении изменений в часть вторую Налогового кодекса Российской Федерации».
                        </p>
                    </small>
            </div>
            <div class="article-tile">
	<h2>Суммы страховых взносов ИП станут больше </h2>
	<p>
		 Законом предусмотрено увеличение суммы страховых взносов для индивидуальных предпринимателей за себя на пенсионное и медицинское страхование<sup>7</sup>. Базы исчисления страховых взносов предпринимателей ежегодно индексируются с учетом роста средней заработной платы для обеспечения устойчивых источников социальных выплат гражданам.
	</p>
	<p>
		 В 2020 г. взносы ИП на обязательное пенсионное страхование составят 40 874 руб. в год. Если годовой доход предпринимателя превысит 300 тыс. руб., необходимо будет заплатить дополнительно 1% от суммы превышения. Взносы на обязательное медицинское страхование составят 8426 руб.
	</p>
	<hr/>
 <small>
	<p>
 <sup>7</sup> Федеральный закон от 27 ноября 2017 г. № 335-ФЗ «О внесении изменений в части первую и вторую Налогового кодекса Российской Федерации и отдельные законодательные акты Российской Федерации».
	</p>
 </small>
</div>
        </Row>
        </Container>
        
    </div>
  );
}

export default Changes;
