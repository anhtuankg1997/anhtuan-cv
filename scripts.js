let currentHeaderId = '';
let headerBtn = document.getElementById('btn');
let contentHeaderText = document.getElementById('header-content-section-text');
let sidebarSmallScreen = document.getElementById('sidebar');
let sidebarLeft =  document.getElementById('sidebar-left');
let sidebarBigScreen = document.getElementById('cbody-left');
let headerbar = document.getElementById('headerbar');

let currentHeaderElement;


let headerItemList = [
    {
        index: 0,
        idName: 'about',
        text: 'About me'
    },
    {
        index: 1,
        idName: 'education',
        text: 'Education'
    },
    {
        index: 2,
        idName: 'skills',
        text: 'Skills'
    },
    {
        index: 3,
        idName: 'products',
        text: 'Products'
    }
]

function initialize(){
    let firstHeaderItem = document.getElementById('about');
    sidebarSmallScreen.style.display = "none";
    clickHeaderItem(firstHeaderItem);
}




function clickHeaderItem(headerItem){
    currentHeaderElement = headerItem;  //To responsive

    //Change header background color width
    headerBtn.style.left = headerItem.offsetLeft+'px';
    headerBtn.style.width = headerItem.offsetWidth + 'px';

    //Clear text header to default color
    let curr = 0;

     if(headerItem.id === currentHeaderId) return;
    removeLineSkillClass();

    headerItemList.forEach(function (headerItemObject){

        if(headerItem.id ===  headerItemObject.idName){

            headerItem.style.left = '0';
            headerItem.style.color = 'white';
            contentHeaderText.innerHTML = `<h2 class="content-header-text">${headerItemObject.text}</h2>`;

            document.getElementById(`${headerItemObject.idName}-content`).style.left = '0';

            //Just for skills tab
            if(headerItem.id === headerItemList[2].idName){
                let allProgressLine = document.querySelectorAll('.skill-progress-line');
                let allExpLine = document.querySelectorAll('.exp-progress-line');

               setTimeout(function (){
                   allProgressLine.forEach(function (item){
                       item.classList.add('skill-progress-ani');
                   });
                   allExpLine.forEach(function (item){
                       item.classList.add('exp-progress-ani');
                   });
               }, 500);
            }

            curr = 1;
            currentHeaderId = headerItemObject.idName;
            headerItem.classList.remove('header-item-hover');
        }else if(curr === 0){
            document.getElementById(`${headerItemObject.idName}-content`).style.left = '-570px';
            document.getElementById(`${headerItemObject.idName}`).style.color = "rgba(42,42,42,0.8)";
            document.getElementById(`${headerItemObject.idName}`).classList.add('header-item-hover');
        }else{
            document.getElementById(`${headerItemObject.idName}-content`).style.left = '570px';
            document.getElementById(`${headerItemObject.idName}`).style.color = "rgba(42,42,42,0.8)";
            document.getElementById(`${headerItemObject.idName}`).classList.add('header-item-hover');
        }
    });
    changeScreenSize();
}

function removeLineSkillClass(){
    let allProgressLine = document.querySelectorAll('.skill-progress-line');
    let allExpLine = document.querySelectorAll('.exp-progress-line');

    allProgressLine.forEach(function (item){
        item.classList.remove('skill-progress-ani');
    });
    allExpLine.forEach(function (item){
        item.classList.remove('exp-progress-ani');
    });
}


function changeScreenSize(){
    //Change header background color width
    headerBtn.style.left = currentHeaderElement.offsetLeft+'px';
    headerBtn.style.width = currentHeaderElement.offsetWidth + 'px';

    // Hide and show sidebar
    if(window.innerWidth <= 800){
        sidebarBigScreen.style.display = "none";
        headerbar.style.display = "block";
    }else{
        sidebarBigScreen.style.display = "block";
        headerbar.style.display = "none";
        sidebarSmallScreen.style.display = "none";
    }

}


function clickOnHeaderItem(){
    sidebarSmallScreen.style.display = "inline-flex";
    sidebarLeft.style.transform = "translate(0, 0)";
}

function clickOnGrayScreen(){
    sidebarSmallScreen.style.display = "none";
    sidebarLeft.style.transform = "translate(-100%,0)";
}
