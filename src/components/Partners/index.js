import React from 'react';
import { Row, Col, Button, Popover } from 'antd';

import CliniSport from '../../images/CliniSport.png';
import Kadu from '../../images/Kadu.png';

export default function Partners() {

    const kaduInfo = (
        <div>
            <h3 style={{fontWeight: 'bold'}}>Empresário e Fisioterapeuta</h3>
            <h4>CREFITO 183195-F</h4>
            <br/>
            <ul>
                <li>Especialista em terapia manual</li>
                <li>Formado em fisioterapia pela UniCesumar em 2006</li>
                <li>Especialista em terapia manual e postural pela UniCesumar em 2014</li>
            </ul>
            <h4>Procedimentos:</h4>
            <ul>
                <li>Prevenção e tratamento de lesões ortopédicas e esportivas</li>
                <li>Pré e pós operatório de cerurgias plásticas</li>
            </ul>
            <br/>
            <h3 style={{fontWeight: 'bold'}}>Academia CliniSport</h3>
            <h5>Avenida Capitão Indio Bandeira, 2459 - Campo Mourão/PR</h5>
            <h5 style={{fontWeight: 'bold'}}>44 3810-4500 | 44 99840-4500</h5>
            <br/>
            <h3 style={{fontWeight: 'bold'}}>Complexo de Especialidades Dr. Dangelo Viel</h3>
            <h5>Rua Francisco Ferreira Alburquerque, 1780 - Campo Mourão/PR</h5>
            <h5 style={{fontWeight: 'bold'}}>44 3017-0027</h5>
        </div>
    );

  return (
    <div style={{padding: '5%'}}>
        <h1 style={{fontWeight: 'bold', color: 'black', alignSelf: 'center', textAlign: 'center'}}>PARCERIAS</h1>
        <h3 style={{color: 'grey', alignSelf: 'center', textAlign: 'center'}}>Conheça nossos parceiros.<br/>Entre em contato para mais informações.</h3>
        <Row style={{marginTop: '2%'}}>
            <Col span={8}>
                <img src={Kadu} style={{borderRadius: '100%', width: '45%', height: '50%', marginLeft: '28%', objectFit: 'cover'}}/>
                <h2 style={{fontWeight: 'bold', color: 'grey', alignSelf: 'center', textAlign: 'center', marginTop: '2%'}}>Kadu Aldrigue</h2>
                <h4 style={{padding: '5%', color: 'grey', alignSelf: 'center', textAlign: 'center', marginTop: '2%'}}>Centro de preparação e reabilitção física, apresentando novos conceitos para Campo Mourão e Região.</h4>
                <Popover content={kaduInfo} title='Carlos Eduardo Nickening Aldrigue'>
                    <Button type="primary" danger style={{marginLeft: '36%'}}>Saiba Mais</Button>
                </Popover>
            </Col>
            <Col span={8}>
                <img src={CliniSport} style={{borderRadius: '100%', width: '45%', height: '50%', marginLeft: '28%', objectFit: 'cover'}}/>
                <h2 style={{fontWeight: 'bold', color: 'grey', alignSelf: 'center', textAlign: 'center', marginTop: '2%'}}>CliniSport</h2>
                <h4 style={{padding: '5%', color: 'grey', alignSelf: 'center', textAlign: 'center', marginTop: '2%'}}>Centro de preparação e reabilitção física, apresentando novos conceitos para Campo Mourão e Região.</h4>
                <Button type="primary" danger style={{marginLeft: '36%'}} onClick={() => document.location.href = 'https://pt-br.facebook.com/clinisportcampomourao/'}>Saiba Mais</Button>
            </Col>
            <Col span={8}>
                <div style={{borderRadius: '100%', width: '45%', height: '50%', marginLeft: '28%', backgroundColor: 'grey'}}/>
                <h2 style={{fontWeight: 'bold', color: 'grey', alignSelf: 'center', textAlign: 'center', marginTop: '2%'}}>Em Breve</h2>
                <h4 style={{padding: '5%', color: 'grey', alignSelf: 'center', textAlign: 'center', marginTop: '2%'}}>Quer ser um parceiro Kaizen? Entre em contato com a gente, sua logo pode estar aqui!</h4>
                <Button type="primary" danger style={{marginLeft: '36%'}} disabled>Saiba Mais</Button>
            </Col>
        </Row>
    </div>
  );
}
