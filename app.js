let person = document.querySelector('.person');
let off = document.querySelector('#off');
let cross = document.querySelector('.cross');

person.addEventListener('click', ()=>{
  off.classList.add('active');  
});

cross.addEventListener('click', ()=>{
    off.classList.remove('active');
});

off.addEventListener('click', function(e){
if(e.target.classList.contains('active')){
    off.classList.remove('active');
}
})