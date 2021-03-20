import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import { FeedBackProvider } from './context/FeedBackContext';
import FeedBack from './component/FeedBack';
import { SocketProvider } from './context/SocketContext';
import CustomizedNavbar from './component/CustomizedNavbar';

function App() {
  return (
    <SocketProvider>
      <FeedBackProvider>
        <Router>
          <CustomizedNavbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/feedback">
              <FeedBack />
            </Route>
          </Switch>
        </Router>
      </FeedBackProvider>
    </SocketProvider>
  );
}

export default App;
