const fs = require('fs');

// console.log(__dirname);
fs.readFile(`$en-EN.txt`, 'utf8', (err, data) => {
  if (err) throw err;
  const dataArr = data.split('---');
  const questions = dataArr.map((questionTxt, idx) => {
    return getQuestionObj(questionTxt, idx+1)
});

  
  const questionJSON = JSON.stringify(questions);
  fs.writeFile(`$en-EN.json`, questionJSON, 'utf8', (err)=>{
      if(err) throw err;
      console.log('success!!')
  });
});

function getQuestionObj(questionData, id){
    const question = getQuestionText(questionData);
    const codeSnippet = getCodeSnippet(questionData, id);
    const answerOptions = getAnswerOptions(questionData);
    const correctAnswer = getCorrectAnswer(questionData);
    const answerExplanation = getAnswerExplanation(questionData);

    const questionObj = {
      id,
      question,
      codeSnippet,
      answerOptions,
      correctAnswer,
      answerExplanation,
    };

    return questionObj
}

function getAnswerExplanation(questionData){ 
    const startRegex = /#### Answer: [A-Z]/;
    const endRegex = /<\/p>/
    let explanation = questionData.split(startRegex)[1];
    explanation = explanation.split(endRegex)[0].trim();
    return explanation;
}

function getCorrectAnswer(questionData){
    const regex = /#### Answer: [A-Z]/;
    const answerLine = questionData.match(regex)[0].trim();
    const answer = answerLine[answerLine.length-1];
    return answer;
}

function getAnswerOptions(questionData){
    const regex = /- [A-Z].*/g;
    const questionLines = questionData.match(regex);
    
    const questions = {};
    questionLines.forEach(line => {
        const key = line[2];
        const val = line.slice(4).trim()
        questions[key] = val
    });
    return questions;
    
}

function getCodeSnippet(questionData, id ){
    const regex = /```javascript|```/;
    const codeSnippet = questionData.split(regex)[1]
    if(codeSnippet){
        return codeSnippet.trim()
    }else {
        console.log('MUST EDIT NOT CODE SNIPPET::', id);
        return null;
    }
    
}

function getQuestionText(questionData){
    const questionLine = questionData.split("```javascript")[0];
    const questionArr = questionLine.split(".");
    const question = questionArr.slice(1).join(".").trim();
    return question;
}
