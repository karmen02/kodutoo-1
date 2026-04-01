console.log("fail ühendatud");
const pi = 3.14;
let hours, minutes, seconds, day, month, year, dateTime;
let fontSize = 100;

//Värvivalik
function colorPicker(){
    const color = document.getElementById("color");
    const colorContainer = document.getElementById("colorContainer");
    const colorButtons = document.querySelectorAll(".color");
    const lightColors = ["#FFFFFF", "#808080", "#FFFFE0", "#ADD8E6"]; 
    
    const colors = {
        black: "#000000",
        white: "#FFFFFF",
        gray: "#808080",
        green: "#90EE90",
        pink: "#FFB6C1",
        purple: "#DDA0DD",
        blue: "#ADD8E6",
        yellow: "#FFFFE0",
        red: "#FF6B6B"
    };
    //avamine
    color.addEventListener("click", () => {
        if (colorContainer.style.display === "none" 
        || colorContainer.style.display === '') {
        colorContainer.style.display = "flex";
        } else {
            colorContainer.style.display="none";
        }
    });
    //taustavärvi muutmine, pildi eemaldamine, vastavalt teksti värvi muutus
    colorButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const selectedColor = colors[e.target.id];
            document.body.style.backgroundColor = selectedColor;
            document.body.style.backgroundImage = 'none'; // 
            
            if (lightColors.includes(selectedColor)) {
                document.body.style.color = "black";
                colorButtons.forEach(button => {
                    button.style.color = "black";
                    button.style.borderColor = "black";
                });
            } else {
                document.body.style.color = "white";
                colorButtons.forEach(button => {
                    button.style.color = "white";
                    button.style.borderColor = "white";
                });
            }
        });
    });
}

//Taustapildi valimine
function imagePicker(){
    const image = document.getElementById("image");
    const imageContainer = document.getElementById("imageContainer");
    const imageButtons = document.querySelectorAll(".image");
    const images = {
        photo1: "files/photos/image1.jpg",
        photo2: "files/photos/image2.jpg",
        photo3: "files/photos/image3.jpg",
        photo4: "files/photos/image4.jpg"
    };
    //avamine
    image.addEventListener("click", () => {
        if (imageContainer.style.display === "none" 
        || imageContainer.style.display === '') {
        imageContainer.style.display = "flex";
        } else {
            imageContainer.style.display="none";
        }
    });
    //pildi valimine, pilt katab ekraani, värvi eemaldamine
    imageButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const selectedImage = images[e.target.id];
            document.body.style.backgroundImage = "url('" + selectedImage + "')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundColor = 'none'; 
        });
    });
}


function changeFontSizeBigger(){
    fontSize = fontSize + 5;
    if(fontSize > 200){
        fontSize = 200;
        window.alert("Fondi suurus ei saa olla üle 200 piksli");
    }
    document.getElementById('dateContainer').style.fontSize =  fontSize + "px";
    document.getElementById('clockContainer').style.fontSize =  fontSize + "px";
}

function changeFontSizeSmaller(){
    fontSize = fontSize - 5;
    if(fontSize < 10){
        fontSize = 10;
        window.alert("Fondi suurus ei saa olla alla 10 piksli");
    }
    document.getElementById('dateContainer').style.fontSize =  fontSize + "px";
    document.getElementById('clockContainer').style.fontSize =  fontSize + "px";
}

function upDateClock() {
    dateTime = new Date();

    hours = dateTime.getHours();
    minutes = dateTime.getMinutes();
    seconds = dateTime.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById('hours').innerHTML = hours + ":";
    document.getElementById('minutes').innerHTML = minutes + ":";
    document.getElementById('seconds').innerHTML = seconds;
}

function updateDate(){
    dateTime = new Date();
    day = dateTime.getDate();
    month = dateTime.getMonth() + 1;
    year = dateTime.getFullYear();

    if(day < 10){
        day = "0" + day;
    }
    if(month < 10){
        month = "0" + month;
    }

    document.getElementById('day').innerHTML = day + ".";
    document.getElementById('month').innerHTML = month + ".";
    document.getElementById('year').innerHTML = year;
}

function checkKey(e){
    console.log(e.keyCode);
    if(e.keyCode == 43){
        changeFontSizeBigger();
    }
    if(e.keyCode == 45){
        changeFontSizeSmaller();
    }
}

colorPicker();
imagePicker();
upDateClock();
updateDate();
setInterval(upDateClock, 1000);
setInterval(updateDate, 60000);
document.getElementById('bigger').addEventListener('click', changeFontSizeBigger);
document.getElementById('smaller').addEventListener('click', changeFontSizeSmaller);
window.addEventListener('keypress', checkKey);