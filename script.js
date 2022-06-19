const myBtn = document.getElementById("myBtn")

function displayNumber() {
  // 1 get input value 
  const sentence = document.getElementById('sentence')
  const inputValue = sentence.value;

  // 2 count letters
  const count = inputValue.length;

  // 3 display sentence
  console.log("number letters", count)
  if (count <= 0) {
    alert('vous n\'avez rien rentrée');
    const displayNone = '';
    document.getElementById("nbLetter").innertext = displayNone;
  } else {
  const displaySentence = 'le mots "'+ inputValue + '" que tu as tappé possède ' + count +' lettres!';
  document.getElementById("nbLetter").innerText = displaySentence;
  }
}

myBtn.addEventListener("click", displayNumber); 
/*****************************************************/
/*ajouter    event.stopPropagation();   quelque part*/


/**********************************************************/