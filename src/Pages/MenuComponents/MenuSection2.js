import React , {useState, useContext, useEffect}from 'react'
import FileMenuInfo from "../Api/MenuApi";


function MenuSection2() {

    const [arrayData , setArrayData] = useState([]);

    const [menuData] = useContext(FileMenuInfo);
    console.log("MenuSec2:", menuData);

    function shuffle(array1){
        const array = [...array1];
        let currentIndex = array.length,randomIndex;

        while(currentIndex !==0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;

            [array[currentIndex],array[randomIndex]]=[
                array[randomIndex],
                array[currentIndex],
            ]
        }

        return array;
    }

    useEffect(()=>{
    
    },[])

    console.log(arrayData[0]);

   

  return (
    <div className='Mec2'>
        <h3 className='Msec2Title'>推薦菜單</h3>
        <div className='Msec2Box'>
            {!!menuData[0] && menuData[0].length ? shuffle(menuData[0]).filter((v,i,array)=>{
                console.log("this is i:",i);
                return i<4;
            }).map((value,index, array2)=>{
                console.log(array2);
                console.log("sec2:",value);
                
                if(index!==0) return <div key={value}></div>

                return (
                    <>
                    <div key={array2[0].sid} className="d-flex justify-content-between mt-5 pt-5 borderdotTop">
                    <div className='Msec2Content Msec2cRight'>
                        <div style={{borderTop:'3px solid white'}}>
                        <div className='MS2TitleBox'>
                        <h3>{array2[0].product_name}</h3>
                        </div>
                        <div className='MS2Content'>
                            <p>{array2[0].product_description}</p>
                                </div>
                                <div className='MS2Price'>
                                    <span>NTD.</span>
                                    <span>{ array2[0].price}</span>
                                </div>
                                <div className='MS2Order'>
                                    <button type=''>加入購物車</button>
                                </div>
                        </div>
                    </div>
                    <div className='Msec2Image'>
                    <img src={array2[0].Image} alt="" />
                    </div>
                </div>
                <div key={array2[1].sid} className="d-flex justify-content-between mt-5 pt-5 borderdotTop">
                <div className='Msec2Image'>
                    <img src={array2[1].Image} alt="" />
                    </div>
                    <div className='Msec2Content Msec2cLeft'> 
                        <div style={{borderTop:'3px solid white'}}>
                        <div className='MS2TitleBox'>
                        <h3>{array2[1].product_name}</h3>
                        </div>
                        <div className='MS2Content'>
                            <p>{array2[1].product_description}</p>
                                </div>
                                <div className='MS2Price'>
                                    <span>NTD.</span>
                                    <span>{ array2[1].price}</span>
                                </div>
                                <div className='MS2Order'>
                                    <button type=''>加入購物車</button>
                                </div>
                        </div>
                    </div>
                    
                </div>
                <div key={array2[2].sid} className="d-flex justify-content-between mt-5 pt-5 borderdotTop">
                    <div className='Msec2Content Msec2cRight'>
                        <div style={{borderTop:'3px solid white'}}>
                        <div className='MS2TitleBox'>
                        <h3>{array2[2].product_name}</h3>
                        </div>
                        <div className='MS2Content'>
                            <p>{array2[2].product_description}</p>
                                </div>
                                <div className='MS2Price'>
                                    <span>NTD.</span>
                                    <span>{ array2[2].price}</span>
                                </div>
                                <div className='MS2Order'>
                                    <button type=''>加入購物車</button>
                                </div>
                        </div>
                    </div>
                    <div className='Msec2Image'>
                    <img src={array2[2].Image} alt="" />
                    </div>
                </div>
                <div key={array2[3].sid} className="d-flex justify-content-between mt-5 mb-5 pt-5 pb-5 borderdotTop borderdotBottom ">
                <div className='Msec2Image'>
                    <img src={array2[3].Image} alt="" />
                    </div>
                    <div className='Msec2Content Msec2cLeft'> 
                        <div style={{borderTop:'3px solid white'}}>
                        <div className='MS2TitleBox'>
                        <h3>{array2[3].product_name}</h3>
                        </div>
                        <div className='MS2Content'>
                            <p>{array2[3].product_description}</p>
                                </div>
                                <div className='MS2Price'>
                                    <span>NTD.</span>
                                    <span>{ array2[3].price}</span>
                                </div>
                                <div className='MS2Order'>
                                    <button type=''>加入購物車</button>
                                </div>
                        </div>
                    </div>
                    
                </div>
                    </>
                
                )
            }):null}
            
        </div>
    </div>
  )
}

export default MenuSection2