var btnOne = document.getElementById('one');


class KanyeQuotes {
    constructor(quotes) {
        this.KanyeWisdom = quotes;
    }

    revQuotes() {
        console.log('quotes')
    }
    
   

}

let Kquotes = new KanyeQuotes('quote'); 
Kquotes.revQuotes;



    
document.addEventListener('click', function(event){
    let ajax = new XMLHttpRequest();
     ajax.onreadystatechange = function() {
         
         if(ajax.readyState == 4 && ajax.status == 200) {
             var quoteJSON = JSON.parse(ajax.responseText); 
             document.body.innerHTML += "<h3>" + quoteJSON.quote + "</h3>"
             
             
     }
    }
     ajax.open('GET', 'https://api.kanye.rest/', true);
     ajax.send();
});