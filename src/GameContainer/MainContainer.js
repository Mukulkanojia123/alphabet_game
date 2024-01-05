import React , {useState} from 'react';
import appleGif from '../Assets/apple.gif';
import bee from '../Assets/bee.gif';
import coin from '../Assets/coin.gif';
import duck from '../Assets/duck.gif';
import eye from '../Assets/eye.gif';
import foodtruck from '../Assets/food-truck.gif';
import gift from '../Assets/gift.gif';
import home from '../Assets/home.gif';


const Gifs = {
    A: { gif: appleGif, sound: 'Apple This is Apple' },
    B: { gif: bee, sound: 'Bee This is Bee' },
    C: {gif : coin, sound : 'Coin this is Coin'},
    D: {gif : duck, sound : 'Duck this is Duck'},
    E: {gif : eye, sound : 'Eye this is Eye'},
    F: {gif : foodtruck, sound : ' Food truck this is Food truck'},
    G: {gif : gift, sound : 'Gift this is Gift'},
    H: {gif : home, sound : 'Home this is Home'}
}

const color = {
    A : 'red',
    B : 'green',
    C : 'blue',
    D : 'yellow',
    E : 'orange',
    F : 'purple',
    G : '#E207C8',
    H : '#0C343D',
}


const MainContainer = () => {
    const [currentGif , setCurrentGif] = useState(null);

    const playSoundForAlphabet = (sound) => {
        let value = new SpeechSynthesisUtterance(sound);
        window.speechSynthesis.speak(value);
        // console.log(value);
      };

    const handleClick = (alphabet)=>{

            setCurrentGif(Gifs[alphabet].gif);

             playSoundForAlphabet(Gifs[alphabet].sound)
            //  console.log(Gifs[alphabet].sound)
    }
  return (
    <div className='game_container'>
        <div className='gif_img'>
            <img src={currentGif} />
        </div> 
        <div className='key_pad'>
            {
                ['A','B','C','D','E','F','G','H'].map((alpha,index)=>(
                    <button key={index} onClick={()=>handleClick(alpha)} style={{color:color[alpha] , border:`4px solid ${color[alpha]}`}}>{alpha}</button>
                ))
            }      
        
        </div>
    </div>
  )
}

export default MainContainer;
