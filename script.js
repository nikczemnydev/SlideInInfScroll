// grab boxes and put them in node list
const boxes = document.querySelectorAll('.box')

// look for scrolling event, check positions of boxes if triggered
window.addEventListener('scroll', checkBoxes)

/* if this function wasn't called here, we'd start off with 0 boxes 
until we scrolled down */
checkBoxes()

function checkBoxes() {
    const triggerDown = window.innerHeight / 5 * 4

    // loop through the boxes
    boxes.forEach(box => {
        // check where the top of a box is
        const boxUp = box.getBoundingClientRect().top

        // is the top of the box less than triggerDown?
        if(boxUp < triggerDown) {
            // if so, add class of show to a box
            box.classList.add('show')
        } else {
            // if not, remove the class of show from a box
            box.classList.remove('show')
        }
    })
}