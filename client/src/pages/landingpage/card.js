import React from 'react'

class Cards extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="card mb-3 border-0">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{this.props.title}</h3>
                            <p className="card-text font-weight-bold px-4">{this.props.paragraph}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={process.env.PUBLIC_URL+'/images/'+ this.props.imageName} className="card-img" alt="inspection"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;