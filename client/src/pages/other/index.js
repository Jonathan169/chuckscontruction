import React from 'react';
import Navs from "../Navs";
import Carousel from '../carousel';
import Form from '../inspectionForm';
class Other extends React.Component{
    state={}

    render(){
        return (
            <main className='cont'>
                <Navs/>
                <div className='mainCont'>
                    <Carousel />
                    <section>
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
                    </section>
                    <section className="bg-dark-grey">
                        <div className="container">
                            
                            
                        </div>
                    </section>
                    <div className='steps1'>
                        <div className='steps' style={{backgroundColor:'rgb(48, 59, 59)'}}>
                            <div className="stp">
                                <p className='subInfo label'>Landscaping</p>
                                <img className='images' style={{width:'15rem'}} src={process.env.PUBLIC_URL+'/assets/images/summer.jpg'} />
                                <p className='subInfo'>Summer time is upon us and that means tending to your garden and mowing your
                                 lawn. but many people do not have the time or energy to do this. thats where we come in well tend to </p>                                
                            </div>
                            <div className="stp">
                                <p className='subInfo label'>Leaf Removal</p>
                                <img className='images' style={{width:'15rem'}} src={process.env.PUBLIC_URL+'/assets/images/summer.jpg'} />
                                <p className='subInfo'>Summer time is upon us and that means tending to your garden and mowing your
                                 lawn. but many people do not have the time or energy to do this. thats where we come in well tend to </p>                                
                            </div>
                            <div className="stp">
                                <p className='subInfo label'>Snow Plowing</p>
                                <img className='images' style={{width:'15rem'}} src={process.env.PUBLIC_URL+'/assets/images/summer.jpg'} />
                                <p className='subInfo'>Summer time is upon us and that means tending to your garden and mowing your
                                 lawn. but many people do not have the time or energy to do this. thats where we come in well tend to </p>                                
                            </div>
                        </div>
                        <Form/>
                    </div>
                    <div className="push"></div>
                </div>
                <footer className="footer"></footer>
            </main>
        )
    }

}
export default Other;