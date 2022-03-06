const first_player_value = document.querySelector(".first-player-value");
const second_player_value = document.querySelector(".second-player-value");

const current_fp_value = document.querySelector(".current-value-first");
const current_sp_value = document.querySelector(".current-value-second");

const dice_value = document.querySelector(".dice-value");

const role_dice_btn = document.querySelector(".role-dice");
const hold_btn = document.querySelector(".hold")
const newgame_btn = document.querySelector(".btn_new")

const turn_now = document.querySelector(".turn");
const no_turn = document.querySelector(".no-turn");

//function *****
let first = "first";
let second = "second";
let turn = first;

const whos_turn = () => {
    if (turn == first){
        turn_now.className = "no-turn";
        no_turn.className = "turn";
        turn = second;
    }
    else if (turn == second) {
        turn_now.className = "turn";
        no_turn.className = "no-turn";
        turn = first;
    }
    // console.log(turn);
};
//*****


let total = 0;
let total2 = 0

role_dice_btn.addEventListener("click", () => {
    let dice = Math.floor((Math.random() * 6) + 1);
    // console.log(dice);

    if (dice == 1) {
        whos_turn();
        
        total = 0;
        current_fp_value.value = 0;
        current_fp_value.innerHTML = current_fp_value.value;

        total2 = 0;
        current_sp_value.value = 0;
        current_sp_value.innerHTML = current_sp_value.value;
    }

    dice_value.value = dice;
    dice_value.textContent = dice_value.value;
    
    // console.log(typeof dice);
    if (turn == first){
        total += dice;
        // console.log(total);
        current_fp_value.innerHTML = total;
        current_fp_value.textContent = current_fp_value.innerHTML;
    }
    else if (turn == second){
        total2 += dice;
        // console.log(total);
        current_sp_value.innerHTML = total2;
        current_sp_value.textContent = current_sp_value.innerHTML;
    }
});
first_player_value.value = 0;
second_player_value.value = 0;
hold_btn.addEventListener("click", () => {
    dice_value.value = 0;
    dice_value.innerHTML = dice_value.value;
    // current_fp_value.textContent = 0;
    if (turn == first) {
        // console.log(first_player_value.value);
        first_player_value.value += Number(current_fp_value.innerHTML);
        // console.log(first_player_value.value);
        first_player_value.innerHTML = first_player_value.value;
        total = 0;
        current_fp_value.value = 0;
        current_fp_value.innerHTML = current_fp_value.value;
    }
    else if(turn == second) {
        // console.log(second_player_value.value);
        second_player_value.value += Number(current_sp_value.innerHTML);
        // console.log(second_player_value.value);
        second_player_value.innerHTML = second_player_value.value;
        total2 = 0;
        current_sp_value.value = 0;
        current_sp_value.innerHTML = current_sp_value.value;
    }
    whos_turn();

    setTimeout(() => {
        if (first_player_value.value >= 50) {
            alert("Player 1 WON")
            window.location.reload();
        }else if(second_player_value.value >= 50) {
            alert("Player 2 WON")
            window.location.reload();
        }
    }, 0);
});

// newgame_btn.addEventListener("click", () => {
//     window.location.reload();
// });