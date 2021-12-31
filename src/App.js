import './App.css';
import Img_1 from './img/parllexImg.jpeg'
import Img_2 from './img/pexels-photo3.jpeg'
import Img_3 from './img/blake-verdoorn-cssvEZacHvQ-unsplash.jpg'
import Img_4 from './img/jasper-boer-1fUu0dratoM-unsplash.jpg'

import {Parallax,Background} from 'react-parallax'
import FirstComponent from "./Component/FirstComponent";
const inLineStyles = {
    background:'#ffffff',
    left:'50%',
    top:'50%',
    position:'absolute',
    padding:'20px',
    transform: 'translate(-50%, -50%)',
}

function App() {
  return (
    <div className="App">
<Parallax bgImage={Img_1}
          strength={-400}
>
    <div style={{height:500}}>
        {/*<FirstComponent style={inLineStyles}>First section</FirstComponent>*/}
        <div style={inLineStyles}>
            <FirstComponent />


        </div>

    </div>
</Parallax>
        <h1>Section2</h1>
        <Parallax bgImage={Img_2}
                  strength={250}
        >
            <div style={{height:500}}>
                <div style={inLineStyles}>Second section</div>

            </div>
        </Parallax>

        <h1>Section3</h1>
        <Parallax bgImage={Img_3}
                  strength={-200}
        >
            <div style={{height:500}}>
                <div style={inLineStyles}>Third section</div>

            </div>
        </Parallax>

        <h1>Section4</h1>
        <Parallax bgImage={Img_4}
                  bgImageStyle={{height: '450px', width: '400x', opacity: '.5'}}
                  strength={50}

        >
            <div style={{height:500}}>
                <div style={inLineStyles}>Fourth section</div>

            </div>
        </Parallax>
        <h1>Section5</h1>
        <Parallax strength={-500}>
            <Background className="custom-bg">
                <div
                    style={{
                        height: 2000,
                        width: 2000,
                        backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')"
                    }}
                />
            </Background>
            <div>
                <br />
                custom background component
                <br />
                <br />
                custom background component
                <br />
                <br />
                custom background component
                <br />
                <br />
            </div>
        </Parallax>
        <div style={{ height: 500 }} />
        <h2>{"\u2728"}</h2>
    </div>
  );
}

export default App;
