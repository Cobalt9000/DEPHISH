function myFunction() {
    var popup = document.getElementById("myPopup");
    alert("This is a Phishing Site")
    popup.classList.toggle("show");
}

fetch('https://icanhazdadjoke.com/slack')
   .then( data=> data.json())
   .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    })
        if(jokeElement.innerHTML=="Phishing site")
        {
            
            myFunction()
        }
        else{
            
            myFunction()
    }
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            
        });
         console.log(url);
    