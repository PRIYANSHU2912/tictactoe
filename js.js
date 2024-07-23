let statushead = document.querySelector(".status");
let currentplayer = 'X';
let boxes = document.querySelectorAll(".box");
let newgame = document.querySelector(".updatestatus");
let gamegrid = ['', '', '', '', '', '', '', '', ''];
currentplayer = 'X';
statushead.innerText = `Current Player - ${currentplayer}`;

boxes.forEach(function (item) {
    item.innerText = "";
    item.style.pointerEvents = "all";
});
newgame.classList.add("active");
newgame.addEventListener('click', initialh);
function initialh() {
    gamegrid = ['', '', '', '', '', '', '', '', ''];
    currentplayer = 'X';
    statushead.innerText = `Current Player - ${currentplayer}`;
    boxes.forEach(function (item) {
        item.classList.remove('color');
        item.innerText = "";
        item.style.pointerEvents = "all";
    });
    check();
}
initialh();
function check() {
    newgame.classList.remove('active');
    boxes.forEach(function (item, index) {
        if (item.innerText === "") {
            item.addEventListener('click', function () {

                if (gamegrid[index] === "") {
                    gamegrid[index] = currentplayer;
                    if (currentplayer === "X") {
                        item.innerText = `${currentplayer}`;
                        currentplayer = 'O';
                        statushead.innerText = `Current Player - ${currentplayer}`;
                        winningstatus();
                    }
                    else {
                        item.innerText = `${currentplayer}`;
                        currentplayer = 'X';
                        statushead.innerText = `Current Player - ${currentplayer}`;
                        winningstatus();

                    }
                }
            });
        }
    });
}


function setstill() {
    boxes.forEach(function (item) {
        item.style.pointerEvents = 'none';
    });
}


let winposition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

function winningstatus() {
    winposition.forEach(function (item) {
        if ((gamegrid[item[0]] !== '') && (gamegrid[item[1]] !== '') && (gamegrid[item[2]] !== '')) {
            if ((gamegrid[item[0]] === gamegrid[item[1]]) && (gamegrid[item[1]] === gamegrid[item[2]])) {
                currentplayer = gamegrid[item[0]];
                statushead.innerText = `Winner Player - ${currentplayer} 🤩`;
                setstill();
                newgame.classList.add("active");
                boxes[item[0]].classList.add('color');
                boxes[item[1]].classList.add('color');
                boxes[item[2]].classList.add('color');
            }
            else {
                let count = 0;
                gamegrid.forEach(function (item) {
                    if (item !== "") {
                        count++;
                    }
                });
                if (count === 9) {
                    if (statushead.innerText !== `Winner Player - ${currentplayer} 🤩`) {
                        statushead.innerText = `Match Tied`;
                        setstill();
                        newgame.classList.add("active");
                    }
                }
            }
        }

    });
}

