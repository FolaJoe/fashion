import React,{Component} from 'react';
import fashion from '../asset/img/fashion.svg'

class Header extends Component {
    render(){
        return(
            <header className="masthead text-white text-center">
                <div className="container d-flex align-items-center flex-column " style = {{backgroundColor:'#85144b', width:"100%", paddingTop:"30px"}}>
                    <img className="masthead-avatar mb-5" src={fashion} alt="fashion"/>
                    <h1 className="masthead-heading text-uppercase mb-0">Glory Fashion Designs</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Design - Sewing- Fashion</p>
                </div>
            </header>

        );
    }

}

export default Header;
