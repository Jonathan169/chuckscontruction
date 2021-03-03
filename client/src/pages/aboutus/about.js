import React, {Component} from 'react';
import Form from '../inspectionForm';
import Carousel from '../carousel';
import Navs from "../Navs";
import Modal from 'react-bootstrap/modal'
class About extends Component{
    state={
        show:true,
    }
    handleClose = e => {
        this.setState({ show: false })
    }

    handleShow = e => {
        e.preventDefault()
        this.setState({ show: true, target: e.target })

    }   

    render(){
        return (
            <div className='cont'>
                <Navs/>
                <div className='mainCont'>
                    <Carousel/>
                    {/* <section>
                        <div className="container py-4 justify-content-center">
                            <div className="row">
                                <div className="col-md-8">
                                    <p className='info'>Scheduled Yet?</p>
                                    <p className='subInfo font-weight-bold'>We guarantee the best strom repair experience making 
                                    your life easier</p>
                                </div>
                                <div className="col-md-4 center-flexbox">
                                    <button className="btn btn-warning btn-lg font-weight-bold">Free Inspection</button>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="bg-dark-grey justify-content-center d-flex">
                        <div className="row container py-2">
                            <div className="col-md-8 white-font">
                                <p className='info'>Our Company</p>
                                    <p className='subInfo'>We are a locally owned business in the twin cities. 
                                    Chucks Construction LLC is a storm restoration company (in Minneapolis and nearby 
                                    communities). We understand how frustrating it is to deal with roof damage after 
                                    a storm. Thankfully we are here to put your mind at ease, when you work with Chucks 
                                    Construction you can expect a full-service restoration specialist to provide you 
                                    with fast and efficient, budget friendly restoration services. Whether you were dealing 
                                    with hail roof damage, wind damage, a leak, or just looking on replacing your roof don’t 
                                    worry more call Chuck’s Construction and we will assist you throughout the whole process.</p>
                                    <p className='h3'>Our Goals</p>
                                    <p className='subInfo'>Our goal is to provide every home and business with top quality 
                                    product and ideal workmanship, guaranteeing excellent results. Because in every single job we 
                                    build customers for life not just a project. Remodeling your most important asset is serious 
                                    business when it comes to roofing repairs after a storm there is no better team to handle the 
                                    job, drawing on years of experience we will prioritize in getting your home or business back in shape.</p>
                                </div>
                            <div className="col-md-4">
                                <img src={process.env.PUBLIC_URL+'/images/stone-house.jpg'} className='images' 
                                style={{width:"100%",marginTop:'3rem'}} alt="hail"/>
                            </div>
                        </div>
                    </section>
                    <Form/>
                    <div className="push"></div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} 
                    backdrop="static" keyboard={false}  >
                  <Modal.Header closeButton>
                    <Modal.Title>Thank You</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p class="lead">Thank you for Reaching out! Someone will Reach out shortly. In the 
                    mean time here is why so many people in the Twin-Cities choose 
                    Chuck’s Construction</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <button class="btn btn-primary" onClick={this.handleClose}>
                      Close
                    </button>
                  </Modal.Footer>
                </Modal>
                <footer className="footer"></footer>
            </div>
        )
    }
}


export default About;