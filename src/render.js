import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



let ReRenderDom = (state, Add_button__state) => {
ReactDOM.render( <App  state={state}  Add_button__state={Add_button__state}/>   , document.getElementById('root'));
};
 
export default ReRenderDom;
