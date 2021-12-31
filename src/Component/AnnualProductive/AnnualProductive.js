import React from "react";
import './AnnualProductive.css'
const AnnualProductive = () => {
    return (
        <>
        <div className="AnnualProductiveWrapper">
            <span className='boundary top-boundary' />
            <div className="annualEmp">Annual productivity costs per employee</div>
            <div className="cardsWrapper">
                <div className="spam">
                    <div className="price">
                        <sup>$</sup>
                        1250
                    </div>
                    <div className="blueText">Spam</div>
                </div>
                <div className="Emails">
                    <div className="price">
                        <sup>$</sup>
                        1250
                    </div>
                    <div className="blueText">Spam</div>
                </div>
                <div className="poorly_written">
                    <div className="price">
                        <sup>$</sup>
                        1250
                    </div>
                    <div className="blueText">Spam</div>
                </div>
            </div>
            <span className="boundary bottom-boundary" />

        </div>

        </>
    )
}
export default AnnualProductive