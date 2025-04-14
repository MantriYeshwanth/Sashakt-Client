import React from 'react';
import AH from "./buttonnss/AH";

const Helpline = () => {
    const containerStyle = {
        height: "100vh", // Adjust as needed
        display: 'flex',  // Added display: flex here
        flexDirection: 'column',  // Added flexDirection: column here
        alignItems: 'center',  // Added alignItems: center here
        marginTop: '150px',
    };

    const imageContainerStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -3,
    };

    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    const contentContainerStyle = {
        position: "absolute",
        bottom: "350px",  // Adjust as needed
        left: "15px",
        right: 0,
        zIndex: 2,
    };

    const columnStyle1 = {
        margin: '25px',
        padding: '9px 50px',
        border: '1px solid #ccc',
        borderRadius: '13px',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    };
    return (
        <>
            <div style={containerStyle}>
                <div style={imageContainerStyle}>
                    <img src="/images/1098.jpg" alt="Your Image" style={imgStyle} />
                </div>
                <div style={contentContainerStyle}>
                    <div style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', textAlign: 'center' }}>
                        <a href="tel:1098" style={{textDecoration: 'none'}}>
                            <AH buttonText= "Tap to Connect in Emergency!"/>
                        </a>
                    </div>
                </div>
                <div style={{display: 'flex', }}>
                  <div style={{ ...columnStyle1, marginRight: '460px' }}>                       
                    <h4>Counselling & Social Support</h4>
                    <p>1800 121 2830</p>
                  </div>

                  <div style={columnStyle1 }>     
                    <h4>Filing a Complaint</h4>
                    <p>https://ncpcr.gov.in/pocso/</p>
                  </div>

                 </div> 
                <div style={{display: 'flex', }}>
                <div style={columnStyle1}>
                    <h4>Activists & Associations</h4>
                    <p>Kailash Satyarthi: contact@kailashsatyarthi.net</p>
                    <p>Bachpan Bachao Andolan: 1800 102 7222</p>
                  </div>
                  <div style={columnStyle1}>
                    <h4>General Queries</h4>
                    <p>Childline: dial1098@childlineindia.org.in</p>
                    <p></p>
                  </div>
                  <div style={columnStyle1}>
                    <h4>Helpline</h4>
                    <p>Pratham(Every Child in School): 01126716083</p>
                    <p>Kailash Satyrthi: 011 – 47511111</p>
                  </div>

                  
                </div>
            </div>
        </>
    );
}

export default Helpline;

/*
                    <div style={columnStyle2}>
                        <h4>Activists & Associations</h4>
                        <p>Kailash Satyarthi: contact@kailashsatyarthi.net</p>
                        <p>Bachpan Bachao Andolan: 1800 102 7222</p>
                    </div>

                    div style={columnStyle2}>
                        <h4>Helpline</h4>
                        <p>Pratham(Every Child in School): 01126716083</p>
                        <p>Kailash Satyrthi: 011 – 47511111</p>
                    </div>

                    <div style={columnStyle}>
                        <h4>General Queries</h4>
                        <p>dial1098@childlineindia.org.in</p>
                    </div>

                    <div style={columnStyle}>                    
                        <h4>Counselling</h4>
                        <p>1800 121 2830</p>
                    </div>

                    <div style={columnStyle}>     
                        <h4>Filing a Complaint</h4>
                        <p>https://ncpcr.gov.in/pocso/</p>
                    </div>
*/
