/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return Math.random() > 0.5 ? ("heads") : ("tails")
}
/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  var arrayOfFlips = [flips]
  //loop through each flip to determine if it is heads or not
  for (var i = 0; i < flips; i++){
    arrayOfFlips[i] = coinFlip();
    //get the number of heads and tails
  }
  return arrayOfFlips;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  //create a new object to hold number of heads and tails
  //set heads and tails to 0
  var countOfHeadsAndTails = {heads: 0, tails: 0}
  //loop through
  for (let i = 0; i < array.length; i++){
    //increment number of heads if it is heads
    if (array[i] == 'heads'){
      //increment number of heads
      countOfHeadsAndTails.heads = countOfHeadsAndTails.heads + 1;
    }
    else {
      //increment number of tails in the object
      countOfHeadsAndTails.tails = countOfHeadsAndTails.tails + 1;
    }
  }
  //remove  tails if it doesn't exist
  if (countOfHeadsAndTails.heads == 1){
    delete countOfHeadsAndTails.tails;
  }
  else if (countOfHeadsAndTails.tails == 1){
    delete countOfHeadsAndTails.heads;
  }
  //return the object
  return countOfHeadsAndTails;
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  //Flip a coin to get heads or tails
  var flippingACoin = coinFlip()
  //initailze the result of the flip
  var resultOfFlip =''
  //check to see if the coin flip was correct
  if (flippingACoin == call){
    //if the coin flip matches the call change result to win
    resultOfFlip = resultOfFlip + 'win';
  }
  else {
    //if coin call does not match the flip, change the result to lose
    resultOfFlip = resultOfFlip + 'lose'
  }
  //create an object to hold the variables
  var checkResult  = {call:call, flip:'', result : ''};
  //add the flip result to flip
  checkResult.flip = flippingACoin;
  //add the result of the flip to the result object variable
  checkResult.result = resultOfFlip;
  if(call == null || call == ""){
    throw 'No input';
  }
  //return it
  return checkResult;
}

/** Export 
 * 
 * Export all of your named functions
*/
export {flipACoin, coinFlip, coinFlips, countFlips};
