import { useState, useEffect } from 'react';
import Post from './components/Post';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PostForm from './components/PostForm';
import SearchForm from './components/SearchForm';
import { fetchPosts, registerUser, loginUser, createPost, fetchCurrentUser } from './services/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setToken(token);
      const loadCurrentUser = async () => {
        const user = await fetchCurrentUser(token); // make sure `fetchCurrentUser` function exists in your api services
        setCurrentUser(user);
      };
      loadCurrentUser();
    }
  }, []);

  const handleRegister = async (credentials) => {
    const data = await registerUser(credentials);
    if (data.token) {
      // handle successful registration by loggin in the user and storing the token
    } else {
      // handle registration errors by displaying an error message
    }
  };

  const handleLogin = async (credentials) => {
    const data = await loginUser(credentials);
    if (data.token) {
      //handle successful login by storing the token
    } else {
      //handle login errors
    }
  };

  const handlePostSubmit = async (post) => {
    const newPost = await createPost(post, token);
    if (newPost  && newPost._id) {
      // handle successful post creation adding the new post to a list of posts
      setPosts(prevPosts => [newPost, ...prevPosts]);
    } else {
      //handle post creation errors by displaying an error message
    }
  };

  const handlePostDelete = (postId) => {
    setPosts(prevPosts => prevPosts.filter(p => p._id !== postId));
  };

  function handleSearch(input) {
    setSearchTerm(input);
  }

  const filteredPosts = posts.filter(post => post.title.includes(searchTerm));
  
  return (
    <div className="App">

      {currentUser ? (
                <h1>Welcome, {currentUser.name}!</h1>
            ) : (
                <h1>Please log in.</h1>
            )}

      <SearchForm onSearch={handleSearch} />

      {filteredPosts.map(post => (
        <Post key={post._id} post={post} token={token} onDelete={handlePostDelete} />
      ))}

      <Register onRegister={handleRegister} />
      <Login onLogin={handleLogin} />
      
      {/* Render the PostForm conditionally based on the user's logged-in state */}
      { token && <PostForm onPostSubmit={handlePostSubmit} /> }
    </div>
  );
}

export default App;