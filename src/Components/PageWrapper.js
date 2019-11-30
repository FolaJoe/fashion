import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class PageWrapper extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/">Glory Fashion Design</Link>
                        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/about">About</Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">

        
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Location</h4>
                                <p class="lead mb-0">House #, # Avenue Efab Estate 
                                    <br/>Life Camp , Abuja
                                </p>
                            </div>

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Around the Web</h4>
                                <Link class="btn btn-outline-light btn-social mx-1" to="#">
                                    <i class="fab fa-fw fa-facebook-f"></i>
                                </Link>
                                <Link class="btn btn-outline-light btn-social mx-1" to="#">
                                    <i class="fab fa-fw fa-twitter"></i>
                                </Link>
                                <Link class="btn btn-outline-light btn-social mx-1" to="#">
                                    <i class="fab fa-fw fa-instagram"></i>
                                </Link>
            
                            </div>

        
                            <div class="col-lg-4">
                                <h4 class="text-uppercase mb-4">About Glory Fashion Design</h4>
                                <p class="lead mb-0">Traditional Wears, English Wears, Italian Wears for Females
                                    <br/><span>call Gloria: 09090887100</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </footer>
                <section class="copyright py-4 text-center text-white">
                    <div class="container">
                        <small>Copyright &copy; folajoe 2019</small>
                    </div>
                </section>
                <div class="scroll-to-top d-lg-none position-fixed ">
                    <Link class="js-scroll-trigger d-block text-center text-white rounded" to="/">
                        <i class="fa fa-chevron-up"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PageWrapper;