 let string="";

 let buttons=document.querySelectorAll('.button');
  Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', function(e){
        try {
            
       
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.getElementById('input').value=string;
        }
        else if(e.target.innerHTML=="C"){
            string="";
            document.getElementById('input').value=string;
        }
       
        else if(e.target.innerHTML=="++"){
            string=eval("100")
            document.getElementById('input').value=string;
        }
        else{
            string=string+e.target.innerHTML;
            document.getElementById('input').value=string;
        }

    } catch (error) {
           alert("invailid creditial"); 
    }
    })

  })