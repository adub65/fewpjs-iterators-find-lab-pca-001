const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teamArray) {
  let winner = (teamArray.find(team => team.result === "W"))
  if (winner) {
    return winner.year
  } else {
    return undefined
  }
}
