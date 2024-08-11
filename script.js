// Selects all their respective elements found in the parenthesis

const EventContainers = [...document.querySelectorAll('.Event-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById("Namer");


// finds the dimensions, where it is, and sees that if the buttons have been touched it will increase or decrease by the container width that we got from the previous few lines
EventContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// if its clicked, itll send an alert thanking the user for their submission, and it takes the Name by taking its value from nameInput
submitButton.addEventListener('click', () => {
    const name = nameInput.value;

    alert('Thanks for submission, '  + name);
});
