import React, {Component} from 'react';
import Form from '../inspectionForm';
import Carousel from '../carousel';
import Navs from "../Navs";
import Cards from "./card"
class landingPage extends Component{
    state={
        
    }
    

    render(){
        return (
            <div className='cont'>
                <Navs/>
                <div className='mainCont'>
                    <Carousel/>
                    <section>
                        <div className="container py-4 justify-content-center">
                            <div className="row">
                                <div className="col-md-8">
                                    <p className='info'>Here for you</p>
                                    <p className='subInfo font-weight-bold'>We guarantee the best strom repair experience making
                                    your life easier</p>
                                </div>
                                <div className="col-md-4 center-flexbox">
                                    <button className="btn btn-warning btn-lg font-weight-bold">Free Inspection</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-dark-grey">
                        <div className="container py-4 justify-content-center">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={process.env.PUBLIC_URL+'/images/hail-damage.jpg'} className='images img-1' alt="hail"/>
                                </div>
                                <div className="col-md-6">
                                <p className='info white-font'>Storm Restoration</p>
                                    <p className='subInfo white-font'>Often times spoting hail damage is very difficult for the untrained eye, they
                                    dont leave there mark sometimes and can lead to thousands of dollars in reapirs done the road</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='bg-light-grey'>
                            <div className="container">
                                <h2 className="text-center display-4">Its as easy as 1, 2, 3!</h2>

                                <Cards title="1) Schedule an inspection"
                                    paragraph="Often times spoting hail damage is very difficult for the untrained eye, they
                                    dont leave there mark sometimes and can lead to thousands of dollars in reapirs done the road"
                                    imageName="roof-inspection.jpg" />
                                <Cards title="2) File a claim"
                                    paragraph="Often times spoting hail damage is very difficult for the untrained eye, they
                                    dont leave there mark sometimes and can lead to thousands of dollars in reapirs done the road"
                                    imageName="client-contractor.jpg" />
                                <Cards title="3) Schedule adjustment"
                                    paragraph="Often times spoting hail damage is very difficult for the untrained eye, they
                                    dont leave there mark sometimes and can lead to thousands of dollars in reapirs done the road"
                                    imageName="adjustment.jpg" />

                            </div>
                        </div>
                    </section>
                    <section className="container pt-4">
                        <div className="text-center">
                            <h3 className="display-4">Our list of services</h3>
                            <div className="flex-box py-4 justify-content-center">
                                <a className="text-decoration-none" href="/services#roofing">
                                    <div className="card">
                                        <img src={ process.env.PUBLIC_URL+"/images/Roofer.jpg" } className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title black-font">Roofing</h5>
                                        </div>
                                    </div>
                                </a>
                                <a className="text-decoration-none" href="/services#siding">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/images/grey-siding.jpg"} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title black-font">Siding</h5>
                                        </div>
                                    </div>
                                </a>
                                <a className="text-decoration-none" href="/services#gutters">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/images/gutters.jpg"} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title black-font">Gutters</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                    <Form/>
                    <div className="push"></div>
                </div>
                <footer className="footer"></footer>
            </div>
        )
    }
}


export default landingPage;