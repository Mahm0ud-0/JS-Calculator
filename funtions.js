
let math = []
let showBarEl = document.getElementById("show-bar")

function clicked() {
    let x = event.target.textContent

    math.push(x)
    console.log(math)
    showBarEl.textContent += x
}


function delAll() {
    showBarEl.textContent = ""
    console.log("clear");
    math = []
}

function del() {
    math.pop()
    // remove last element from the text content
    showBarEl.textContent = showBarEl.textContent.substring(0,showBarEl.textContent.length - 1)
    console.log(math);
}


function equals() {
    let exp =""
    for (const i of math) {
        exp += i
    }

    try {
        let result = eval(exp)
        showBarEl.textContent = result
        math = []
        math.push(result)
        
    } catch (SyntaxError) {
        showBarEl.textContent = "ERROR"
    }
}