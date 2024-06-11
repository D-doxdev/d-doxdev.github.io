var dragValue = null;
var resizeValue = null;
var offsetX, offsetY;
var startX, startY, startWidth, startHeight;
var highestZIndex = 1;

function updateHighestZIndex() {
    var elements = document.querySelectorAll('.pages');
    highestZIndex = Array.from(elements).reduce((maxZIndex, element) => {
        var zIndex = parseInt(window.getComputedStyle(element).zIndex, 10);
        return zIndex > maxZIndex ? zIndex : maxZIndex;
    }, 0);
}

function bringToFront(element) {
    updateHighestZIndex();
    element.style.zIndex = highestZIndex + 1;
    highestZIndex += 1;
}

function moveAndResize() {
    var elements = document.querySelectorAll('.pages');
    
    elements.forEach(function(element) {
        var titleBar = element.querySelector(".title-bar");
        var resizer = document.createElement('div');
        resizer.style.width = '5px';
        resizer.style.height = '5px';
        resizer.style.background = 'grey';
        resizer.style.position = 'absolute';
        resizer.style.right = '0';
        resizer.style.bottom = '0';
        resizer.style.cursor = 'se-resize';
        element.appendChild(resizer);

        titleBar.onmousedown = function(event) {
            bringToFront(element);
            dragValue = element;
            offsetX = event.clientX - dragValue.getBoundingClientRect().left;
            offsetY = event.clientY - dragValue.getBoundingClientRect().top;

            document.onmousemove = function(e) {
                element.style.position = "absolute";
                if (dragValue) {
                    var x = e.clientX - offsetX;
                    var y = e.clientY - offsetY;
                    dragValue.style.left = x + "px";
                    dragValue.style.top = y + "px";
                }
            }

            document.onmouseup = function() {
                dragValue = null;
                document.onmousemove = null;
            }
        }

        resizer.onmousedown = function(event) {
            bringToFront(element);
            resizeValue = element;
            startX = event.clientX;
            startY = event.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(resizeValue).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(resizeValue).height, 10);

            document.onmousemove = function(e) {
                if (resizeValue) {
                    resizeValue.style.width = (startWidth + e.clientX - startX) + 'px';
                    resizeValue.style.height = (startHeight + e.clientY - startY) + 'px';
                }
            }

            document.onmouseup = function() {
                resizeValue = null;
                document.onmousemove = null;
            }
        }
    });
}

window.onload = function() {
    moveAndResize();
}

// Function for switching between camptaign members info
let adamInfo = document.getElementsByTagName('li')[0];
let almaInfo = document.getElementsByTagName('li')[1];
let victorInfo = document.getElementsByTagName('li')[2];
let amandaInfo = document.getElementsByTagName('li')[3];
let jacobInfo = document.getElementsByTagName('li')[4];
let atonInfo = document.getElementsByTagName('li')[5];
let nicholasInfo = document.getElementsByTagName('li')[6];

let memberArr = [adamInfo, almaInfo, victorInfo, amandaInfo, jacobInfo, atonInfo, nicholasInfo]

function ariaSelectTrue(member) {
    return member.ariaSelected = true;
}

// Gets the reference for the elements in the HTML document
let irlName = document.getElementById('text1');
let characterName = document.getElementById('text2');
let characterClass = document.getElementById('text3');
let characterRace = document.getElementById('text4');
let irlMemberImg = document.getElementById('member-irl-img');
let dndCharImg = document.getElementById('dnd-char-img');
let charDescription = document.getElementById('textdesc');

/* func for changing wich tag is selected using ariaselect and
if-statements that changes the information. */
memberArr.forEach(member => {
    member.onclick = function() {
        memberArr.forEach(m => m.setAttribute('aria-selected', 'false'));
        ariaSelectTrue(member);
        if(member === adamInfo) {
            irlName.value = 'Adam';
            characterName.value = 'Sphix Mycok';
            characterClass.value = 'Rogue';
            characterRace.value = 'Kille Harengon';
            irlMemberImg.src = './recources/images/members/profile-images/adamprofile.jpg';
            dndCharImg.src = './recources/images/members/member-characters/adamcharacter.png';
        } else if(member === almaInfo) {
            irlName.value = 'Alma';
            characterName.value = 'Seraphina Songbird';
            characterClass.value = 'Bard';
            characterRace.value = 'Aasimar';
            irlMemberImg.src = './recources/images/members/profile-images/almaprofile.jpg';
            dndCharImg.src = './recources/images/members/member-characters/almacharacter.png';
        } else if(member === victorInfo) {
            irlName.value = 'Victor';
            characterName.value = 'Alden Nightspawn';
            characterClass.value = 'Ranger';
            characterRace.value = 'Elf';
            irlMemberImg.src = './recources/images/members/profile-images/victorprofile.png';
            dndCharImg.src = './recources/images/members/member-characters/victorcharacter.png';
        } else if(member === amandaInfo) {
            irlName.value = 'Amanda';
            characterName.value = 'Jude Brightbinder';
            characterClass.value = 'Cleric';
            characterRace.value = 'Human';
            irlMemberImg.src = './recources/images/members/profile-images/amandaprofile.png';
            dndCharImg.src = './recources/images/members/member-characters/defaultcharacter.png';
        } else if(member === jacobInfo) {
            irlName.value = 'Jacob';
            characterName.value = 'Zyzz';
            characterClass.value = 'Paladin';
            characterRace.value = 'Aasimar';
            irlMemberImg.src = './recources/images/members/profile-images/jacobprofile.png';
            dndCharImg.src = './recources/images/members/member-characters/jacobcharacter.png';
        } else if(member === atonInfo) {
            irlName.value = 'Anton';
            characterName.value = 'Antioch';
            characterClass.value = 'Juggernaut Fighter';
            characterRace.value = 'Warforged';
            irlMemberImg.src = './recources/images/members/profile-images/antonprofile.png';
            dndCharImg.src = './recources/images/members/member-characters/antoncharacter.png';
        } else if(member === nicholasInfo) {
            irlName.value = 'Nicholas';
            characterName.value = 'Nyxxalas';
            characterClass.value = 'Warlock';
            characterRace.value = 'Dwarf';
            irlMemberImg.src = './recources/images/members/profile-images/nicholasprofile.jpg';
            dndCharImg.src = './recources/images/members/member-characters/nicholascharacter.png';
            charDescription.value = "Origin story In the vibrant city of Mount Graywalk, where fortunes were made and lost with the roll of the dice, Nyxalas Coinbind was not merely a dwarf; he was a renowned professional gambler -originally from Coldborough. His nimble fingers could shuffle cards with unparalleled skill, and his sharp mind could calculate odds and assess risks with a precision that made him a legend in the underground gambling dens. Known for his audacity, Nyxalas found himself in a high-stakes game against none other than Zarkathirax the Goldhoarder, a dragon who reveled in the thrill of chance and craved the excitement that mortal games of luck brought. The stakes were set high – Nyxalas wagered a colossal sum, thinking he could outwit the ancient dragon in a game of chance. However, luck proved fickle, and the tide turned against him. As the dice settled and the cards were revealed, Nyxalas found himself facing a debt he could never hope to repay. Zarkathirax, reveling in the dwarf's misfortune, offered him a sinister proposition. Instead of suffering the consequences of his failed gamble, Nyxalas could choose a different path – a pact with the Undying. The pact would afford Nyxalas time to repay his debt. Desperation and the looming specter of financial ruin pushed Nyxalas to accept the dragon's terms. The pact was sealed, and Nyxalas became an Undying warlock, forever bound to the dragon's will. In return, he gained the power to cheat death and manipulate the threads of fate, a boon that served him well in both gambling and his newfound servitude. Now, Nyxalas roams the realms as a gambler on the edge of life and death, his every move dictated by the whims of Zarkathirax. He seeks opportunities to amass wealth and power, using his Undying abilities to navigate the dangerous underworld of gambling and intrigue. Yet, beneath the bravado and the glimmer of gold, Nyxalas yearns to break free from the eternal game he plays, searching for elusive artifacts and forbidden knowledge that might one day allow him to reclaim his autonomy and settle the unpayable debt that binds him to the cunning dragon. Relationship with others: Zarkathirax the Goldhoarder: A tumultuous alliance marked by Nyxalas's stark realization that he has fallen victim to a wager, bound by the unyielding terms set forth. Despite the unavoidable adherence to the agreed-upon terms, a simmering resentment festers within Nyxalas towards Zarkathirax, an ember of discontent burning beneath the surface of their intricate and strained relationship.";
        }
    };
});

// Campaign members



/* Alma info func */

/*
almaInfo.onclick = function() {
    irlName.value = 'Alma';
  }
  */