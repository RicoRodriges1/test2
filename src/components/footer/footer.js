import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                 <nav>
                     <a href="">Instagram</a>
                     <a href="">Telegram</a>
                     <a href="">Facebook</a>
                     <a href="">Twitter</a>
                     <a href="">Youtube</a>
                 </nav>
                 <div className="logo">
                     <a href=""><img src="/social logos/instagram.png"/></a>
                     <a href=""><img src="/social logos/telegram.png"/></a>
                     <a href=""><img src="/social logos/facebook.png"/></a>
                     <a href=""><img src="/social logos/twitter.png"/></a>
                     <a href=""><img src="/social logos/youtube.png"/></a>
                 </div>
            </div>
        );
    }
}

export default Footer;