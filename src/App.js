import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ybaza23')
      .then((res) => res.json())
      .then((data) => {
       const res = data.items
       const posts = res.filter(item => item.categories.length > 0) 
       setPosts(res);
       console.log(res)
    })
  }, [])

  return (
    <div style={{width: '100%', background: '#f2f2f2'}}>
      <Navbar/>
      <Element name='home'><Home/></Element>
      <Element name='history'><History/></Element>
      <Element name='partners'><Partners/></Element>
      <Element name='blog'><Blog posts={posts}/></Element>
      <Element name='contact'><Contact/></Element>
    </div>
  );
}

export default App;
