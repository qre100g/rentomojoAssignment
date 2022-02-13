import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import PostPage from './Components/PostPage';
import Sample from './Components/Sample';
import Post from './Components/Post';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>  
        <div>
          <Routes>
            <Route path='/' element = {<HomePage/>} />
            <Route path= '/postspage' element = {<PostPage/>} />
            <Route path= '/sample' element = {<Sample />} />
            <Route path= '/postdetails' element = {<Post/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
