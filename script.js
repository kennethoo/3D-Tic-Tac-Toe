 playerX = 0,
    playerO = 0,
    game_over = false,
    score = [0,0],
    moves = 0;


function startGame(){
  

    for (var i= 1; i<=27; i++) {
       clearBox(i);
    }
    document.turn = "X";
   if (Math.random () < 0.5){
    document.turn="O" ;
   }
    document.winner=null;
        setMessage(  "Player "+ document.turn + " turn.");
  }
  function setMessage(msg) { 
   document.getElementById("message").innerText = msg;
  }
  function nextMove(square){
    if(document.winner != null) {
      setMessage(document.winner +"   won the Game."); 
    }
       else if(square.innerText=="") {
    square.innerText = document.turn;
    switchTurn();
 } 
  }

  function switchTurn(){

         if (checkForWinner(document.turn)){
                setMessage( "Player " + document.turn + "  You win!");
                document.winner = document.turn;


                     if (document.winner =="X") {   
                               //update display   
                               { score[playerX]++;   document.getElementById('X_score').innerHTML = " "+score[0];

                               
                               }  
                                 
                                }
                                playerO = playerX ===0?1:0;
                                  

                     if (document.winner == "O" ) {      
                                      
                { score[playerO]++;    document.getElementById('O_score').innerHTML = " "+score[1];
                                
                               }                   
                }
                       playerO = playerX ===0?0:0;
                              

            } else if (checkDraw()){
                        setMessage("Draw");
            }else if (document.turn == "X"){
                document.turn ="O";
                
                setMessage( "Player "+ document.turn + " turn ");

            } else if (document.turn = "O") {
                       document.turn ="X";
                setMessage( "Player "+ document.turn + " turn ");   
            }   
        } 
         

        
  function checkForWinner(move){
    var result = false;
    if(checkRow(1, 2, 3, move) ||
       checkRow(4, 5, 6, move) ||
       checkRow(7, 8, 9, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(3, 6, 9, move) ||
       checkRow(1, 5, 9, move) ||
       checkRow(3, 5, 7, move) ||
       checkRow(10, 11, 12, move) ||
       checkRow(13, 14, 15, move) ||
       checkRow(16, 17, 18, move) ||
       checkRow(10, 13, 16, move) ||
       checkRow(11, 14, 17, move) ||
       checkRow(12, 15, 18, move) ||
       checkRow(10, 14, 18, move) ||
       checkRow(12, 14, 16, move) ||
       checkRow(19, 20, 21, move) ||
       checkRow(22, 23, 24, move) ||
       checkRow(25, 26, 27, move) ||
       checkRow(19, 22, 25, move) ||
       checkRow(20, 23, 26, move) ||
       checkRow(21, 24, 27, move) ||
       checkRow(19, 23, 27, move) ||
       checkRow(21, 23, 25, move) ||
       checkRow(1,  10, 19, move) ||
       checkRow(4,  13, 22, move) ||
       checkRow(7, 16, 25, move) ||
       checkRow(2, 11, 20, move) ||
       checkRow(5, 14, 23, move) ||
       checkRow(8, 17, 26, move) ||
       checkRow(3, 12, 21, move) ||
       checkRow(6, 15, 24, move) ||
       checkRow(9, 18, 27, move) ||
       checkRow(1, 11, 21, move) ||
       checkRow(3, 11, 19, move) ||
       checkRow(1, 13, 25, move) ||
       checkRow(7, 13, 19, move) ||
       checkRow(3, 15, 27, move) ||
       checkRow(9, 15, 21, move) ||
       checkRow(7, 17, 27, move) ||
       checkRow(9, 17, 25, move) ||
       checkRow(1, 14, 27, move) ||
       checkRow(2, 14, 26, move) ||
       checkRow(3, 14, 25, move) ||
       checkRow(4, 14, 24, move) ||
       checkRow(6, 14, 22, move) ||
       checkRow(7, 14, 21, move) ||
       checkRow(8, 14, 20, move) ||
       checkRow(9, 14, 19, move)) {
      result =true;
    }
       return result;
    }
    function checkRow(a, b, c, move) {
      var result = false;
      if( getBox(a) ==move && getBox(b)==move && getBox(c) ==move) {
        result = true;
      }
      return result;
    }
    function getBox(number) {
    return document.getElementById("s" + number).innerText;
    }
   function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
   }
    
    
        function checkDraw(){
            for (var i = 1; i <= 27; i = i + 1) 
                if(getBox(i)=="")
                    return false;
            return true;
        
 }
 

 function reloadThePage(){
    window.location.reload();

} 
function goBack() {
  window.history.back();
}