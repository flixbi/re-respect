/*
* <re:respect>
* Jugend hackt
* Autoren: Anton, Manolo, Björn, Felix 
* TODO: fix it!
*/

// Variables
var not_loaded = true;

// Interfaces
function AddFormInfoToSession(forming) {
    sessionStorage.setItem('c24df9856f4a06331a6ae9d9393a79b6', forming);
}

/*
// Other functions
function addChild(doc, parent, child, childText, attributes) {
    var childNode;
    if (typeof child == "string") {
        childNode = doc.createElement(child);
    } else {
        childNode = child;
    }
    if (typeof childText == "string") {
        var childTextNode;
        childTextNode = doc.createTextNode(childText);
        childNode.appendChild(childTextNode);
    }
    if (attributes) {
        for (var att in attributes) {
            childNode.setAttribute(att,attributes[att]);
        }
    }
    parent.appendChild(childNode);
    return childNode;
}*/

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function placeButtonOnMainArticle() {
    console.log("Placing Button on Main Article.");
    var elements = document.getElementsByTagName("article");
    console.log(elements[0]);
    console.log("Placed Button on Main article.");
}

function placeButtonOnAnswer() {
    for (var i = 0; i <= elements.length; i++) {
        console.log(i);
        //elements[i].innerHTML = '<p style="color: red;">Hiii!</p>';
    }
}

function placeButtons() {
//    placeButtonOnMainArticle();
    placeButtonInDropDown();
}

function placeButtonInDropDown() {
    console.log("placeButtonInDropDown");
    var everyLastInDropDown = document.querySelectorAll("a[href='/robbietilton/status/1183977329661374465/hidden']");
    console.log(everyLastInDropDown);
    //document.getElementById("myList2").lastChild
}

setTimeout(function() {}, 3000);

function log() {
    console.log("MOIN");
}


var elements = document.getElementsByClassName("r-k200y");
elements.item(0).innerHTML += '<button style="transform: translateX(-50px)" onclick="log();">Test</button>';

/*
document.getElementsByClassName("r-podbf7").addEventListener("click", placeButtonInDropDown());
var menuElements = document.getElementsByClassName("r-9qu9m4");
var firstElement = menuElements.item(0);
firstElement.innerHTML += '<a aria-haspopup="false" href="/HP/status/1184846553917341696/hidden" role="menuitem" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-18u37iz r-1j3t67a r-9qu9m4 r-o7ynqc r-1j63xyz r-13qz1uu"><svg viewBox="0 0 24 24" class="r-111h2gw r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-zso239 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M11.384 5.976c-.2 0-.39-.08-.53-.22s-.22-.34-.22-.53c0-.2.08-.4.22-.532.27-.28.78-.28 1.06 0 .14.14.22.33.22.53 0 .19-.08.39-.22.532-.14.14-.34.22-.53.22zm3.486 16.309c0-.41.34-.75.75-.75.42 0 .75.34.75.75 0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75zm-3.045 0c0-.41.33-.75.75-.75.412 0 .752.34.752.75 0 .42-.34.75-.75.75-.422 0-.752-.33-.752-.75zm-3.054 0c0-.41.33-.75.752-.75.41 0 .75.34.75.75 0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75zm-3.052 0c0-.41.34-.75.75-.75.422 0 .752.34.752.75 0 .42-.33.75-.75.75-.412 0-.752-.33-.752-.75zm-3.054 0c0-.41.34-.75.75-.75.422 0 .752.34.752.75 0 .42-.33.75-.75.75-.412 0-.752-.33-.752-.75zm15.368-.06c-.35-.22-.47-.68-.25-1.03.22-.36.68-.472 1.03-.25.36.22.472.68.25 1.03-.14.23-.39.36-.64.36-.13 0-.27-.04-.39-.11zM.822 20.453c0-.42.34-.75.75-.75s.752.33.752.75c0 .41-.34.75-.75.75s-.752-.34-.752-.75zm17.07-1.883c0-.41.33-.75.75-.75.41 0 .752.34.752.75 0 .42-.34.75-.75.75-.42 0-.752-.33-.752-.75zM.822 17.398c0-.41.34-.75.75-.75s.752.34.752.75c0 .42-.34.75-.75.75S.82 17.82.82 17.4zm17.07-1.87c0-.422.33-.762.75-.762.41 0 .752.34.752.76 0 .41-.34.752-.75.752-.42 0-.752-.342-.752-.75zM.822 14.344c0-.41.34-.75.75-.75s.752.34.752.75c0 .42-.34.75-.75.75s-.752-.33-.752-.75zm0-3.044c0-.42.34-.75.75-.75s.752.33.752.75c0 .412-.34.752-.75.752s-.752-.34-.752-.75zm0-3.052c0-.41.34-.75.75-.75s.752.34.752.75-.34.75-.75.75S.82 8.66.82 8.25zm.81-2.414c-.22-.35-.11-.81.24-1.03.35-.22.822-.11 1.042.24.21.35.11.82-.25 1.03h.01c-.13.08-.27.12-.4.12-.25 0-.5-.13-.64-.36zm5.948-.61c0-.42.34-.75.75-.75.422 0 .752.33.752.75 0 .412-.33.752-.75.752-.412 0-.752-.342-.752-.75zm-3.054 0c0-.42.34-.75.75-.75.422 0 .752.33.752.75 0 .412-.33.752-.75.752-.41 0-.752-.342-.752-.75zm14.117 7.979c-.2 0-.39-.08-.53-.21-.14-.14-.22-.34-.22-.53 0-.2.08-.4.22-.542.28-.28.78-.28 1.06 0 .14.14.22.34.22.542 0 .19-.08.38-.22.53-.14.13-.34.21-.53.21zm-5.393-2.491H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.337.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.336.75.75 0 .416-.335.752-.75.752zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.305 6.41h-3.012c-.414 0-.75-.337-.75-.752 0-.414.335-.75.75-.75h3.012c.414 0 .75.335.75.75s-.335.75-.75.75z"></path><path d="M18.64 10.292c-2.577 0-4.674-2.096-4.674-4.675 0-2.578 2.097-4.675 4.675-4.675 2.58 0 4.676 2.097 4.676 4.675s-2.098 4.675-4.675 4.675zm0-7.848c-1.75 0-3.172 1.423-3.172 3.173S16.89 8.79 18.64 8.79s3.174-1.423 3.174-3.173-1.424-3.173-3.173-3.173z"></path></g></svg><div class="css-1dbjc4n r-1wbh5a2"><div dir="auto" class="css-901oao r-jwli3a r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">View hidden replies</span></div></div></a>';

menuElements.parent().innerHTML += '<a aria-haspopup="false" href="/HP/status/1184846553917341696/hidden" role="menuitem" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-18u37iz r-1j3t67a r-9qu9m4 r-o7ynqc r-1j63xyz r-13qz1uu"><svg viewBox="0 0 24 24" class="r-111h2gw r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-zso239 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M11.384 5.976c-.2 0-.39-.08-.53-.22s-.22-.34-.22-.53c0-.2.08-.4.22-.532.27-.28.78-.28 1.06 0 .14.14.22.33.22.53 0 .19-.08.39-.22.532-.14.14-.34.22-.53.22zm3.486 16.309c0-.41.34-.75.75-.75.42 0 .75.34.75.75 0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75zm-3.045 0c0-.41.33-.75.75-.75.412 0 .752.34.752.75 0 .42-.34.75-.75.75-.422 0-.752-.33-.752-.75zm-3.054 0c0-.41.33-.75.752-.75.41 0 .75.34.75.75 0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75zm-3.052 0c0-.41.34-.75.75-.75.422 0 .752.34.752.75 0 .42-.33.75-.75.75-.412 0-.752-.33-.752-.75zm-3.054 0c0-.41.34-.75.75-.75.422 0 .752.34.752.75 0 .42-.33.75-.75.75-.412 0-.752-.33-.752-.75zm15.368-.06c-.35-.22-.47-.68-.25-1.03.22-.36.68-.472 1.03-.25.36.22.472.68.25 1.03-.14.23-.39.36-.64.36-.13 0-.27-.04-.39-.11zM.822 20.453c0-.42.34-.75.75-.75s.752.33.752.75c0 .41-.34.75-.75.75s-.752-.34-.752-.75zm17.07-1.883c0-.41.33-.75.75-.75.41 0 .752.34.752.75 0 .42-.34.75-.75.75-.42 0-.752-.33-.752-.75zM.822 17.398c0-.41.34-.75.75-.75s.752.34.752.75c0 .42-.34.75-.75.75S.82 17.82.82 17.4zm17.07-1.87c0-.422.33-.762.75-.762.41 0 .752.34.752.76 0 .41-.34.752-.75.752-.42 0-.752-.342-.752-.75zM.822 14.344c0-.41.34-.75.75-.75s.752.34.752.75c0 .42-.34.75-.75.75s-.752-.33-.752-.75zm0-3.044c0-.42.34-.75.75-.75s.752.33.752.75c0 .412-.34.752-.75.752s-.752-.34-.752-.75zm0-3.052c0-.41.34-.75.75-.75s.752.34.752.75-.34.75-.75.75S.82 8.66.82 8.25zm.81-2.414c-.22-.35-.11-.81.24-1.03.35-.22.822-.11 1.042.24.21.35.11.82-.25 1.03h.01c-.13.08-.27.12-.4.12-.25 0-.5-.13-.64-.36zm5.948-.61c0-.42.34-.75.75-.75.422 0 .752.33.752.75 0 .412-.33.752-.75.752-.412 0-.752-.342-.752-.75zm-3.054 0c0-.42.34-.75.75-.75.422 0 .752.33.752.75 0 .412-.33.752-.75.752-.41 0-.752-.342-.752-.75zm14.117 7.979c-.2 0-.39-.08-.53-.21-.14-.14-.22-.34-.22-.53 0-.2.08-.4.22-.542.28-.28.78-.28 1.06 0 .14.14.22.34.22.542 0 .19-.08.38-.22.53-.14.13-.34.21-.53.21zm-5.393-2.491H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.337.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.336.75.75 0 .416-.335.752-.75.752zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.305 6.41h-3.012c-.414 0-.75-.337-.75-.752 0-.414.335-.75.75-.75h3.012c.414 0 .75.335.75.75s-.335.75-.75.75z"></path><path d="M18.64 10.292c-2.577 0-4.674-2.096-4.674-4.675 0-2.578 2.097-4.675 4.675-4.675 2.58 0 4.676 2.097 4.676 4.675s-2.098 4.675-4.675 4.675zm0-7.848c-1.75 0-3.172 1.423-3.172 3.173S16.89 8.79 18.64 8.79s3.174-1.423 3.174-3.173-1.424-3.173-3.173-3.173z"></path></g></svg><div class="css-1dbjc4n r-1wbh5a2"><div dir="auto" class="css-901oao r-jwli3a r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">View hidden replies</span></div></div></a>';

console.log(arrow);
console.log(menuElements);

/*
*
*  class="css-1dbjc4n r-1j3t67a"
*
* r-a2tzq0 => First
* r-1mdbhws => Kommentare only
*
**/
