import React from 'react';
import { Row, Col, Button } from 'antd';
import kaizen from '../../images/kaizen.jpeg';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import 'antd/dist/antd.css'; 
export default function Navbar(props) {
  return (
    <Row style={{backgroundColor: '#1D1E20', height: 70, alignItems: 'center'}}>
      <Col span={14}>
        <img src={kaizen} style={{width: '10%', marginLeft: '10%', objectFit: 'fill'}}/>
      </Col>
      <Col span={7}>
        <Link activeClass="active" className='home' to='home' spy={true} smooth={true} duration={500}><Button type='link' ghost>Sobre</Button></Link>
        <Link activeClass="active" className='history' to='history' spy={true} smooth={true} duration={500}><Button type='link' ghost>História</Button></Link>
        <Link activeClass="active" className='partners' to='partners' spy={true} smooth={true} duration={500}><Button type='link' ghost>Parceiros</Button></Link>
        <Link activeClass="active" className='blog' to='blog' spy={true} smooth={true} duration={500}><Button type='link' ghost>Blog</Button></Link>
      </Col>
      <Col span={3}>
      <Link activeClass="active" className='contact' to='contact' spy={true} smooth={true} duration={500}><Button type='link' ghost>Contato</Button></Link>
      </Col>
    </Row>
  );
}
