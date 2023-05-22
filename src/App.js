 import React from 'react';
 import { useSelector} from'react-redux';
 import Login from './Views/Pages/Login/login';
 // import   './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
 import Sidebar from './Views/Sidebar/sidebar';
 import Dashboard from './Views/Pages/Dashboard/dashboard';
 import ViewBugPage from './Views/Pages/ViewBugs';
 import CreateBug  from './Views/Components/Bugcreate/bugform';

function  App () {
  const {auth} = useSelector (state=>state)
   return (
     <Router>
     {!auth.LoggedIn ? <Login/> :
      <>
         <Sidebar/>
          <Routes>
             <Route path= "/" exact><Dashboard/></Route> 
              <Route path= "/viewBugs"><ViewBugPage/></Route> 
             <Route path="/create"><div className='page-container'><CreateBug title='Create Bug'/></div></Route> 
            {/* <Route path="/create"><div className='page-container'><CreateBug title='Create Bug'/></div></Route> */}

          </Routes>
    
  </>
  }
    </Router>
  );
}

 export default App;

