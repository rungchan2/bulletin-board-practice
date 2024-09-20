// src/components/PostDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

function PostDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch the specific post
    // This is a placeholder. You'll need to implement the actual API call.
    const fetchPost = async () => {
      // const response = await fetch(`/api/posts/${id}`);
      // const data = await response.json();
      // setPost(data);
      
      // Placeholder data
      setPost({ id, title: `Post ${id}`, content: `This is the content of post ${id}` });
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <PostContainer>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </PostContainer>
      <BackButton to="/">Back to Posts</BackButton>
    </div>
  );
}

export default PostDetail;