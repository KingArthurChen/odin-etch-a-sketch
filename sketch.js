
function createSketchPad() {
    const sketchPad = document.querySelector(".sketchpad")

    for (let row = 0; row < 16; row++) {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add(`row`);
        for (let cell = 0; cell < 16; cell++)
        {
            const childDiv = document.createElement("div");
            childDiv.classList.add(`cell`);
            parentDiv.appendChild(childDiv);
        }
        sketchPad.appendChild(parentDiv)
    }
}

createSketchPad();