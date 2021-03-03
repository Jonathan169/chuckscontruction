import React from 'react';
import Modal from 'react-bootstrap/Modal'
class images extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            target: {},
            imageList:this.props.list,
        };
    }


    handleClose = e => {
        this.setState({ show: false })
        console.log(this.state,'closing')
    }

    handleShow = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({ show: true, target: e.target })
        console.log(this.state, "opening right away")
        setTimeout(() => { console.log(this.state, " 1 secs after opening"); }, 1000)

    }

    nextPhoto = e => {
        e.preventDefault()
        console.log(this.state)
        if (e.target.id === "left") {
            if (parseInt(this.state.target.id) >= 1) {
                this.setState({
                    target: {
                        src: "/images/" + this.props.list[parseInt(this.state.target.id) - 1],
                        id: parseInt(this.state.target.id) - 1,
                    }
                })
            }
        }
        else if (e.target.id === "right") {
            console.log(this.props.list.length)

            if (parseInt(this.state.target.id) < this.props.list.length -1) {
                this.setState({
                    target: {
                        src: "/images/" + this.props.list[parseInt(this.state.target.id) + 1],
                        id: parseInt(this.state.target.id) + 1,
                    }
                })
            }
        }
        console.log(this.state, "after next button")
        setTimeout(() => { console.log(this.state, " 1 secs after next button"); }, 1000)
    }

    render() {

        return (
            <div id="gallery">
                <div className="flex-box">
                    {this.props.list.map((item, index) => {
                        return <div className="m-auto"><img src={"/images/" + item} key={index} id={index}
                            onClick={this.handleShow} alt="gallery item" /></div>
                        })
                    }
                    <Modal show={this.state.show} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body className="w-auto d-flex">
                            <div className="">
                                <img src={process.env.PUBLIC_URL + "/assets/images/arrow-circle-left-solid.svg"}
                                    className="svg2 " style={{ left: '3.5%' }} id="left" alt="icon" onClick={ this.nextPhoto } />
                            </div>

                            <img src={this.state.target.src} key={this.state.target.id}
                                id={this.state.target.id} className="gallery-img-lg" alt="gallery item" />

                            <div className="">
                                <img src={process.env.PUBLIC_URL + "/assets/images/arrow-circle-right-solid.svg"}
                                    className="svg2 " style={{ right: '3.5%' }} id="right" alt="icon" onClick={this.nextPhoto}/>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <button className="btn bg-black mx-auto mt-4 white-font d-block"
                    data-load="10" onClick={this.props.handleClick}>{ this.props.add? "Load More":"Show Less" }</button>

            </div>)
    }
}

export default images;