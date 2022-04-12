
function getOutput() {
    let name = document.getElementById("TitleBox--_Asset_Display_html--asset-basics----QmFzaWNz---0").getElementsByClassName("asset-name");
    let description = document.getElementById("TitleBox--_Asset_Display_html--asset-basics----QmFzaWNz---0").getElementsByClassName("asset-description");
    let serial = document.getElementById("CF-19-ShowRow").getElementsByClassName("value");
    let tag = document.getElementById("CF-23-ShowRow").getElementsByClassName("value");
    
    let fullStr = name[0].innerText.substring(6) + "\n" + description[0].innerText.substring(13) + "\n" + "Serial Number: " + serial[0].innerText + "\n" + "UT Tag: " + tag[0].innerText;

    console.log(fullStr);
    let copied = navigator.clipboard.writeText(fullStr);
}

let surplusBtn = document.getElementById(
    "TitleBox--_Asset_Display_html--asset-info-cfs_asset-info-cfs-Asset_Info----QXNzZXQgSW5mbw__---0"
    );
surplusBtn.innerHTML += "<button id='surplusBtn'>Copy surplus information</button>";
document.getElementById("surplusBtn").addEventListener("click", getOutput);
