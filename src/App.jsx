import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/navbar.scss';
import Summeries from './pages/Summeries';
import BookMarks from './pages/BookMarks';
import ChatApp from './pages/ChatApp';
import Navbar from './components/Navbar';
import SummeryDataContextProvider from './context/SummeryCardContext';
import RequestParameterContextProvider from './context/RequestParameterContext';
const App = () => {
  return (
    <div className=" h-screen w-screen bg-C_GreyShades ">
      <SummeryDataContextProvider>
        <RequestParameterContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/summeries" element={<Summeries />} />
              <Route path="/bookmarks" element={<BookMarks />} />
              <Route path="/chatapp" element={<ChatApp />} />
            </Routes>
            <div className="sticky bottom-0">
              <Navbar />
            </div>
          </BrowserRouter>
        </RequestParameterContextProvider>
      </SummeryDataContextProvider>
    </div>
  );
};
export default App;
