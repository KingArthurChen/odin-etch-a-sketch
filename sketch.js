
function createSketchPad(padSize) {
    console.log(padSize);
    const sketchPad = document.querySelector(".sketchpad")
    if (!padSize)
    {
        for (let row = 0; row < 16; row++) {
            console.log("16 was picked!")
            const parentDiv = document.createElement("div");
            parentDiv.classList.add(`row`);
            for (let cell = 0; cell < 16; cell++)
            {
                const childDiv = document.createElement("div");
                childDiv.classList.add(`cell`);
                
                eventListeners(childDiv);

                parentDiv.appendChild(childDiv);
            }
            sketchPad.appendChild(parentDiv);
        }
    } else if (padSize < 100 && padSize > 0)
    {
        for (let row = 0; row < padSize; row++) {
            console.log(`${padSize} was picked!`)
            const parentDiv = document.createElement("div");
            parentDiv.classList.add(`row`);
            for (let cell = 0; cell < padSize; cell++)
            {
                const childDiv = document.createElement("div");

                childDiv.classList.add(`cell`);
                
                eventListeners(childDiv);
    
                parentDiv.appendChild(childDiv);
            }
            sketchPad.appendChild(parentDiv);
        }
    } else if (padSize > 100 || padSize < 0 || typeof padSize !== "number") {
        console.log("You didn't type an acceptable number, so I was picked!")
        alert("Please enter a number less than 100 or greater than 0.")
    }

    
}

function eventListeners(selectedElement) {

    selectedElement.addEventListener("mouseover", () => selectedElement.style.backgroundColor = "black");
    selectedElement.addEventListener("mouseout", () => selectedElement.style.backgroundColor = "white");
    selectedElement.addEventListener("click", () => selectedElement.classList.add("isclicked"));

}

function changePadSize() {
    let sketchPad = document.querySelector(".sketchpad");
    let sketchPadHeading = document.querySelector("h1");
    sketchPad.innerHTML = "";
    let myInput = prompt("Please enter a number less than 100 or greater than 0.")
    createSketchPad(myInput);
    sketchPadHeading.textContent = `Current Sketchpad Size: ${myInput}x${myInput}`;
}


createSketchPad();

const buttonResponse = document.querySelector(".changesize");

buttonResponse.addEventListener("click", () => changePadSize());

