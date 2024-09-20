// src/components/MainPage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



export default function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend
    // This is a placeholder. You'll need to implement the actual API call.
    const fetchPosts = async () => {
      // const response = await fetch('/api/posts');
      // const data = await response.json();
      // setPosts(data);
      
      // Placeholder data
      setPosts([
        { id: 1, title: 'First Post', content: 'This is the first post' },
        { id: 2, title: 'Second Post', content: 'This is the second post' },
      ]);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    // Implement delete functionality
    // This is a placeholder. You'll need to implement the actual API call.
    // await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <MainContainer>
      <h1>Bulletin Board</h1>
      <PostList>
        {posts.map(post => (
          <PostCard key={post.id}>
            <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            </Link>
            <DeleteButton onClick={() => handleDelete(post.id)}>Delete</DeleteButton>
          </PostCard>
        ))}
      </PostList>
      <CreateButton to="/create">Create Post</CreateButton>
    </MainContainer>
  );
}




const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;




  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
`;

const CreateButton = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;