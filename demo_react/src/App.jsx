import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ColorFulMessage from './components/ColorfulMessage';

const App = () => {

    console.log("最初");

    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(false);

    const onClickCountUp = () => {
        setNum(num + 1);
    }

    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                faceShowFlag || setFaceShowFlag(true);
            } else {
                faceShowFlag && setFaceShowFlag(false);
            }
        }
    // eslint-disable-next-line 
    },[num]);
    


    return (
        <>
            <h1 style={{ color: 'red' }}>こんにちは！</h1>
            <ColorFulMessage color="blue" text="お元気ですかあああ" />
            <ColorFulMessage color="pink" text="元気ですううううう" />
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <br />
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            {faceShowFlag && <p>😂</p>}
        </>
    );
};

export default App;

