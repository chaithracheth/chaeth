import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const A2 = {
    bounds: [167, 281],
    forms: [
        <svg viewBox="0 0 167 281" version="1.1">
            <polygon className="fill-4" points="0,226 83.5,0.1 167,226 " />
        </svg>,
        <svg viewBox="0 0 167 281" version="1.1">
            <path
                className="fill-1"
                d="M112.8,211.8v29.5c0,16.3-13.2,29.5-29.5,29.5s-29.5-13.2-29.5-29.5v-29.5 c0-16.3,13.2-29.5,29.5-29.5S112.8,195.5,112.8,211.8z"
            />
        </svg>,
    ],
};

const N2= {
    bounds: [204, 281],
    forms: [
        <svg version="1.1" id="Capa_1" viewBox="0 0 23.631 23.631">
            <g>
                <polygon className="fill-2" points="0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969 		"/>
            </g>
        </svg>,
        <svg version="1.1" id="Capa_1" viewBox="0 0 23.631 23.631">
            <g>
                <polygon className="fill-1" points="23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662 		"/>
            </g>
        </svg>
    ]
}

const D5 = {
    bounds: [135, 351],
    forms: [
        <svg viewBox="0 0 135 281" version="1.1">
            <path
                className="fill-2"
                d="M67,22H0v200h67c37,0,67-30,67-67S104,22,67,22z"
            />
        </svg>,
    ],
};

const Gradients = () => (
    <svg width="50" height="50" version="1.1" className="hidden">
        <defs>
            <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6ED0DD" />
                <stop offset="100%" stopColor="#70E2B9" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#405D86" />
                <stop offset="100%" stopColor="#384257" />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ED6088" />
                <stop offset="100%" stopColor="#C86FA3" />
            </linearGradient>
            <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F07F6B" />
                <stop offset="100%" stopColor="#EFC15C" />
            </linearGradient>
            <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8D63B1" />
                <stop offset="100%" stopColor="#8179CB" />
            </linearGradient>
            <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#EDD460" />
                <stop offset="100%" stopColor="#EDBC39" />
            </linearGradient>
        </defs>
    </svg>
);

const words = [A2, N2, A2, N2, D5];

const getYOffsetSpeed= (index) => {
    const offSet = 100;
    let i = index >= 1 ? 2 : 1
    return [-offSet*i + 'px', offSet*i + 'px']
}

class Letter extends React.Component {
    render() {
        const { letter } = this.props;

        return (
            <div
                className="letter"
                style={{
                    width: letter.bounds[0] / 10 + 'rem',
                    height: letter.bounds[1] / 10 + 'rem',
                }}
            >
                {letter.forms.slice(0,3).map((X, i) => (
                    <Parallax
                        className="form"
                        key={i}
                        y={getYOffsetSpeed(i)}
                    >
                        {X}
                    </Parallax>
                ))}
            </div>
        );
    }
}

const ParallaxWord = () => (
    <div className="word">
        {words.map((X, i) => (
            <Letter key={i} letter={X} />
        ))}
    </div>
);

const App = () => (
    <ParallaxProvider>
        <Gradients />
        <ParallaxWord />
    </ParallaxProvider>
);

export default App;