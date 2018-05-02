import san from 'san';
import './style.css';
import {router} from 'san-router';
//组件
import App from './Components/App.san';
router.add({
    rule:'/',
    Component:App,
    target:'#app'
});
router.start();