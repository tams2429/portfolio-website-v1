const texts = ['Programmer', 'Music Lover', 'Coffee Drinker', 'Whisky Enthusiast', 'Outside-The-Box Thinker'];
let element = 0;
let index = 0;
let currentText = null;
let letter = null;


const erase = () => {
    if(index === currentText.length+1){
        setTimeout(erase, 1000);
        letter = currentText.slice(0, --index);
        document.querySelector('.typing').textContent = letter;
    } else if(index > 0){
        letter = currentText.slice(0, --index);
        console.log(letter)
        document.querySelector('.typing').textContent = letter;
        setTimeout(erase, 100);
    } else{
        element++;
        setTimeout(type, 400);
    }

}

const type = () => {

  
  currentText = texts[element];
  letter = currentText.slice(0, index++);
  console.log(letter);
  console.log(index);
  document.querySelector('.typing').textContent = letter;
  
  
  if (letter.length === currentText.length && element != texts.length-1){
        erase();
    } else if(element == texts.length-1){
        if(index<=currentText.length){
            setTimeout(type, 400);
        }
        return;
    } else{
        setTimeout(type, 400);
    }

};



type();
