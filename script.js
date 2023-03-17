// TODO: add code here
window.addEventListener('load', function(){
    const container = document.getElementById("container");
fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(data){
            console.log(data);
for(let i=0;i<data.length; i++){
    container.innerHTML += `
<div class="astronaut">
   <div class="bio">
      <h3>Mae Jemison</h3>
      <ul>
         <li>Hours in space: 190</li>
         <li>Active: false</li>
         <li>Skills: Physician, Chemical Engineer</li>
      </ul>
   </div>
   <img class="avatar" src="images/mae-jemison.jpg">
</div>
`
}



        })
    })
})