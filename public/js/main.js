
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
    const outpara = document.createElement('p');
    const timeNow = new Date()


    
    InputArray.sort(() => {
        return Math.random() - 0.5;
    });
    console.log(InputArray);

    outpara.textContent =  InputArray.join(', ');
    finalOutp.appendChild(outpara);

    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(InputArray);
    localStorage.setItem('history', JSON.stringify(history));
}

const viewHistory = () => {
    const historyContainer = document.getElementById('History-container');
    historyContainer.innerHTML = '';

    const history = JSON.parse(localStorage.getItem('history')) || [];

    history.forEach((item) => {
        const histoP = document.createElement('p');
        histoP.textContent = item.join(', ');
        historyContainer.appendChild(histoP);
    });
};




const openModal = () => {
    const historyModal = document.getElementById('historyModal');
    historyModal.classList.remove('hidden');

    const historyContainer = document.getElementById('History-container');
    historyContainer.innerHTML = ''; 
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.forEach((item) => {
        const histoP = document.createElement('p');
        histoP.textContent = item.join(', '); 
        historyContainer.appendChild(histoP);
    });
};

const closeModal = () => {
    const historyModal = document.getElementById('historyModal');
    historyModal.classList.add('hidden'); 
};


const now = new Date();
const hr = now.getHours();
const min = now.getMinutes();

console.log(`${hr}:${min}`);





































