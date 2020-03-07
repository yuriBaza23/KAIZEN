import React from 'react';
import { Row, Col, Button } from 'antd';

import 'antd/dist/antd.css'; 

import history from '../../images/history.jpeg';

export default function History() {
  return (
    <>
        <Row >
            <Col span={8} style={{padding: '5%'}}>
                <h1 style={{fontWeight: 'bold', color: 'black'}}>História</h1>
                <h4 style={{color: 'grey', marginTop: '3%'}}>ACOMPANHE NOSSO TRABALHO NAS NOSSAS REDES SOCIAIS. FIQUE À VONTADE PARA NOS SEGUIR.</h4>
            </Col>
            <Col span={16}>
                <img src={history} style={{width: '100%', height: '100%'}}/>
            </Col>
        </Row>
    </>
  );
}
