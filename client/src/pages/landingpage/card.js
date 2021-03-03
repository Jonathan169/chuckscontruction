import React from 'react'

class Cards extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div class="card mb-3 border-0">
                <div class="row no-gutters">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">{this.props.title}</h3>
                            <p class="card-text font-weight-bold px-4">{this.props.paragraph}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src={process.env.PUBLIC_URL+'/images/'+ this.props.imageName} class="card-img" alt="inspection"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;