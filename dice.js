function roll() {
    const number = document.getElementById("numdice").value;
    const image = document.getElementById("diceimages");
    const result = document.getElementById("diceresult");
    const images = [];
    const results = [];

    

    for (var i = 0; i < number; i++) {
        const random = Math.floor(Math.random() * 6) + 1;
        results.push(random);
        images.push(`<img src="Dice_img/${random}.png">`);
    }
    result.textContent=`dice:${results.join(" ,")}`;
    image.innerHTML=images.join("");
}
