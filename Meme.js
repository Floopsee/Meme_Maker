const addMeme = document.getElementById('addMeme');
const imgUrl = document.getElementById('imgUrl');
const topTextInput = document.getElementById('topTextInput');
const bottomTextInput = document.getElementById('bottomTextInput');
const meme = document.getElementById('meme')
const deleteBtn = document.getElementById('deleteBnt')

let savedImgSrc = JSON.parse(localStorage.getItem("savedImgSrc")) || [];
let savedTopText = JSON.parse(localStorage.getItem("savedTopText")) || [];
let savedBottomText = JSON.parse(localStorage.getItem("savedBottomText")) || [];

for (let i = 0; i < savedImgSrc.length; i++) {
    let newMeme = document.createElement("div")
    newMeme.setAttribute("id", "container");
    let memeImg = document.createElement("img")
    memeImg.src = savedImgSrc[i];
    newMeme.appendChild(memeImg)
    localStorage.setItem("savedImgSrc", JSON.stringify(savedImgSrc))
    memeImg.setAttribute("id", "memeImg")
    meme.appendChild(newMeme)

    let topText = document.createElement("div")
    topText.innerText = savedTopText[i];
    localStorage.setItem("savedTopText", JSON.stringify(savedTopText))
    topText.setAttribute("id", "topText");
    newMeme.appendChild(topText)

    let bottomText = document.createElement("div")
    bottomText.innerText = savedBottomText[i];
    localStorage.setItem("savedBottomText", JSON.stringify(savedBottomText))
    bottomText.setAttribute("id", "bottomText");
    newMeme.appendChild(bottomText)

    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("id", "deleteBtn")
    deleteBtn.innerHTML = "Delete"
    newMeme.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.remove()
        if (deleteBtn.previousSibling.innerText === savedBottomText[i]) {
            savedBottomText.splice(i, 1)
            localStorage.setItem("savedBottomText", JSON.stringify(savedBottomText))
            savedTopText.splice(i, 1)
            localStorage.setItem("savedTopText", JSON.stringify(savedTopText))
            savedImgSrc.splice(i, 1)
            localStorage.setItem("savedImgSrc", JSON.stringify(savedImgSrc))
        }
    })
}

addMeme.addEventListener('click', function () {
    let newMeme = document.createElement("div")
    newMeme.setAttribute("id", "container");
    let memeImg = document.createElement("img")
    let memeImgSrc = imgUrl.value
    memeImg.src = memeImgSrc;
    newMeme.appendChild(memeImg)
    savedImgSrc.push(memeImgSrc)
    localStorage.setItem("savedImgSrc", JSON.stringify(savedImgSrc))
    memeImg.setAttribute("id", "memeImg")
    imgUrl.value = ''
    meme.appendChild(newMeme)

    let topText = document.createElement("div")
    let topTextSrc = topTextInput.value;
    topText.innerText = topTextSrc;
    savedTopText.push(topTextSrc)
    localStorage.setItem("savedTopText", JSON.stringify(savedTopText))
    topText.setAttribute("id", "topText");
    topTextInput.value = ''
    newMeme.appendChild(topText)

    let bottomText = document.createElement("div")
    let bottomTextSrc = bottomTextInput.value;
    bottomText.innerText = bottomTextSrc;
    savedBottomText.push(bottomTextSrc)
    localStorage.setItem("savedBottomText", JSON.stringify(savedBottomText))
    bottomText.setAttribute("id", "bottomText");
    bottomTextInput.value = ''
    newMeme.appendChild(bottomText)

    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("id", "deleteBtn")
    deleteBtn.innerHTML = "Delete"
    newMeme.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.remove()
        for (let i = 0; i < savedImgSrc.length; i++) {
            if (deleteBtn.previousSibling.innerText === savedBottomText[i]) {
                savedBottomText.splice(i, 1)
                localStorage.setItem("savedBottomText", JSON.stringify(savedBottomText))
                savedTopText.splice(i, 1)
                localStorage.setItem("savedTopText", JSON.stringify(savedTopText))
                savedImgSrc.splice(i, 1)
                localStorage.setItem("savedImgSrc", JSON.stringify(savedImgSrc))
            }
        }
    })
})
