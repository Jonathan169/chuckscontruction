import React,{Component} from "react";
import axios from "axios";
import validator from 'email-validator'
import 'moment-timezone';
const date = {startDate: new Date()}
class inspectionForm extends Component{
    state={
        empty:"",
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(validator.validate(this.state.email)){
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
            <section className="container">
                <div className="row" >
                    <div className="col-sm-8">
                        <p style={{fontWeight:'bold',fontSize:'2rem'}}>Schedule Today!</p>
                        <p style={{fontWeight:'bold'}}>Just fill out the form and one of our contractors will contact you very shortly</p>
                        
                    </div>
                    <div className="col-md-4">
                        <form onSubmit={ this.handleSubmit }>
                            <div class="form-row">
                                <label for="validationDefault01">Name</label>
                                <input onChange={this.handleChange} placeholder="John Smith" name="name" type="text" class="form-control " id="validationDefault01" required />

                                <label for="validationDefault02">Email</label>
                                <input onChange={this.handleChange} placeholder="John.smith@gmail.com" name="email" type="text" for="email" class="form-control" id="validationDefault02" required />
                                <div id="emailFeedback" class="invalid-feedback">Email format invalid.</div>

                                <label for="validationDefault03">City</label>
                                <input onChange={this.handleChange} placeholder="Minneapolis" name="city" type="text" class="form-control" id="validationDefault03" required />

                                <label for="validationDefault04">Phone</label>
                                <input onChange={this.handleChange} placeholder="xxx-xxx-xxxx" name="phone" type="text" class="form-control" id="validationDefault04" required />

                                <label for="validationDefault05">How did you hear about us</label>
                                <input onChange={this.handleChange} placeholder="Google, Facebook, etc..." name="us" type="text" class="form-control" id="validationDefault05" />

                                <label for="validationDefault06">Reason for Reaching Out</label>
                                <textarea onChange={this.handleChange} placeholder="I have a question about ..." name="description" class="form-control" id="validationDefault06" rows='2' required ></textarea>

                                <button type="submit" className="btn btn-primary mx-auto mt-4">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default inspectionForm;

                            {/* <div className="form-group">
                        <label htmlFor="exampleFormControlInput1" style={{fontWeight:'bold'}}>Pick date</label>
                        <div className="form-control" style={{border:'0px'}}>
                            <DatePicker
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                            selected={this.state.dateChosen.startDate}
                            onChange={(e)=>this.handleDatepicker(e, "startDate")}
                            minDate={new Date()}
                        /></div>
                    </div> */}