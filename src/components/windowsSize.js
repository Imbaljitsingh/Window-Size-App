import React , { useState, useEffect } from 'react'
import './windowsSize.css'

function WindowSize () {
const [width, setWidth ] = useState(window.innerWidth);
const [height, setHeight ] = useState(window.innerHeight);


useEffect ( () => {
    
    //use this function when an event occurs 

    const changeValues = () => 
    {
        setHeight(window.innerHeight) 
        setWidth(window.innerWidth)
        
    }

    // adding event listner

    window.addEventListener('resize', changeValues)


    //clean up event listner
    return () => {
        window.removeEventListener('resize' , changeValues);
    }
}, [height, width])


return (
    <div>
        
    <div className='main-div'>
        {/* Height */}
        <div className='height-div'>
            Heigth {height}
        </div>
        <div className='width-div'>
            Width {width}
        </div>
    </div>

    </div>
)


}


export default WindowSize;