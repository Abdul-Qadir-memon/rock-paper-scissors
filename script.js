let score={
    won:0,
    loose: 0,
    tie:0
  };
 
  function updateScore(){
    document.querySelector('.js-score')
    .innerHTML =`wons : ${score.won}. looses : ${score.loose}. tie's : ${score.tie}`
  }
  
  function playGame(playerMove){
    let computermove = computerMove();
    let result;
    if(playerMove==='Scissors'){
      if(computermove ==='Rock'){
        result = 'You loose';
      }else if(computermove ==='Paper'){
        result = 'You won'
      } else{
        result= 'tie'
      }
    }
   
     else if(playerMove=== 'Paper'){
      if(computermove ==='Rock'){
        result = 'You won';
      }else if(computermove ==='Paper'){
        result = 'tie'
      } else{
        result= 'You Loose'
      }
    }

   else if(playerMove==='Rock'){
      if(computermove ==='Rock'){
        result = 'tie';
      }else if(computermove ==='Paper'){
        result = 'You loose'
      } else{
        result= 'You won'
      }
    }
    if(result ==='You won'){
      score.won++;
    }else if(result ==='You loose'){
      score.loose++;
    }else if (result ==='tie'){
      score.tie++;
    }
    updateScore();
    document.querySelector('.js-result')
    .innerHTML = `${result}`;  
    
    document.querySelector('.js-showMove')
    .innerHTML = `You picked ${playerMove}. Computer Picked ${computermove}`

// alert(`You picked ${playerMove}. Computer Picked ${computermove} 
// result: ${result}
// wons : ${score.won}. looses : ${score.loose}. tie's : ${score.tie}      `)

  }
  
  function computerMove() {
    let computermove = Math.random();
    if (computermove >= 0 && computermove < 1 / 3) {
      computermove = 'Rock'
    } else if (computermove >= 1 / 3 && computermove < 2 / 3) {
      computermove = 'Paper';
    } else {
      computermove = 'Scissors';
    }
    return computermove;
  }

  function reset_score(){
    score.won = 0,
    score.loose =0,
    score.tie =0
  }
  updateScore();

