function main() {
    var eventExample = readLine();
    // function call
    setReminder(eventExample)
}
//complete the function
function setReminder(m) {
   console.log( "You set a reminder about " + m)
   //console.log("you")
};




/*Multiple Parameters


You are given a program that takes Team 1 and Team 2 football teams goals as inputs accordingly.
Complete the function to take Team 1 and Team 2 goals as arguments and output the final result of the match:
- "Team 1 won", if Team 1's score is higher than Team 2's score
- "Team 2 won", if Team 2's score is higher than Team 1's score
- "Draw", if the scores are equal

Sample Input
3
4

Sample Output
Team 2 won
The function call is already given.
*/



function main() {
    var goalsTeam1 = parseInt(readLine(), 10);
    var goalsTeam2 = parseInt(readLine(), 10);
    // function call
    finalResult(goalsTeam1, goalsTeam2)
    
}
//complete the function
function finalResult(x, y) {
    if (x>y){
        console.log("Team 1 won")
    }
    else if (x==y){
        console.log("Draw")
    }
    else  {
        console.log("Team 2 won")
    }
};
