import React,{Component} from "react";
import axios from "axios";
import validator from 'email-validator'
const date = {startDate: new Date()}
class inspectionForm extends Component{
    state={
        empty:"",
        show:false,
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(validator.validate(this.state.email)){
            this.setState({show:true})
        axios.post("/formsubmit",this.state )
            .then((res) => {
                console.log(res)
                window.location.assign('/aboutus')
            })
        }else {
            document.getElementById('emailFeedback').classList.add("d-block")
            document.getElementById('validationDefault02').classList.add("is-invalid")
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(this.state)
    }
    render(){
        return (
            <section className="container py-2">
                <div className="row" >
                    <div className="col-sm-8">
                        <p style={{fontWeight:'bold',fontSize:'2rem'}}>Schedule Today!</p>
                        <p style={{fontWeight:'bold'}}>Just fill out the form and one of our contractors will contact you very shortly</p>
                        
                    </div>
                    <div className="col-md-4">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="form-row">
                                <label for="validationDefault01">Name</label>
                                <input onChange={this.handleChange} placeholder="John Smith" name="name" type="text" className="form-control " id="validationDefault01" required />

                                <label for="validationDefault02">Email</label>
                                <input onChange={this.handleChange} placeholder="John.smith@gmail.com" name="email" type="text" for="email" className="form-control" id="validationDefault02" required />
                                <div id="emailFeedback" className="invalid-feedback">Email format invalid.</div>

                                <label for="validationDefault03">City</label>
                                <input onChange={this.handleChange} placeholder="Minneapolis" name="city" type="text" className="form-control" id="validationDefault03" required />

                                <label for="validationDefault04">Phone</label>
                                <input onChange={this.handleChange} placeholder="xxx-xxx-xxxx" name="phone" type="text" className="form-control" id="validationDefault04" required />

                                <label for="validationDefault05">How did you hear about us</label>
                                <input onChange={this.handleChange} placeholder="Google, Facebook, etc..." name="us" type="text" className="form-control" id="validationDefault05" />

                                <label for="validationDefault06">Reason for Reaching Out</label>
                                <textarea onChange={this.handleChange} placeholder="I have a question about ..." name="description" className="form-control" id="validationDefault06" rows='2' required ></textarea>
                                
                                <button type="submit" className="btn btn-primary mx-auto mt-4">Submit</button>
                                
                            </div>
                            {this.state.show? <div class="spinner-border text-primary mx-auto mt-4" role="status">
                                    <span class="sr-only">Loading...</span></div>:""}
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default inspectionForm;