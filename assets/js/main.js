let today = new Date();
let hour = today.getHours();

let wishtitle = document.getElementById("wishtitle"); 
if(hour >=0 && hour < 12){
    wishtitle.innerHTML = "Good Morning!";
} else if(hour >= 12 && hour < 17){
    wishtitle.innerHTML = "Good Afternoon!";
} else if(hour >= 17 && hour < 0){
    wishtitle.innerHTML = "Good Evening!";
}
