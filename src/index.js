import { render } from 'solid-js/web';
import './index.css';
import home from './home';
import menu from './menu';
import about from './about';
import image from './image';
import * as serviceWorker from './serviceWorker';

render(home, document.getElementById('home'));
render(menu, document.getElementById('menu'));
render(about, document.getElementById('about'));
render(image, document.getElementById('images'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker. register();