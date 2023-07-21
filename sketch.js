
function createSketchPad(padSize) {
    console.log(padSize);
    const sketchPad = document.querySelector(".sketchpad")
    if (!padSize)
    {
        for (let row = 0; row < 16; row++) {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add(`row`);
            sketchPad.appendChild(parentDiv)
            for (let cell = 0; cell < 16; cell++)
            {
                const childDiv = document.createElement("div");
                childDiv.classList.add(`cell`);
                
                eventListeners(childDiv);

                parentDiv.appendChild(childDiv);
            }
        }
    } else if (padSize < 100 && padSize > 0)
    {
        for (let row = 0; row < padSize; row++) {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add(`row`);
            sketchPad.appendChild(parentDiv)
            for (let cell = 0; cell < padSize; cell++)
            {
                const childDiv = document.createElement("div");
    
                childDiv.classList.add(`cell`);
                
                eventListeners(childDiv);
    
                parentDiv.appendChild(childDiv);
            }
            sketchPad.appendChild(parentDiv)
        }
    } else if (padSize > 100 || padSize < 0 || typeof padSize !== "number") {
        alert("Please enter a number less than 100 or greater than 0.")
    }

    
}

function eventListeners(selectedElement) {

    selectedElement.addEventListener("mouseover", () => selectedElement.style.backgroundColor = "black");
    selectedElement.addEventListener("mouseout", () => selectedElement.style.backgroundColor = "white");
    selectedElement.addEventListener("click", () => selectedElement.classList.add("isclicked"));

}

function changePadSize() {
    const buttonResponse = document.querySelector(".changesize");

    buttonResponse.addEventListener("click", () => myInput = prompt("Please input a number less than 100 and greater than 0."));

    createSketchPad(myInput);
}


changePadSize();