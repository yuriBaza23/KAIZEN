import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber, Button, Row, Col, Modal } from 'antd';
import { IoIosHeart } from "react-icons/io";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
    };
    
    const validateMessages = {
        required: 'Preencha esse campo!',
        types: {
            email: 'Email não validado!',
        },
    };

    function success() {
        Modal.success({
          content: 'Mensagem enviada! A Kaizen agradece seu contato.',
        });
    }

    function error() {
        Modal.error({
          title: 'Mensagem não enviada!',
          content: 'Preencha todos os campos obrigatórios.',
        });
    }

    const onFinish = values => {
        console.log(values);
    };

  return (
    <div style={{backgroundColor: '#1D1E20', width: '100%', height: '100%', padding: '5%'}}>
        <Row>
            <Col span={12}>
                <h1 style={{fontWeight: 'bold', color: '#f2f2f2'}}>Entre em contato com a Kaizen</h1>
            </Col>
            <Col span={12}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                        <Input placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                        <Input placeholder='Email ou Telefone (Opcional)' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']}>
                        <Input.TextArea placeholder='Mensagem' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Item>
                    <Button type="primary" danger onClick={() => {
                        if(name !== '' && message !== ''){
                            var request = new XMLHttpRequest();
                            request.open('POST', 'https://kaizen-rest-api.herokuapp.com/sendMail');
                            request.send(JSON.stringify({
                                "subject": name,
                                "text": `${email} - ${message}`
                            }));
                            success()
                        } else {
                            error()
                        }
                    }}>Enviar</Button>
                </Form>
            </Col>
        </Row>
        <Row style={{paddingTop: '4%', marginBottom: '-5%'}}>
            <Col span={7}/>
            <Col span={4}>
                <h4 style={{textAlign: 'end', color: '#f2f2f2'}}>Feito com</h4>
            </Col>
            <Col span={0.6} style={{paddingLeft: '0.5%', paddingRight: '0.5%'}}>
                <IoIosHeart color='#bd1918'/>
            </Col>
            <Col span={4}>
                <h4 style={{textAlign: 'start', color: '#f2f2f2'}}>por Yuri Baza</h4>
            </Col>
            <Col span={7}/>
        </Row>
    </div>
  );
}
