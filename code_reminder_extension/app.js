console.log("Starting:");
let today = new Date();
let date = today.getDate()+'-'+ (today.getMonth()+1)+'-'+today.getFullYear();

const CodingNinjas_API_ENDPOINT = `https://api.codingninjas.com/api/v3/public_section/potd/problem_list?date=${date}`;
const GFG_API_ENDPOINT =
  "https://practiceapi.geeksforgeeks.org/api/v1/problems-of-day/problem/today/";
const leetCode_API_ENDPOINT = "https://desolate-springs-69998.herokuapp.com/"



/*Sync GFG daily coding challenge to Todoist*/

fetch(GFG_API_ENDPOINT)
    .then(data => data.json())
    .then(GFG =>{
        const GFG_url = GFG.problem_url;
        let GFG_name = GFG.problem_name;
        const GFG_difficulty = GFG.difficulty;
        const GFG_element = document.getElementById('gfg_potd');
        GFG_element.innerHTML = `${GFG_name} [ ${GFG_difficulty} ]`;
        GFG_element.href = GFG_url;
  

    });

/*Sync NINJAs daily coding challenge to Todoist*/

fetch(CodingNinjas_API_ENDPOINT)
    .then(data => data.json())
    .then(ninja =>{
        let ninja_name = ninja.data.details.MODERATE.problem.name;
        const ninja_difficulty = ninja.data.details.MODERATE.problem.difficulty;
        const ninja_element = document.getElementById('ninjas_potd');
        ninja_element.innerHTML = `${ninja_name} [ ${ninja_difficulty} ]`;
        ninja_element.href = `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty}`
        
        let ninja_name2 = ninja.data.details.HARD.problem.name;
        const ninja_difficulty2 = ninja.data.details.HARD.problem.difficulty;
        const ninja_element2 = document.getElementById('ninjas_potd2');
        ninja_element2.innerHTML = `${ninja_name2} [ ${ninja_difficulty2} ]`;
        ninja_element2.href = `https://www.codingninjas.com/codestudio/problem-of-the-day/${ninja_difficulty2}`


    });

//syncLeetCodeCodingChallenge

fetch("https://desolate-springs-69998.herokuapp.com/")
    .then(data => data.json())
    .then(leetCode =>{
        
        let leetCode_name = leetCode.question.title;
        const leetCode_difficulty = leetCode.question.difficulty;
        const leetCode_element = document.getElementById('leetCode_potd');
        leetCode_element.innerHTML = `${leetCode_name} [ ${leetCode_difficulty} ]`;
        leetCode_element.href = `https://leetcode.com${leetCode.link}`
     


    });


// date and time

    setInterval(displayTime,1000);

function displayTime(){
  document.getElementById('date').innerText = today.toLocaleString('en-US',{
    dateStyle:'full'
  });

}

displayTime();

console.log(window.location.href)