// //fetch('./dates.json')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => data.homeGames)
//     let today = new Date();
//     let todaysDate = today.toISOString().split("T")[0];
//     console.log(data)

async function getDates() {
    let file = './dates.json'; 
    try {
        let res = await fetch(file);
        return await res.json();
    } catch (ERROR){
        console.log(ERROR);
    }
}

async function render(){
    let dates = await getDates();
    console.log(dates);
    let html = "";
    dates = dates.homeGames;
    dates.forEach(date => {
    let p = `<p>${date}</p>`;
    html += p;    
    })
    let container = document.querySelector('.container');
    container.innerHTML = html;
    return dates;
}
render();
let promiseResolve = render();


//console.log(render());
// getDates('./dates.json').then(data => {
// console.log(data);
// })    
// console.log(todaysDate);
// homeGames.then(function(result){
//     console.log(result)
// })
// console.log(getDates('./dates.json'))