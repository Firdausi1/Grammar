import React from 'react'

const ContactUs = () => {
    function validateForm() {
        var name =  document.getElementById('name').value;
        if (name == "") {
            document.querySelector('.status').innerHTML = "Name cannot be empty";
            return false;
        }
        var email =  document.getElementById('email').value;
        if (email == "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty";
            return false;
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                document.querySelector('.status').innerHTML = "Email format invalid";
                return false;
            }
        }
        var subject =  document.getElementById('subject').value;
        if (subject == "") {
            document.querySelector('.status').innerHTML = "Subject cannot be empty";
            return false;
        }
        var message =  document.getElementById('message').value;
        if (message == "") {
            document.querySelector('.status').innerHTML = "Message cannot be empty";
            return false;
        }
        document.querySelector('.status').innerHTML = "Sending...";
      };
    

    return (
                
        
                <div id="contact" className="">
        
                    <div className="">
        
                        <div className="container-fluid d-flex align-items-center justify-content-center h-100">
        
                            <div className="row d-flex justify-content-center text-center">
                                <section id="contact" className="mt-5">
                            <div className="mt-5 pt-5">
                                 
                        <h2 className="mb-5 font-weight-bold text-center">Contact
                          <span > us</span></h2>
        
                                  </div>
                        
                        <div className="row">
        
                            <div className="col-lg-6 col-md-12">
                                
                                <form className="p-5 mx-3">
                                    <div className="md-form">
                                         <label for="form3" className="text-left">Your name</label>
                                        <input type="text" id="form3"  className="form-control form-control-sm"/>
                                        
                                    </div>
                                    <div className="md-form"> 
                                        <label for="form2" className="text-left" >Your email</label>
                                        <input type="text" id="form2"  className="form-control form-control-sm"/>
                                    </div>
                                    <div className="md-form"> 
                                         <label for="form34" className="text-left" >Subject</label>
                                        <input type="text" id="form32"  className="form-control form-control-sm"/>
                                    </div>
                                    <div className="md-form">
                                        <label for="form8" className="text-left" >Your message</label>
                                        <textarea type="text" id="form8"  className="md-textarea form-control form-control-sm" rows="4"></textarea>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="btn btn-secondary" onclick="validateForm();">Send <i className="fa fa-paper-plane-o ml-1"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-12">
                              
                              <div id="ladybug" className="mb-5">
                               <img src="https://i.ibb.co/gJF0TvD/Layer-2.png" border="0"/>
                              </div>
                              
                              
                                </div>
                           
                        </div>
                                <div className="row text-center">
        
                                    <div className="col-lg-4 col-md-12 mb-3">
        
                                        <p><i className="fa fa-map fa-1x mr-2 grey-text"></i>Lagos, LG 10012</p>
        
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
        
                                        <p><i className="fa fa-building fa-1x mr-2 grey-text"></i>Mon - Fri, 8:00-22:00</p>
        
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
        
                                        <p><i className="fa fa-phone fa-1x mr-2 grey-text"></i>+ 01 234 567 89</p>
        
                                    </div>
                                    
        
                                </div>
                                
                         
                               </section>
                            </div>
        
                        </div>
        
                    </div>
        
                </div>
        
            
    )
}

export default ContactUs;
