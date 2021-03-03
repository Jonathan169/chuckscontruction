import React from 'react';

class ServiceCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card mb-5" id={this.props.id}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={process.env.PUBLIC_URL + "/images/"+this.props.imageName}
                            className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="lead">{this.props.paragraph}</p>
                            <a type="button" className="btn btn-primary" href="/contact">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ServiceCard;