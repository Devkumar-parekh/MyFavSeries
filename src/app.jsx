import React from 'react';
import Card from './card';
import './app.css';
import img1 from './imgs/familyman.jpg';
import img2 from './imgs/hostages.png';
import img3 from './imgs/scam.png';
import img4 from './imgs/specops.png';
function App(){
    return(
        <>  
            <div className='card-wrap'>
                <Card
                    imgsrc={img1}
                    title="TheFamilyMan"
                    descr="The suspense story of undercover agent."
                    link="1"
                />
                <Card
                    imgsrc={img2}
                    title="Hostages"
                    descr="Content with thrilling story of terrorism."
                    link="2"
                />
                <Card
                    imgsrc={img3}
                    title="Scam"
                    descr="A very entertaining searies of fraud based on true story."
                    link="3"
                />
                <Card
                    imgsrc={img4}
                    title="Special Ops"
                    descr="A patriotic person leading to the exposure from ATS."
                    link="4"
                />
            </div>
        </>
    );
}

export default App;