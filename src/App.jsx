import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import Layout from "./components/Layout";
import CreatePostPage from "./pages/CreatePostPage";
import DeletePostPage from "./pages/DeletePostPage";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="create" element={<CreatePostPage />} />
          <Route path="delete" element={<DeletePostPage />} />

          <Route path="*" element={<h3>Не найдено</h3>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
