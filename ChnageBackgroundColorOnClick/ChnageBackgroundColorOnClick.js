const bgcolor = document.getElementById('bgcolor')
const changebutton = document.getElementById('changebutton')




const randomhexcode = () => {

    const randomString = 'ABCDEF0123456789'
    let result = ''

    for (let i = 0; i <6; i++) {
        result = result+ randomString[Math.floor(Math.random() * 16)];
    }

    console.log("Result is ",result)

    bgcolor.style.backgroundColor = "#"+result;
}



changebutton.addEventListener('click', randomhexcode)



