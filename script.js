document.querySelector('.env_form_wrap').addEventListener('click', function (e) {
  e.preventDefault();
  const envelope = document.getElementById('envelope_form');
  envelope.classList.add('sent');
  setTimeout(function () {
    envelope.classList.add('fly');
  }, 500);
  
});
