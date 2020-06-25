//named exports >=0
//default export <=1

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Props : comes from above, cannot be changed by the component itself
//State : defined in the component, can be changed by the component that defines it
//localStorage : only works with String data

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// }

// const template = (
//     <div>
//         <h1>Page title</h1>
//         <p>This is my page</p>
//     </div>
// );

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));


  
