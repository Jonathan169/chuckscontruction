import React, {Component} from 'react';
import Form from '../inspectionForm';
import Carousel from '../carousel';
import Navs from "../Navs";

class landingPage extends Component{
    state={
        
    }
    

    render(){
        return (
            <div className='cont'>
                <Navs/>
                <div className='mainCont'>
                    <Carousel/>
                    
                    <Form/>
                    <div className="push"></div>
                </div>
                <footer className="footer"></footer>
            </div>
        )
    }
}


export default landingPage;