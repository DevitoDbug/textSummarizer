import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './styles/navbar.scss';
import Summeries from './pages/Summeries';
import BookMarks from './pages/BookMarks';
import ChatApp from './pages/ChatApp';
import Navbar from './components/Navbar';
import SummeryDataContextProvider from './context/SummeryCardContext';
const App = () => {
  return (
    <div className=" h-screen w-screen bg-C_GreyShades ">
      <SummeryDataContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/summeries" element={<Summeries />} />
            <Route path="/bookmarks" element={<BookMarks />} />
            <Route path="/chatapp" element={<ChatApp />} />
          </Routes>
          <div className="sticky bottom-0">
            <Navbar />
          </div>
        </BrowserRouter>
      </SummeryDataContextProvider>
    </div>
  );
};
export default App;
