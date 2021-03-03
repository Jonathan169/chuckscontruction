import React from 'react'

class navBar extends React.Component {
    
    render() {
        return (
            <>
                <div id="popup-nav" style={{ display: this.props.show }}>
                    <nav className="">
                        <p className="white-font text-right mr-4 mb-0" style={{ fontSize:"3rem" }}
                            onClick={this.props.changeNavState}> &times;</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a className="nav-link white-font" href="/">Home</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link white-font" href="/about">About Us</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link white-font" href="/gallery">Gallery</a>
                            </li>
                            {/* <li className="nav-group-item">
                                  <a className="nav-link white-font" href="/otherinqueries">Other Inqueries</a>
                            </li> */}
                            <li className="list-group-item">
                                <a className="nav-link white-font" href="/services">Services</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link white-font" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}
export default navBar;
