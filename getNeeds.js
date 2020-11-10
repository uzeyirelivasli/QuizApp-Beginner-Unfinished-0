

 getQuestion = () =>{
       question.innerHTML = allQuests[currentIndex].question
   };
   
   
 getAnswers = () =>{
       answer1.innerHTML = allQuests[currentIndex].answers[0].text
       answer2.innerHTML = allQuests[currentIndex].answers[1].text
       answer3.innerHTML = allQuests[currentIndex].answers[2].text
       answer4.innerHTML = allQuests[currentIndex].answers[3].text
   
   };
   
 getImages = () =>{
       img.src = allQuests[currentIndex].image
   };