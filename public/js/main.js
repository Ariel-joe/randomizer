
let InputArray;

const addName = (event) => {
    event.preventDefault()

    const userInp = document.getElementById('userInput').value;
    const rawInp = document.getElementById('rawInputs');
    const pElem = document.createElement('p');

    InputArray = ['ariel', 'joe'];
    InputArray.push(userInp);
    console.log(InputArray);

    pElem.textContent =  InputArray.toString().replaceAll(',', ', ');

    rawInp.appendChild(pElem);

    document.getElementById('userInput').value = '';
   
}



function randomizer(InputArray){
    const finalOutp = document.getElementById('finalOutput');
    const outp = document.createElement('p');
    const randomizer = document.getElementById('shuffler');

    InputArray.sort(function (){
        return Math.random() - 0.5;
    });
    console.log(InputArray);

    outp.textContent =  InputArray.toString().replaceAll(',', ', ');
    finalOutp.appendChild(outp);

    document.getElementById('finalOutput').value = '';
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





  
