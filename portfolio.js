$( '#navigation .navbar-nav a' ).on( 'click', function () {
	$( '#navigation .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

/*Script for Contact-form */

//const scriptURL = 'https://script.google.com/macros/s/AKfycbxQ88q7WZEkrzfmXzU_F778P2WEWAuJJyyZKWmvHI-46ZMURWK-Q_-jRrd09ZpJXwY/exec'//
const scriptURL='https://script.google.com/macros/s/AKfycbwOGF62q9D32aKjVGC9lMv8Srrqd-RXp53Ddsa0-fxCi_a4YEAGoCJGG5FgqQ1QocqL/exec'
  const form = document.forms['submit-to-google']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });
