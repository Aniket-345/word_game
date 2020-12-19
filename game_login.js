function login(){
    player1=document.getElementById("player_1_name").value;
    player2=document.getElementById("player_2_name").value;
    localStorage.setItem("player_1",player1);
    localStorage.setItem("player_2",player2);
    window.location="game_page.html";
}