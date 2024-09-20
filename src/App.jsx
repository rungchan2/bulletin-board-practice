// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import CreatePost from './components/CreatePost';
import Post from './components/Post';

const AppContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;