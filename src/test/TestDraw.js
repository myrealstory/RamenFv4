import React, { useRef} from 'react'
import { productData } from './ProductData'

export default function TestDraw() {
    const cRef = useRef()
    
    const drawSomething = () => { 
        const cnt = cRef.current.getContext('2d');

        cnt.beginPath();
        cnt.moveTo(50, 50);
        cnt.lineTo(200, 300);
        cnt.lineTo(400, 50);
        cnt.strokeStyle = 'orange';
        cnt.lineWidth = 20;
        cnt.stroke();
    }


  return (
      <div>
          {productData.map((v, i) => {
              return (
                  <div key={i} style={{display: 'inline-block'}}>
                      <img src={`/imgs/${v.img}`} width="120px" alt={ v.name} />
                </div>
              );
          })}
          <button onClick={drawSomething}>test</button>
          <canvas ref={cRef} width="800" height="600" style={{border:'1px dotted black'}}></canvas>
    </div>
  )
}
