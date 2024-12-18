import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound';
import View from './components/View.jsx';
import Login from './components/Login';
import Search from './components/Search';
import PageList from './components/PageList';
import react from './assets/react.svg';

const App = () => {

   const id = 5;
  return (
    <>
    <div>
      <img src={'/vite.svg'}/>
    </div>
    <div>
      <img src={react}/>
    </div>
    <span> <Link to='/'>홈</Link></span>
    <span> <Link to='/add'>회원가입</Link></span>
    <span> <Link to={`/view/${id}`}>회원상세조회</Link></span>
    <span> <Link to={`/login`}>로그인</Link></span>
    <span> <Link to={`/search?keyfield=web&keyword=react`}>검색</Link></span>
    <span> <Link to={`/list`}>페이징</Link></span>

    {/* <button onClick={handleClick}>Home</button> */}

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<Register />} />
    <Route path="/View/:id" element={<View />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/search" element={<Search />} />
    <Route path="/list" element={<PageList />} />
    <Route path="*" element={<NotFound />} />

    </Routes>  
    </> 
  );
}
export default App
