var iniciarPartida = false; //Estado false hasta que de click a empezar a jugar
var turno = 0; //variable para saber cuál es el turno
var juego = new Array();

window.onload = function () {
    let start = document.getElementById("botonInicio");
    botonInicio.addEventListener("click", iniciar);
}

function iniciar() {
    iniciarPartida = true;
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    if (player1.value == "") {
        alert("Inserta el nombre del player 1");
    } else {
        if (player2.value == "") {
            alert("Inserta el nombre del player 2");
        } else {
            juego[0] = document.getElementById("c0");
            juego[1] = document.getElementById("c1");
            juego[2] = document.getElementById("c2");
            juego[3] = document.getElementById("c3");
            juego[4] = document.getElementById("c4");
            juego[5] = document.getElementById("c5");
            juego[6] = document.getElementById("c6");
            juego[7] = document.getElementById("c7");
            juego[8] = document.getElementById("c8");

            for (var i = 0; i < 9; i++) {
                juego[i].className = "botonEmpezar";
                juego[i].value = "I";
            }
            turno = 1;
            document.getElementById("turnoPlayer").innerHTML = "Turno de " + player1.value;
        }
    }
}

function play(button) {
    if (iniciarPartida == true) {
        if (turno == 1 && button.value == "I") {
            turno = 2;
            document.getElementById("turnoPlayer").innerHTML = "Turno de " + player2.value;
            button.value = "X";
            button.className = " botonPlayer1"

        } else {
            if (turno == 2 && button.value == "I") {
                turno = 1;
                document.getElementById("turnoPlayer").innerHTML = "Turno de " + player1.value;
                button.value = "O";
                button.className = " botonPlayer2"
            }
        }
    }

    quienGana();
}

/* POSIBILIDADES DE GANAR*/

function quienGana() {
    if ((juego[0].value == "X" && juego[1].value == "X" && juego[2].value == "X")
        || (juego[3].value == "X" && juego[4].value == "X" && juego[5].value == "X")
        || (juego[6].value == "X" && juego[7].value == "X" && juego[8].value == "X")
        || (juego[0].value == "X" && juego[3].value == "X" && juego[6].value == "X")
        || (juego[1].value == "X" && juego[4].value == "X" && juego[7].value == "X")
        || (juego[2].value == "X" && juego[5].value == "X" && juego[8].value == "X")
        || (juego[0].value == "X" && juego[4].value == "X" && juego[8].value == "X")
        || (juego[2].value == "X" && juego[4].value == "X" && juego[6].value == "X")

    ) {
        alert('Player ' + player1.value + ' WINS!');
        iniciarPartida = false;
    }

    if ((juego[0].value == "O" && juego[1].value == "O" && juego[2].value == "O")
        || (juego[3].value == "O" && juego[4].value == "O" && juego[5].value == "O")
        || (juego[6].value == "O" && juego[7].value == "O" && juego[8].value == "O")
        || (juego[0].value == "O" && juego[3].value == "O" && juego[6].value == "O")
        || (juego[1].value == "O" && juego[4].value == "O" && juego[7].value == "O")
        || (juego[2].value == "O" && juego[5].value == "O" && juego[8].value == "O")
        || (juego[0].value == "O" && juego[4].value == "O" && juego[8].value == "O")
        || (juego[2].value == "O" && juego[4].value == "O" && juego[6].value == "O")
    ) {
        alert('Player ' + player2.value + ' WINS');
        iniciarPartida = false;
    }

}


