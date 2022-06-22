import React from 'react'

function Main() {

    const[imgScreen, setImgsScreen] = React.useState(false);


    function texting(){
        if(window.innerWidth <= 768){
            setImgsScreen(false);
        }else{
            setImgsScreen(true);
        }
    }
    
    React.useEffect(() => {
        window.addEventListener('resize', texting);
        return () => {
            window.removeEventListener('resize', texting);
        }
    });
  return (
    <main className='main'>
        <section className='sec-1'>
            <h1><span>Make</span> remote work</h1>
            <p> 
                Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.
            </p>
            <button className='learn-more'>Learn more</button>
            <div className='container'>
                <img src='./images/client-databiz.svg' alt='img' className='col-4'/>
                <img src='./images/client-audiophile.svg' alt='img' className='col-4'/>
                <img src='./images/client-meet.svg' alt='img' className='col-4'/>
                <img src='./images/client-maker.svg' alt='img' className='col-4'/>
            </div>
        </section>
        <section className='sec-2'>
            <img src={imgScreen ? './images/image-hero-desktop.png' : './images/image-hero-mobile.png'} alt='hero'/>
        </section>
    </main>
  )
}

export default Main