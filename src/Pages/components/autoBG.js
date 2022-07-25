import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web'

function AutoBG() {
  
    const container = useRef(null)

    useEffect(() => { 
        lottie.loadAnimation({
            container: container.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../img/FireLoop.json'),
        })
    },[])
   
    return (
      <>
        <div className="Vcontainer" ref={container}></div>
      </>
    );
};

export default AutoBG