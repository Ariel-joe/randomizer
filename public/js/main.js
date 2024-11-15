
let InputArray = [];

const pElem = document.createElement('p');
document.getElementById('rawInputs').appendChild(pElem);

const addName = event => {
    event.preventDefault()

    const userInp = document.getElementById('userInput').value;

    if (!userInp) {
        alert('please enter a name!');
    }
    else {
        InputArray.push(userInp);
        console.log(InputArray);
    }

    pElem.textContent =  InputArray.join(', ');

    document.getElementById('userInput').value = '';
   
}


const randomizer = InputArray => {
    const finalOutp = document.getElementById('finalOutput');
    const outp = document.createElement('p');
    
    InputArray.sort(() => {
        return Math.random() - 0.5;
    });
    console.log(InputArray);

    outp.textContent =  InputArray.toString().replaceAll(',', ', ');
    finalOutp.appendChild(outp);

}










































// const shuffle = () => {


//     randomizer.addEventListener('click', () => {
//         InputArray.sort(function (){
//             return Math.random() - 0.5;
//         });
        
//         console.log(InputArray);
//     })


// }


//      InputArray.sort(function () {
//         return Math.random() - 0.5;
//     });

//      outp.textContent = InputArray;

//     finalOutp.appendChild(outp);
// }




























// function randomizer(arr){
//     arr.sort(function (){
//         return Math.random() - 0.5;
//     });

// }

// const names = ['joe', 'alois', 'ben', 'stan', 'aron', 'marc', 'michael'];
// console.log(names)

// console.log(randomizer(names));





  
