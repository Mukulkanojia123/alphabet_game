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
    A: { gif: appleGif, sound: 'This is A' },
    B: { gif: bee, sound: 'This is B' },
    C: {gif : coin, sound : 'this is C'},
    D: {gif : duck, sound : 'this is D'},
    E: {gif : eye, sound : 'this is E'},
    F: {gif : foodtruck, sound : 'this is F'},
    G: {gif : gift, sound : 'this is G'},
    H: {gif : home, sound : 'this is H'}
}

const color = {
    A : 'red',
    B : 'green',
    C : 'blue',
    D : 'yellow',
    E : 'orange',
    F : 'purple',
    G : 'pink',
    H : 'voilet',
}


const MainContainer = () => {
    const [currentGif , setCurrentGif] = useState(Gifs['A'].gif);

    const playSoundForAlphabet = (sound) => {
        const audio = new Audio();
        audio.src = `data:audio/wav;base64,${sound}`;
        audio.play();
      };

    const handleClick = (alphabet)=>{

            setCurrentGif(Gifs[alphabet].gif);

            // playSoundForAlphabet(Gifs[alphabet].sound);
    }
  return (
    <div className='game_container'>
        <div className='gif_img'>
            <img src={currentGif} />
        </div> 
        <div className='key_pad'>
            {
                ['A','B','C','D','E','F','G','H'].map((alpha)=>(
                    <button onClick={()=>handleClick(alpha)} style={{color:color[alpha] , border:`4px solid ${color[alpha]}`}}>{alpha}</button>
                ))
            }      
        
        </div>
    </div>
  )
}

export default MainContainer;
