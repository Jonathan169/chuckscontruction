import React from 'react';
import Navbar2 from './navbar2'

class Navbar extends React.Component{
    state = {
        show:"none",
        // position:"sticky"
    }

    changeNavState = (e) => {
        e.preventDefault();
        if (this.state.show === "none") {
            this.setState({ show: "block" })
        } else {
            this.setState({ show: "none" })
        }
        setTimeout(() => { console.log(this.state) })
    }
    // scrollEffect = (e) =>{
    //     e.preventDefault();
    //     window.onscroll=function(){
    //         if(window.pageYOffset > 100){
    //           console.log('change')
    //           this.setState({position:"fixed"})
    //         }
    //         else{
    //           console.log('revert')
    //           this.setState({position:"sticky"})
    //         }
    //       }
    // }
    render(){
        return(
            <header className="sticky-nav" style={{position:this.state.position}} >
                <Navbar2 show={this.state.show} changeNavState={this.changeNavState} />
                
                    <nav className="center-flexbox">
                        <div className="item1">
                            <a href="/"><img className="logo" alt="logo"
                                src={process.env.PUBLIC_URL + '/chucks-logo.svg'} /></a>
                        </div>
                        <div className="phone">
                            <p style={{ fontSize: "1.5rem" }} className="lead mb-0 text-center">
                                Call Us At &nbsp;
                            </p>
                            <a href="tel:(651) 329-7982" style={{ fontSize: "1.5rem" }} className="text-decoration-none font-yellow">(651) 329-7982</a>
                        </div>
                        <div id="hamburger" className="m-3 ml-auto">
                            <img className="svg3" alt="hamburger" onClick={this.changeNavState }
                                src={process.env.PUBLIC_URL + '/images/hamburger.svg'} />
                        </div>
                    </nav>
                    <nav className="flex-box bg-dark-grey" id="nav2">                    
                        <ul className="nav justify-content-center w-100" id="nav2-list">
                            <li className="nav-item">
                                  <a className="nav-link white-font mt-2" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link white-font mt-2" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                  <a className="nav-link white-font mt-2" href="/gallery">Gallery</a>
                            </li>                            
                            <li className="nav-item">
                                  <a className="nav-link white-font mt-2" href="/services">Services</a>
                            </li>
                            {/* <li className="nav-item">
                                  <a className="nav-link white-font mt-2" href="/otherinqueries">Other Inqueries</a>
                            </li> */}
                            <div className="nav2Schedule">
                                <a className='linkstyle' href='/contact'><p>Schedule Today</p></a>
                            </div>                          
                        </ul>
                    </nav>
            </header>
        )
    }
}
export default Navbar;