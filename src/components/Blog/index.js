import React from 'react';
import { List, Avatar } from 'antd';

// import { Container } from './styles';

export default function Blog(props) {
  const posts = props.posts; 

  return (
    <div style={{padding: '5%'}}>
      <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>Blog/Eventos</h1>
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={posts}
        renderItem={item => (
          <List.Item
            style={{width: '100%'}}
            key={item.title}
            extra={
              <a href={item.link}>
                <img
                  width={272}
                  alt="logo"
                  src={item.thumbnail}
                />
              </a>
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.link}>{item.title}</a>}
              description={(
                <div>
                  <h4>{item.author}</h4>
                  <h4>{item.pubDate}</h4>
                  <a href={item.link}><h4 style={{textDecoration: 'underline'}}>Ver Post</h4></a>
                </div>
              )}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
