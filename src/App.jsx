import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/navbar.scss';
import Summeries from './pages/Summeries';
import BookMarks from './pages/BookMarks';
import ChatApp from './pages/ChatApp';
import Navbar from './components/Navbar';
import SummeryDataContextProvider from './context/SummeryCardContext';
import RequestParameterContextProvider from './context/RequestParameterContext';
import DownloadPDFContextProvider from './context/DownloadPDFContext';
const App = () => {
  return (
    <div className=" h-screen w-screen bg-C_GreyShades ">
      <SummeryDataContextProvider>
        <RequestParameterContextProvider>
          <DownloadPDFContextProvider>
            <BrowserRouter>
              <div className="h-[91%] overflow-y-scroll ">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/summeries" element={<Summeries />} />
                  <Route path="/bookmarks" element={<BookMarks />} />
                  <Route path="/chatapp" element={<ChatApp />} />
                </Routes>
              </div>
              <div className="fixed bottom-0 w-full">
                <Navbar />
              </div>
            </BrowserRouter>
          </DownloadPDFContextProvider>
        </RequestParameterContextProvider>
      </SummeryDataContextProvider>
    </div>
  );
};
export default App;
