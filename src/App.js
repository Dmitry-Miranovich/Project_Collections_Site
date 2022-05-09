import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import RegistrationField from "./components/routes/registration/RegistrationField";
import LoginField from "./components/routes/login/LoginField";
import UsersPage from "./components/routes/main_page/UsersPage";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={apiResponse:""}
  }
  callAPI(){
    fetch("http://localhost:8100/testApi")
        .then(res => res.text())
        .then(res => this.setState({apiResponse:res}))
  }
  componentDidMount() {
    this.callAPI()
  }
  render(){
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
             </div>
           </Switch>
           </div>
         </Router>

    );
  }
}
export default App;
