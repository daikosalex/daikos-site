import React from "react";
import { useHistory } from "react-router-dom";
import RectangleButton from "../rectangle-button/rectangle-button";
import './header.css';


const Header = () => {

    const history = useHistory();


    const onRedirectToHome = () => {
        history.push('/');
    };

    const redirectToKuklofories = () => {
        history.push('/kuklofories');
    };

    const redirectToEmfaniseis = () => {
        history.push('/emfaniseis');
    };

    const redirectToBiografiko = () => {
        history.push('/biografiko');
    };

    return (

        <div className="my-page-area">
            
            <div className="my-page-header">

                <div className="header-title">
                    <img src="/images/title.png" alt="" />
                </div>

                <div className="header-buttons">

                    <RectangleButton buttonTitle="Αρχική σελίδα" onRedirect={onRedirectToHome} />
                    <RectangleButton buttonTitle="Κυκλοφορίες" onRedirect={redirectToKuklofories}/>
                    <RectangleButton buttonTitle="Βιογραφικό" onRedirect={redirectToBiografiko}/>
                    <RectangleButton buttonTitle="Εμφανίσεις" onRedirect={redirectToEmfaniseis}/>
                
                </div>

            </div>    

           

        </div>      
    )
}

export default Header;
