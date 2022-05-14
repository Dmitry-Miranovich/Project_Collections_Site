import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import RegistrationField from "./components/routes/registration/RegistrationField";
import LoginField from "./components/routes/login/LoginField";
import UsersPage from "./components/routes/main_page/UsersPage";
import ProfilePage from "./components/routes/profile/ProfilePage";
import SearchPage from "./components/routes/search/SearchPage";
import {useSelector} from "react-redux";


const App = (props) =>{
    const foreignUserId = useSelector(state => state.foreignUserID)

    return (
         <Router>
           <div className="App">
           <Switch>
             <div className={"content"}>
               <Route exact path ={"/"}>
                 <LoginField/>
               </Route>
               <Route path ={"/registration"}>
                 <RegistrationField/>
               </Route>
                 <Route path={"/users"}>
                     <UsersPage/>
                 </Route>
                 <Route path={"/profile/"}>
                     <ProfilePage/>
                 </Route>
                 <Route path={"/search"}>
                     <SearchPage/>
                 </Route>
             </div>
           </Switch>
           </div>
         </Router>

    );
}
export default App;
