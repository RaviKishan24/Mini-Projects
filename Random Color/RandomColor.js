const Main_Container = document.getElementById("Main_Container")


for (let i = 0; i < 17; i++) {
    const div = document.createElement('div')
    div.classList = "createdDiv"
    div.style.height = "100px"
    div.style.width = "100px"
    div.style.cursor = "Pointer"

    const hexNumbers = "0123456789ABCDEF"
    let randomcolor = ""


    for (let j = 0; j < 6; j++) {
        randomcolor = randomcolor + hexNumbers[Math.floor(Math.random() * 16)]

        div.style.backgroundColor = "#" + randomcolor
    }


    Main_Container.append(div)


    
    div.addEventListener('click', function () {
        const currDiv = this;
        const hexNumbers = "0123456789ABCDEF"
        let randomcolor = ""

        for (let j = 0; j < 6; j++) {
            randomcolor = randomcolor + hexNumbers[Math.floor(Math.random() * 16)]
        }


        currDiv.style.backgroundColor = "#" + randomcolor;
    });


}















