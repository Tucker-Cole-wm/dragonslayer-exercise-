/**
 * Created by session2 on 9/28/15.
 */
var slaying = true;
var userHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (userHit) {
        console.log("You hit!");
        totalDamage += damageThisRound;
        if (totalDamage > 4) {
            console.log("You win!");
            slaying = false;
        }
        else if (totalDamage <= 4) {
            userHit = Math.floor(Math.random() * 2);
        }
        else if (totalDamage = 4) {
            console.log("You tie with the dragon.");
        }
    }
    else {
        console.log("You lose!");
        slaying = false;
    }
}