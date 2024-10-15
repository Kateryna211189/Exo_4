//Variables
const playground = document.querySelector("#playground");
const click = document.getElementById("click");
const click2 = document.getElementById("click2");
const popUpArray = [
    {
        titleTxt: "MY NAME IS",
        titleCCS: "myNameIs",
        imgSrc: "https://picsum.photos/id/1/300/200",
        paraTxt: "Lorem fhgjgjjhjgggggghgjjjjhgjgjhjlljjij"
    },
    {
        titleTxt: "I am 10",
        titleCCS: "myAgeis",
        imgSrc: "https://picsum.photos/300/200",
        paraTxt: "My age njhrkgtjtlelkgjkhkjghjguihyuijh",
        categories:[
            "pubChaussure",
            "vetements"
        ]
    }
]
/*console.log(click.style.width);
const click = {
    offsetHeight: 0,
    offsetWidth: 525,
    style: {
        height:432,
        width:528,
        ...click,
    }
}
*/
//console.log(popUpArray[0].titleCCS);
//console.log(popUpArray[1]["titleCSS"]);
//console.log(popUpArray[1].categories)
//Fonctions
/*function*/
const popUp = (parent, idName,index) => {
    const div = document.createElement("div");
    div.id = idName;
    //attention style ne pas la bonne solution privilegiez les class
    div.style.width = "300px";
    parent.append(div);
    
    //..
    titre(div,popUpArray[index].titleTxt,popUpArray[index].titleCCS);
    image(div,popUpArray[index].imgSrc);
    paragraph(div, popUpArray[index].paraTxt);

}
const titre = (parent, txt, deco) => {
    const h1 = document.createElement("h1");
    h1.innerText = txt;
    h1.classList.add(deco);
    parent.append(h1);
}
const paragraph = (parent, txt) => {
    const p = document.createElement("p");
    p.innerText = txt;
    parent.append(p);
}
const image = (parent, source) => {
    const image = document.createElement("img");
    image.src = source;
    parent.append(image);
}
const removePopUp = (idName) => {
    document.getElementById(idName).remove();
}
//popUp(playground, "popUpOne")

click.addEventListener("click", () => {
    const idNameOne = "popUpOne";
    if (document.contains(document.getElementById(idNameOne))) {
        removePopUp(idNameOne);
    } else {
        popUp(playground, idNameOne,0);
    }
})
click2.addEventListener("click", () => {
    const idNameOne = "popUp2";
    if (document.contains(document.getElementById(idNameOne))) {
        removePopUp(idNameOne);
    } else {
        popUp(playground, idNameOne,1);
    }
})


