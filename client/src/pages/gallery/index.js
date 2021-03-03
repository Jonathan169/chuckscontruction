import React, {Component} from 'react';
import Carousel from '../carousel';
import axios from 'axios'
import Images from './images'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from '../inspectionForm'
import Navs from '../Navs';
class OurWork extends Component{
    state = {
        images:"",
        imageList: [],
        loadAmount: 20,
        add:true,
        show:false,
    }

    componentDidMount() {
        this.grabImagesFromServer()
    }

    grabImagesFromServer = (images, loadMore) => {
        if (this.state.add) {
            var request = { imageRequest: images || this.state.images, loadAmount: this.state.loadAmount + loadMore || 20 }
        } else {
            var request = { imageRequest: images || this.state.images, loadAmount: this.state.loadAmount - loadMore || 20 }
        }
        axios.post("/gallery/", request)
            .then(res => {
                console.log(res)
                if (loadMore) {

                    if (Number.isInteger(res.data.length % 10) === false) {
                        this.setState({ loadAmount: this.state.loadAmount + loadMore, imageList: res.data, add: false })
                    } else {
                        this.setState({ loadAmount: this.state.loadAmount + loadMore, imageList: res.data, add: true})
                    }
                } else {
                    console.log(res.data.length % 10)
                    if (Number.isInteger(res.data.length % 10) === false) {
                        this.setState({ loadAmount: this.state.loadAmount + loadMore, imageList: res.data, add: false })
                    }
                    this.setState({ imageList: res.data, loadAmount: 20, images: images })
                }
                console.log(this.state)
            })
    }
    handleClick = e => {
        e.preventDefault()
        console.log(e.target.dataset.value)
        this.setState({images:e.target.dataset.value})
        this.grabImagesFromServer(e.target.dataset.value, parseInt(e.target.dataset.load))
    }
    

    render(){
        return (
            <div className='cont'>
                <Navs/>
                <div className='mainCont'>
                    <Carousel/>
                    <div className="text-center container py-4">
                        <h2 className="display-4">Our mission</h2>
                        <p className="lead">We want to make sure your roof if damage recives the care it needs so we send
                            over a trained proffesional to look over your roof, siding, and gutters, who will also help out 
                            with the insurance process to insure the insurance company pays their due and doesnt try to pull a fast one</p>
                    </div>
                    <section className="bg-dark-grey">
                        <div className="container py-4">
                        <p className="font-light-grey display-4 text-center">Here are a few examples</p>
                            <Dropdown>
                              <Dropdown.Toggle variant="primary" className="mb-2" id="dropdown-basic">
                              {this.state.images || "Filter"}
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                              <Dropdown.Item onClick={this.handleClick} data-value="All" >All</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Roofing" >Roofing</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Siding">Siding</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Gutters">Gutters</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <Images list={this.state.imageList} add={ this.state.add } handleClick={ this.handleClick } />
                        </div>
                    </section>
                    
                    <section className="pt-4">
                        <Form/>
                    </section>
                                        
                    <div className="push"></div>
                </div>
                <footer className="footer"></footer>
            </div>
        )
    }
}


export default OurWork;