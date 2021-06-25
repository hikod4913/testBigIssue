var areaShows = document.querySelectorAll(".areaShow")
var areaMaps = document.querySelectorAll(".areaMap")

for (let index = 0; index < areaShows.length; index++){
    const areaShow = areaShows[index];
    const areaMap = areaMaps[index];

    areaShow.onclick = function () {
        clearAllActive()
        areaShow.classList.add("areaOn")
        areaMap.classList.add("mapOn")
    }
}

function clearAllActive() {
    for (let index = 0; index < areaShows.length; index++){
        const areaShow = areaShows[index];
        const areaMap = areaMaps[index];
        areaShow.classList.remove("areaOn")
        areaMap.classList.remove("mapOn")
    }
}
// -----------------------------------------------------------------------

var mobileAreas = document.querySelectorAll(".mobileArea")
var mobileStores = document.querySelectorAll(".mobileStore")

for (let index = 0; index < mobileAreas.length; index++) {
    const mobileArea = mobileAreas[index];
    const mobileStore = mobileStores[index];

    mobileArea.onclick = function () {
        clearAllShow()
        mobileArea.classList.add("areaOpen")
        mobileStore.classList.add("storeOn")
    }
}

function clearAllShow() {
    for (let index = 0; index < mobileAreas.length; index++) {
        const mobileArea = mobileAreas[index];
        const mobileStore = mobileStores[index];
        mobileArea.classList.remove("areaOpen")
        mobileStore.classList.remove("storeOn")
    }
}




// 
// var sideTitle = document.querySelector(".outlineFixed")
// console.log(sideTitle)
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 1080) {
//         sideTitle.classList.add('active')

//     } else {
//         sideTitle.classList.remove('active')


//     }
// };