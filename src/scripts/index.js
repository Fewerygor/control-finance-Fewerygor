/* Desenvolva sua lógica aqui */
import {valuesCategory, insertedValues} from "./valuesData.js";
// const valuesCategory = ["Entrada", "Saída"];
let nextId = 0;
// let insertedValues = [
//     {
//       id: nextId++,
//       value: 19.0,
//       categoryID: 0,
//     },
//     {
//       id: nextId++,
//       value: 400.0,
//       categoryID: 1,
//     },
//     {
//       id: nextId++,
//       value: 193.0,
//       categoryID: 1,
//     },
//   ];


let insertedValuesfiltered = insertedValues;

const sumFunction = (array) => {
 let sum = 0;
 array.forEach((values) => {
    sum += values.value;
 });
 return sum;
}

const renderSum = () => {
    let sum = sumFunction(insertedValuesfiltered);
    return `R$ ${sum.toFixed(2)}`;
}

const addNewObject = () => {
  const addButton = document.querySelector('#insertValue');
  
  addButton.addEventListener('click', () => {
    let amount = parseFloat(document.querySelector("#amount").value);
  
    let radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    const radioChecked = Array.from(radioButtons).find(elemento => elemento.checked);
    let categoryID = radioChecked.value;
    let newObject = {
      id: nextId++,
      value: amount,
      categoryID
    };

    insertedValues.push(newObject);
    updatedRenderedList(insertedValues);
  });
}
addNewObject();

const renderInsertedValuesFiltered = () => {
  const ulValue = document.querySelector('ul');
  ulValue.innerHTML = '';

  insertedValuesfiltered.forEach((newObject) => {
    let valor = valuesCategory[newObject.categoryID];
    const liValue = document.createElement('li');
    const spanValues = document.createElement('span');
    const spanCategory = document.createElement('span');
    spanCategory.classList.add('spanCategory');
    
    spanValues.innerHTML = `R$ ${newObject.value.toFixed(2)}`;
    spanCategory.innerHTML = `${valor}`;
    
    let removeButton = document.createElement('button');
    removeButton.innerHTML = `<i class="fa-solid fa-trash" aria-label="Deletar" id=${newObject.id}></i>`;
    removeButton.classList.add('removeButon');
    liValue.append(spanValues, spanCategory, removeButton);
    ulValue.appendChild(liValue);

    removeButton.addEventListener('click', () => {
      insertedValues.splice(insertedValues.indexOf(newObject),1);
      updatedRenderedList(insertedValues);
    });
  });

  if(insertedValues.length == 0) {
    showMessage();
  } 
}
renderInsertedValuesFiltered();

const showMessage = () => {
  const ulValue = document.querySelector('ul')
  const liValue = document.createElement('li');
  const spanBox = document.createElement('div');
  spanBox.classList.add('spanBox');
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('spanTitle');
  const spanText = document.createElement('span');
    
  spanTitle.innerHTML = 'Nenhum valor cadastrado';
  spanText.innerHTML = 'Registrar novo valor';
  spanBox.append(spanTitle, spanText)
  liValue.append(spanBox);
  ulValue.appendChild(liValue);
} 

const resultSum = () => {
  const result = document.querySelector('.result_container--p');
  return result.innerHTML = renderSum();
}
resultSum();

const entradas = document.querySelector('#button_entradas');
entradas.addEventListener('click', () => {
  const list = insertedValues.filter(value => value.categoryID == 0);
  updatedRenderedList(list);
});

const saidas = document.querySelector('#button_saidas');
saidas.addEventListener('click', () => {
  const list = insertedValues.filter(value => value.categoryID == 1);
  updatedRenderedList(list);
});

const todos = document.querySelector('#button_todos');
todos.addEventListener('click', () => {
 updatedRenderedList(insertedValues)
});

const updatedRenderedList = (list) => {
  insertedValuesfiltered = list;
  resultSum()
  renderInsertedValuesFiltered()
};

