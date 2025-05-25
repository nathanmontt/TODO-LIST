'use strict'

// TASK PART
const inputText = document.getElementById('input-text');
const btnCtaAdd = document.getElementById('btn-cta-add');
const containerGeneral = document.getElementById('container-general');

// ERROR PART
const wrap = document.querySelector('.wrap');
const closeModal = document.getElementById('close-modal');

// SUCCESSFUL ADDED TASK PART
const wrapOk = document.querySelector('.wrap-ok');

document.addEventListener('DOMContentLoaded', () => {
    btnCtaAdd.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Creating a paragraph
        let paragraphText = document.createElement('p');
        paragraphText.setAttribute('id', 'todo-inserted-text');
        paragraphText.style.textTransform = 'capitalize'
        paragraphText.textContent = inputText.value;
        
        if (inputText.value) {
            // Creating a div to hold the buttons
            let divContainerBtn = document.createElement('div');
            divContainerBtn.classList.add('container-btn');
            
            // Creating the buttons globaly
            const deleteBtn = document.createElement('button');
            const checkedBtn = document.createElement('button');
            
            deleteBtn.setAttribute('id', 'deleted');
            checkedBtn.setAttribute('id', 'completed');
            
            [deleteBtn, checkedBtn].forEach((button) => {
                button.classList.add('btn-cta');
            });
            
            // Creating the icon images
            let deleteImg = document.createElement('img');
            let checkedImg = document.createElement('img');
            
            deleteImg.setAttribute('src', 'assets/imgs/icons/delete.png');
            checkedImg.setAttribute('src', 'assets/imgs/icons/check.png');
            
            [deleteImg, checkedImg].forEach((img) => {
                img.classList.add('icons');
            });
            
            // Inserting the icon images inside the buttons
            deleteBtn.appendChild(deleteImg);
            checkedBtn.appendChild(checkedImg);
            
            // Inserting the buttons inside a container
            divContainerBtn.append(deleteBtn, checkedBtn);
            
            // Creating a div to hold all of the elements above
            const containerToDo = document.createElement('div');
            containerToDo.classList.add('container-todo');
            
            containerToDo.append(paragraphText, divContainerBtn);

            // Adding functionality to the button when the user click on them
            deleteBtn.addEventListener('click', () => {
                containerToDo.remove();
            });
            checkedBtn.addEventListener('click', () => {
                paragraphText.classList.add('task-complete');
                containerToDo.classList.add('bg-container');
            });
            
            // Inserting containerToDo inside a general container
            containerGeneral.append(containerToDo);
            
            if(paragraphText) {
                // Clear the input field
                inputText.value = '';
            }
            
            wrapOk.classList.remove('hidden');
            setTimeout(() => {
                wrapOk.classList.add('hidden');
            }, 1500);

        } else {
            wrap.classList.remove('hidden');
            closeModal.addEventListener('click', () => {
                if (!wrap.classList.contains('hidden')) {
                    wrap.classList.add('hidden');
                }
            });
        }
    });

});
/*
<div class="container-todo">
    <p id="todo-inserted-text">Lorem, ipsum.</p>
    <div class="container-btn">
    <button class="btn-cta" id="deleted"><img src="assets/imgs/icons/delete.png" class="icons" alt="lixo"></button>
        <button class="btn-cta" id="completed"><img src="assets/imgs/icons/check.png" class="icons" alt="concluido"></button>
    </div>
</div>
*/