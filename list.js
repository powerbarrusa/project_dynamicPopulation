
var familyGuy = [
    {name: 'Peter Griffin', age: 45, job: "Works at a brewery. Pawtucket to be exact.", image: 'peter.jpg'},
    {name: 'Lois Griffin', age: 39, job: "Stay-at-home mom. Helps to recover bad habits Peter instills on his kin.", image: 'lois.jpg'},
    {name: 'Chris Griffin', age: 16, job: "Student. Not the brightest tool in the shed, but he has a growth mindset.", image: 'chris.jpg'},
    {name: 'Stewie Griffin', age: 1, job: "The brains of the operation. We're not sure if people understand him, but he understands people.", image: 'stewie.jpg'},
    {name: 'Brian Griffin', age: 3, job: "Smarter than most humans in the show. Still has the occasional pee problem.", image: 'brian.jpg'},
    {name: 'Glen Quagmire', age: 38, job: "Professional womanizer. Might be best friends with Judge Kavanaugh.", image: 'quagmire.jpg'},
    {name: 'Joe Swanson', age: 34, job: "Cop. The best handicap cop around.", image: 'joe.jpg'},
    {name: 'Cleveland Brown', age: 35, job: "No idea, but we like him. He's a good man. As far as we know.", image: 'cleveland.jpg'},
    {name: 'Mort Goldman', age: 45, job: "Professional Jew.", image: 'mort.jpg'},
    {name: 'Meg (no one cares)', age: 15, job: "Taking an emotional and mental beating, on the daily. Poor girl.", image: 'meg.jpg'}
]

var main = document.getElementById('main');
for (var i = 0; i < familyGuy.length; i++){
    
    var card = document.createElement("div");
    card.classList.add("card");
    var addName = document.createElement("h5");
    addName.classList.add("card-title");
    var addAge = document.createElement("p");
    addAge.classList.add("card-text");
    var addJob = document.createElement("p");
    addJob.classList.add("card-text");
    var addImg = document.createElement("img");
    addImg.classList.add("card-img-top");
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
      
    
    addName.innerHTML = (familyGuy[i].name);
    addAge.innerHTML = (familyGuy[i].age);
    addJob.innerHTML = (familyGuy[i].job);
    addImg.src = (familyGuy[i].image);
    
    cardBody.appendChild(addName);
    cardBody.appendChild(addAge);
    cardBody.appendChild(addJob);
    card.appendChild(addImg);
    card.appendChild(cardBody);
    main.appendChild(card)
}
