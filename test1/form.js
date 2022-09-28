document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#forms').addEventListener('submit', function(event){
        fetch(`http://web422Test.ca/api/students/${document.getElementById('studentNumber').value}`, 
        ).then(res=>res.json()).
        then(data=>{
            console.log(data)
        });
        event.preventDefault();
    })
  });