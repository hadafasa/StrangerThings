import { useState, useEffect } from 'react';
import { fetchPosts } from './services/api';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      {posts.map(post => <Post key={post._id} post ={post} />)}
    </div>
  );
}

export default App;