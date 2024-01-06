// javascript

let wine = {
    purity: 100,
    acidity: 100,
    freshness: 100,
    age: 0
}

var sliderPurity = document.getElementById("wine-purity")
var outputPurity = document.getElementById("wine-purity-value")

const wineScoreEl = document.getElementById("wine-score-value")

outputPurity.innerHTML = sliderPurity.value; // Display the default slider value

sliderPurity.oninput = function(){
    outputPurity.innerHTML = this.value
    
    updateWineValues()
}

var sliderAcidity = document.getElementById("wine-acidity")
var outputAcidity = document.getElementById("wine-acidity-value")

outputAcidity.innerHTML = sliderAcidity.value; // Display the default slider value

sliderAcidity.oninput = function(){
    outputAcidity.innerHTML = this.value
    
    updateWineValues()
}

var sliderFreshness = document.getElementById("wine-freshness")
var outputFreshness = document.getElementById("wine-freshness-value")

outputFreshness.innerHTML = sliderFreshness.value; // Display the default slider value

sliderFreshness.oninput = function(){
    outputFreshness.innerHTML = this.value
    
    updateWineValues()
}

var sliderAge = document.getElementById("wine-age")
var outputAge = document.getElementById("wine-age-value")

outputAge.innerHTML = sliderAge.value; // Display the default slider value

sliderAge.oninput = function(){
    outputAge.innerHTML = this.value
    
    updateWineValues()
}

function updateWineValues()
{
    wine.purity = parseInt(outputPurity.textContent)
    wine.acidity = parseInt(outputAcidity.textContent)
    wine.freshness = parseInt(outputFreshness.textContent)
    wine.age = parseInt(outputAge.textContent)
    
    wineScoreEl.textContent = (calculateWineScore(wine))
    
}

function calculateWineScore(wineObj){
    
    let score = (wineObj.purity + wineObj.acidity + wineObj.freshness + wineObj.age ) * Math.min(wineObj.purity, wineObj.acidity, wineObj.freshness, wineObj.age) * 5;
    
    // console.log(wineObj.purity)
    
    return score
}