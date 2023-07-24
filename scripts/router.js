var navBtn = document.querySelectorAll("#navBar button");

// function navBtnClick () {
//     navBtn.addEvent
// }
for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", router);
}

function router(e) {
    var current = e.currentTarget;

    var btnId = current.id;

    if (btnId == "home") {
        window.location.href="/index.html";
    }else if (btnId == "profile") {
        window.location.href="/src/profile.html";
    } else if (btnId == "workHistory") {
        window.location.href="/src/workHistory.html";
    } else if (btnId == "eduBackground") {
        window.location.href="/src/eduBackground.html";
    } else if (btnId == "projectHistory") {
        window.location.href="/src/projectHistory.html";
    }
}

// 获取当前url
var pageUrl = new URL(window.location.href);

// 截取url路径部分并分割路径字符串
var pageUrlSplit = pageUrl.pathname.split('/');

// 获取当前event文件夹名，即solution类型
var currentPageName = pageUrlSplit[pageUrlSplit.length - 1];

// 修改页面tab标签名
document.getElementsByTagName("title")[0].innerText = currentPageName;

