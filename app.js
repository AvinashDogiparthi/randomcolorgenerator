const color1 = document.getElementById("chng");
const hone = document.querySelector("h1");
function setbg()
{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newColor;
    hone.innerText = newColor;
}
color1.addEventListener("click",setbg);