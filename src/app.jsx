import React from 'react';
import Card from './card';
import './app.css';
import sData from './sdata';



function App(){
    return(
        <>  
            <div className='card-wrap'>
                {sData.map((val)=>{
                    return(
                        <Card
                            key= {val.id}
                            imgsrc= {val.imgsrc}
                            title= {val.title}
                            descr= {val.descr}
                            link= {val.link}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;