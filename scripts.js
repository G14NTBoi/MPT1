//JavaScript for Major Project 1

// set up player scores
Player1_score = 0;
Player2_score= 0;
// set up 3 in a row tracker.
Three_in_a_row = 0;

Clicked_TicTac_Slot = 0;


function Player_Click (){ //function that alternates the clicks between player 1 and player 2
  Slot_clicked = document.querySelectorAll(".clicked");
    for (Clicked_TicTac_Slot = 0; Clicked_TicTac_Slot <= 8; Clicked_TicTac_Slot++)
      {
        if (Clicked_TicTac_Slot % 2 != 0)
          {
           Slot_clicked.classList.contains("Player1"); 
          }
        else
        {
          Slot_clicked.classList.contains("Player2");
        }
      }
}
function Board_reset(Player1, Player2)
{
  Player1.classList.remove("clicked");
   Player2.classList.remove("clicked");
  
}
function CheckForRow() {
  Clicked_TicTac_Slot = document.querySelectorAll ("Slot");
  ThreeInARow = false;
  if (Clicked_TicTac_Slot[0].classList.contains("Player1") && Clicked_TicTac_Slot[2].classList.contains("Player1") && Clicked_TicTac_Slot[4].classList.contains("Player1"))
    {
      if (Slot_clicked.classList.contains("1") && Slot_clicked.classList.contains("2") && Slot_clicked.classList.contains("3") || Slot_clicked.classList.contains("4") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("6") || Slot_clicked.classList.contains("7") &&       Slot_clicked.classList.contains("8") && Slot_clicked.classList.contains("9") || Slot_clicked.classList.contains("1") && Slot_clicked.classList.contains("4") && Slot_clicked.classList.contains("7") ||  Slot_clicked.classList.contains("2") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("8") || Slot_clicked.classList.contains("3") && Slot_clicked.classList.contains("6") && Slot_clicked.classList.contains("9") || Slot_clicked.classList.contains("1") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("9") || Slot_clicked.classList.contains("3") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("7"))
          {
            ThreeInARow = true
            Player1_score++;
          }
          
         }
  else if(Clicked_TicTac_Slot[1].classList.contains("Player2") && Clicked_TicTac_Slot[3].classList.contains("Player2") && Clicked_TicTac_Slot[5].classList.contains("Player2"))
    {
            if (Slot_clicked.classList.contains("1") && Slot_clicked.classList.contains("2") && Slot_clicked.classList.contains("3") || Slot_clicked.classList.contains("4") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("6") || Slot_clicked.classList.contains("7") &&       Slot_clicked.classList.contains("8") && Slot_clicked.classList.contains("9") || Slot_clicked.classList.contains("1") && Slot_clicked.classList.contains("4") && Slot_clicked.classList.contains("7") ||  Slot_clicked.classList.contains("2") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("8") || Slot_clicked.classList.contains("3") && Slot_clicked.classList.contains("6") && Slot_clicked.classList.contains("9") || Slot_clicked.classList.contains("1") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("9") || Slot_clicked.classList.contains("3") && Slot_clicked.classList.contains("5") && Slot_clicked.classList.contains("7"))
          {
            ThreeInARow = true;
            Player2_score++;
          }          
}
  else {
    Board_reset();
  }
          } // Looking for all possible ways either player gets three in a row. I am aware that is a lot of code, couldn't think of an easier way. Each Number represents a slot starting at 1 and ending at 9 going from left to right. 
function CheckForWinner()
{if (Player1_score == 3)
  {
    Document.getElementById("TicTacTable").innerHTML ="Player 1 Wins at Tic-Tac-Toe"
  }
 else if (Player2_score == 3)
   {
     Document.getElementById("TicTacTable").innerHTML ="Player 2 Wins at Tic-Tac-Toe"
   }
}
window.onload =function(){
  SlotList = document.querySelectorAll("TicTac");
  SlotCount = SlotList.length;
  for( c = 0; c < SlotCount; c++){
    SlotList[c].onclick = function(){
      Clicked_TicTac_Slot(this);
    }
  }
}
  