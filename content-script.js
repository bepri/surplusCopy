
function getOutput() {
    let name = document.getElementById("TitleBox--_Asset_Display_html--asset-basics----QmFzaWNz---0").innerHTML;
    console.log(name);
    let serial = document.getElementById("TitleBox--_Asset_Display_html--asset-info-cfs_asset-info-cfs-Asset_Info----QXNzZXQgSW5mbw__---0").innerHTML;
    console.log(serial);
}

let surplusBtn = document.getElementById(
    "TitleBox--_Asset_Display_html--asset-info-cfs_asset-info-cfs-Asset_Info----QXNzZXQgSW5mbw__---0"
    );
surplusBtn.innerHTML += "<button id='surplusBtn'>Copy surplus information</button>";
document.getElementById("surplusBtn").addEventListener("click", getOutput);
