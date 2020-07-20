const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//   Ep1 - Miss Scarlet. This is because the murderer is defined in scenario, and is never changed.




  const murderer = 'Professor Plum';
  
  const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
 
//  Ep2 - Professor Plum. murderer is declared as a constant which means the value can't be changed.



  let murderer = 'Professor Plum';
  
  const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
  }
  
  const firstVerdict = declareMurderer();
  console.log('First Verdict: ', firstVerdict);
  
  const secondVerdict = `The murderer is ${murderer}.`;
  console.log('Second Verdict: ', secondVerdict);
 
// Ep3 - first verdict: Mrs. Peacock. declareMurderer is called, so murderer is changed from its initialised value within the function scope. second verdict: Professor Plum, because the first verdict is using funtion scope, whereas the initital value is global and is not affected by the declareMurderer function.


  let suspectOne = 'Miss Scarlet';
  let suspectTwo = 'Professor Plum';
  let suspectThree = 'Mrs. Peacock';
  
  const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
  }
  
  const suspects = declareAllSuspects();
  console.log(suspects);
  console.log(`Suspect three is ${suspectThree}.`);
  
// Ep4 - suspects = Scarlet, Plum and Mustard, declareAllSuspects makes it so. suspectThree = Peacock, as initially it is Peacock and is not changed by the function being called.



  const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

//   Ep5 - Revolver. even though scenario is a const, the weapon property can be updated.



  let murderer = 'Colonel Mustard';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      murderer = 'Mrs. White';
    }
  
    plotTwist();
  }
  
  const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  
//   Ep6 - Mrs. White, because plotTwist is defined and called within changeMurderer.



  let murderer = 'Professor Plum';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      let murderer = 'Colonel Mustard';
  
      const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
      }
  
      unexpectedOutcome();
    }
  
    plotTwist();
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  
//   Ep7 - Miss Scarlet. When changeMurderer is called, after setting murderer to Mr Green, the next processed line is calling plotTwist, updating the murderer, and then calling unexpectedOutcome. Since plotTwist has already been called, murderer remains Miss Scarlet.



  const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);
 
//   Ep8 - Candle Stick. Properties of const variables can be changed and updated.



  let murderer = 'Professor Plum';
  
  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//   Ep9 - Professor Plum. murderer is already initialised by let. The if statement would change murderer simply by asserting murderer = Mrs Peacock, rather than by trying to initialise it again.