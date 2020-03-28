import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Latest users list from Random User Api</h2>
                            <div className="footer-social">
                                <ul>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Youtube</a></li>
                                    <li><a href="/">LinkedIn</a></li>
                                </ul>
                            </div>
                            <div className="copyright-text">&copy; All copyright reserved.</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;