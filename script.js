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
    
    let html = "";
    
    let today = new Date();
    let todaysDate = today.toISOString().split("T")[0]
    console.log(todaysDate)
    dates = dates.homeGames;

    const isHomeGame = dates.includes(todaysDate);
    console.log(isHomeGame)
    let header = document.querySelector('.header');
    let imageBox = document.querySelector('.main')
    let headline;

    if(!isHomeGame){
        headline = `Hey y'all the Baron's ain't playin tonight. Traffic is gonna be a-ok!`;
        header.innerHTML = headline;
        imageBox.style.background = "url('assssets/nogame.png') no-repeat center center fixed"
    } else {
        headline = `Traffic is all jacked up cause the Baron's are playing`;
        header.innerHTML = headline;
        imageBox.style.background = "url('assssets/play_ball.jpeg') no-repeat center top fixed"
    }
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