
function getOutput() {
    let name = document.getElementById("TitleBox--_Asset_Display_html--asset-basics----QmFzaWNz---0").getElementsByClassName("asset-name");
    
    console.log(name[0].innerText);
    let description = document.getElementById("TitleBox--_Asset_Display_html--asset-basics----QmFzaWNz---0").getElementsByClassName("asset-description");
    console.log(description[0].innerText)

    let serial = document.getElementById("CF-19-ShowRow").getElementsByClassName("value");
    console.log(serial[0].innerText);
    let tag = document.getElementById("CF-23-ShowRow").getElementsByClassName("value");
    console.log(tag[0].innerText)
}

let surplusBtn = document.getElementById(
    "TitleBox--_Asset_Display_html--asset-info-cfs_asset-info-cfs-Asset_Info----QXNzZXQgSW5mbw__---0"
    );
surplusBtn.innerHTML += "<button id='surplusBtn'>Copy surplus information</button>";
document.getElementById("surplusBtn").addEventListener("click", getOutput);
