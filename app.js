const first_player_value = document.querySelector(".first-player-value");
const second_player_value = document.querySelector(".second-player-value");

const current_fp_value = document.querySelector(".current-value-first");
const current_sp_value = document.querySelector(".current-value-second");

const dice_value = document.querySelector(".dice-value");

const role_dice_btn = document.querySelector(".role-dice");
const hold_btn = document.querySelector(".hold")
const newgame_btn = document.querySelector(".btn_new")


//function *************
let first = "first";
let second = "second";
let turn = first;

const whos_turn = () => {
    if (turn == first){
        turn = second;
    }
    else if (turn == second) {
        turn = first;
    }
    // console.log(turn);
};
//*************

// hold_btn.addEventListener("click", () => {
//     whos_turn();
//     // if (turn == first) {
//     //     turn = second;
//     // }
//     // else if (turn == second) {
//     //     turn = first;
//     // }
//     // console.log(turn);
// });

let total = 0;
let total2 = 0
role_dice_btn.addEventListener("click", () => {
    let dice = Math.floor((Math.random() * 6) + 1);
    // console.log(dice);

    if (dice == 1) {
        whos_turn();
        current_fp_value.value = 0;
        current_fp_value.innerHTML = current_fp_value.value;
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
});