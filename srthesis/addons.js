function createNeuralNetBase(slide, index){
    const layerUnits = [1, 6, 6, 6, 6, 1]
    const layers = layerUnits.length
    console.log(`svg${index}`)
    const elm = document.getElementById(`svg${2}`)
   
    // const h =  slide.height
    // const w =  slide.width
    const border = 5
    const h =  70
    const w =  70


    elm.setAttribute("height", `${h}`)
    elm.setAttribute("width", `${w}`)

    for(let layerIndex = 0; layerIndex < layers; layerIndex += 1){
        const x_step = w/layers        
        const y_step = h/(layerUnits[layerIndex] + 1)
        console.log(y_step)
        for(let unitIndex = 0; unitIndex < layerUnits[layerIndex]; unitIndex += 1){
            const unit = document.createElementNS("http://www.w3.org/2000/svg",'circle')
            unit.classList.add("unit", `layer${layerIndex}`, `unit${unitIndex}`, 'clear')
            unit.setAttribute("id", `unit${layerIndex}:${unitIndex}`)
            unit.setAttribute("cx", `${x_step*(layerIndex+1) - border}vh`)
            unit.setAttribute("cy", `${y_step*(unitIndex+1) - border}vh`)
            unit.setAttribute("r", "2%")
            unit.setAttribute("stroke-width", "0.5vh")
            unit.setAttribute("stroke", "white")
            elm.appendChild(unit)
        }
    }

    return(elm)
}

let currentLayer = 0
function layerAnimate(currentLayer){
    const layerUnits = [1, 6, 6, 6, 6, 1]
    const layers = layerUnits.length
    
    if(layers+1 === currentLayer){
        currentLayer = 0;
    } 

    for(let i = 0; i < layerUnits[currentLayer]; i += 1){
        const unit = document.getElementById(`unit${currentLayer}:${i}`)
        console.log(`unit${currentLayer}:${i}`)
        unit.classList.add("full")
        unit.classList.remove("clear")
    }
    if(currentLayer > 0)
        for(let i = 0; i < layerUnits[currentLayer - 1]; i += 1){
            const unit = document.getElementById(`unit${currentLayer-1}:${i}`);
            console.log(`unit${currentLayer-1}:${i}`);
            unit.classList.remove("full");
            unit.classList.add("clear");
        }

    return(currentLayer += 1);
    }

// Reveal.on('slidechanged', event => {
//     console.log(event.indexh, event.indexv, event.currentSlide);
//     let new_elm = createNeuralNetBase(event.currentSlide, event.indexh)
//     let slide = event.currentSlide
//     console.log(new_elm)
//     slide.appendChild(new_elm)
//     Reveal.sync()
// })

createNeuralNetBase(0, 2)
let lastUnits
document.addEventListener("keydown", event => {currentLayer = layerAnimate(currentLayer)})