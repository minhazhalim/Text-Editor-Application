const optionButton = document.querySelectorAll('.option-button');
const advancedOptionsButton = document.querySelectorAll('.advanced-option-button');
const align = document.querySelectorAll('.align');
const spacing = document.querySelectorAll('.spacing');
const format = document.querySelectorAll('.format');
const script = document.querySelectorAll('.script');
const fontName = document.getElementById('fontName');
const fontSize = document.getElementById('fontSize');
const createLink = document.getElementById('createLink');
let fontList = ['Arial','Verdana','Times New Roman','Garamond','Georgia','Courier New','cursive'];
const highlighterRemover = (className) => {
     className.forEach((button) => {
          button.classList.remove('active');
     });
};
const modifyText = (command,defaultUi,value) => {
     document.execCommand(command,defaultUi,value);
};
const highlighter = (className,needsRemoval) => {
     className.forEach((button) => {
          button.addEventListener('click',() => {
               if(needsRemoval){
                    let alreadyActive = false;
                    if(button.classList.contains('active')) alreadyActive = true;
                    highlighterRemover(className);
                    if(!alreadyActive){
                         button.classList.add('active');
                    }
               }else{
                    button.classList.toggle('active');
               }
          });
     });
};
optionButton.forEach((button) => {
     button.addEventListener('click',() => {
          modifyText(button.id,false,null);
     });
});
advancedOptionsButton.forEach((button) => {
     button.addEventListener('change',() => {
          modifyText(button.id,false,button.value);
     });
});
createLink.addEventListener('click',() => {
     let userLink = prompt('Enter a URL');
     if(/http/i.test(userLink)){
          modifyText(createLink.id,false,userLink);
     }else{
          userLink = 'http://' + userLink;
          modifyText(createLink.id,false,userLink);
     }
});
const initializer = () => {
     highlighter(align,true);
     highlighter(spacing,true);
     highlighter(format,false);
     highlighter(script,true);
     fontList.map((value) => {
          let option = document.createElement('option');
          option.value = value;
          option.innerHTML = value;
          fontName.appendChild(option);
     });
     for(let i = 1;i <= 7;i++){
          let option = document.createElement('option');
          option.value = i;
          option.innerHTML = i;
          fontSize.appendChild(option);
     }
     fontSize.value = 3;
};
window.onload = initializer();