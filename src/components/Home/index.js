import React from 'react';
import { Row, Col, Popover } from 'antd';
import { FaFacebookSquare, FaWhatsapp, FaInstagram } from "react-icons/fa";

import 'antd/dist/antd.css'; 

import main from '../../images/main2.jpeg';

export default function Home() {

  const Whats = (
    <div>
      <h3 style={{fontWeight: 'bold'}}>Sensei Luciano Jorge Holler</h3>
      <h4>+55 44 8812-9343</h4>
    </div>
  );

  const Insta = (
    <div>
      <h4>kaizenautodefesa</h4>
    </div>
  );

  const Face = (
    <div>
      <h4>Kaizen Núcleo de Autodefesa</h4>
    </div>
  );

  return (
    <>
        <Row style={{overflowY: 'hidden'}}>
            <Col span={12}>
                <img src={main} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Col>
            <Col span={12} style={{paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%'}}>
                <h1 style={{fontWeight: 'bold', color: 'grey'}}>Bem-vindo(a).</h1>
                <h2 style={{fontWeight: 'bold', color: 'grey', marginTop: '10%'}}>ACOMPANHE NOSSO TRABALHO NAS NOSSAS REDES SOCIAIS. FIQUE À VONTADE PARA NOS SEGUIR.</h2>
                <div style={{flexDirection: 'row'}}>
                  <Popover title='Nosso Número' content={Whats}>
                    <FaWhatsapp size={50} color='#bd1918'/>
                  </Popover>
                  <Popover title='Nosso Instagram' content={Insta}>
                    <FaInstagram size={50} style={{marginLeft: '3%', cursor: 'pointer'}} color='#bd1918' onClick={() => document.location.href = 'https://www.instagram.com/kaizenautodefesa/?hl=pt-br'}/>
                  </Popover>
                  <Popover title='Nosso Facebook' content={Face}>
                    <FaFacebookSquare size={50} style={{marginLeft: '3%', cursor: 'pointer'}} color='#bd1918' onClick={() => document.location.href = 'https://www.facebook.com/pages/Kaizen-N%C3%BAcleo-De-Autodefesa/101970951338399'}/>
                  </Popover>
                </div>
            </Col>
        </Row>
    </>
  );
}
