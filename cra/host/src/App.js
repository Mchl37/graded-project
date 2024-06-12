import React, { useState, useEffect, Suspense } from 'react';
import { fetchPosts } from '../api';
import Title from './Title';

const RemoteButton = React.lazy(() => import('remote/Button'));
const SharedHeader = React.lazy(() => import('shared/Header'));
const SharedFooter = React.lazy(() => import('shared/Footer'));

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPosts(); // Utilisation de la fonction fetchPosts
        setPosts(result.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={appPage}>
      <Suspense fallback="Loading Header">
        <SharedHeader />
      </Suspense>
      <Title text="Host" />
      <Suspense fallback="Loading Button">
        <RemoteButton />
      </Suspense>
      <div style={api}>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      <Suspense fallback="Loading Footer">
        <SharedFooter />
      </Suspense>
    </div>
  );
};

const appPage = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const api = {
  width: '50%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default App;
