import React from 'react';

const Atlassian= () => (
    <div className='atlassianContainer'>
        <span className='boundary top-boundary' />
        <div className='emailTemplate' />
        <div className='thoughtBubble' />
        <div className='letterContainer'>
            <div className='firstLetter'>
                <span className='letterHeader'>304</span>
                <div className='letterDetails'>
                    <div className='letterDetailsHeader'>Weekly</div>
                    <div className='letterDetailsInfo'>business emails received on average</div>
                </div>
            </div>
            <div className='secondLetter'>
                <span className='letterHeader'>36</span>
                <div className='letterDetails'>
                    <div className='letterDetailsHeader'>Times</div>
                    <div className='letterDetailsInfo'>the average employee checks their email in an hour</div>
                </div>
            </div>
            <div className='thirdLetter'>
                <span className='letterHeader'>16</span>
                <div className='letterDetails'>
                    <div className='letterDetailsHeader'>Minutes</div>
                    <div className='letterDetailsInfo'>spent refocusing after handling incoming email</div>
                </div>
            </div>
        </div>
        <span className='boundary bottom-boundary ' />
    </div>
);

export default Atlassian;