import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class About extends Component {
    render(){ 
        return(
            <section class="page-section masthead bg-primary text-white mb-0" id="about" >
                <div className="container  d-flex align-items-center flex-column"style = {{backgroundColor:'#85144b', width:"100%", paddingTop:"30px"}} >
                    <h2 className="page-section-heading text-center text-uppercase" style = {{padding:"20px"}}>About</h2>
                    <div className="row divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto">
                                <p className="lead">Fashion Designer,Specialized in Africa Styles. For the classics Ladies and Women Out there. We are here for you. Let's make that beautiful design for you</p>
                            </div>
                            <div className="col-lg-4 mr-auto">
                                <p className="lead">We offer excellent service at an affordable price. We are professionals Good at what we do. Call us today,We deliver as promise. A trial will convince you</p>
                            </div>
                        </div>
                            <div class = "row">
                                
                                <div className="col-lg-4 ml-auto">
                                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                                        <Link className="btn btn-outline-light btn-social mx-1" to="#">
                                            <i className="fab fa-fw fa-facebook-f"></i>
                                        </Link>
                                        <Link className="btn btn-outline-light btn-social mx-1" to="#">
                                            <i className="fab fa-fw fa-twitter"></i>
                                        </Link>
                                        <Link className="btn btn-outline-light btn-social mx-1" to="#">
                                            <i className="fab fa-fw fa-instagram"></i>
                                        </Link>
                
                                </div>
                                
                                <div className="col-lg-4 mr-auto">
                                    <h4 className="text-uppercase mb-4">Location</h4>
                                    <p className="lead mb-0">House 56,3rd Avenue,Efab Estate 
                                        <br/>Life Camp,Abuja
                                    </p>
                                </div> .
                            </div>
                                
                        </div>

                    </div>
                    

                </section>
        )
    }
}

export default About
