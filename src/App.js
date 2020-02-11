import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Page-layout/0_Navbar/Navbar';
import Style from './App.module.css';
import Page_Body from './Components/Page-layout/1_Page-body/Page_Body';
import Dialogs from './Components/Page-layout/3_Dialogs/Dialogs';
import Friends from './Components/Page-layout/2_Friends/Friends';
import Communities from './Components/Page-layout/4_Communities/Communities';
import Forum from './Components/Page-layout/5_Forum/Forum';
import Settings from './Components/Page-layout/6_Settings/Settings';

function App(props) {

  return (
    <BrowserRouter>
    <div className="App">
     <Header />
     <div className={Style.Page_body}>
     <Navbar />
     <div className={Style.Page_Body_page}>
       <Route path="/Page_Body"
        render={ () => <Page_Body state={props.state.walls_posts}  Add_button__state={props.Add_button__state}/>} />
       <Route path="/Friends" component={Friends}/>
       <Route path="/dialogs"
        render={ () => <Dialogs  state={props.state.message_text} />} />
        <Route path="/Communities" component={Communities}/>
       <Route path="/Forum" component={Forum}/>
       <Route path="/Settings" component={Settings}/>
     </div>
     </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
