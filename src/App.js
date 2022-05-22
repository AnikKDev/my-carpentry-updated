import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/SignUp';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import MyPortfolio from './pages/MyPortfolio';
import ToolDetail from './pages/ToolDetail/ToolDetail';
import Header from './SharedPages/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tool/:id" element={<ToolDetail></ToolDetail>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
