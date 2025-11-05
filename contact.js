 <script>
    document.addEventListener('DOMContentLoaded', function(){
      const form = document.getElementById('contactForm');
      const msg = document.getElementById('formMsg');

      function isEmail(v){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      }

      form.addEventListener('submit', function(e){
        e.preventDefault();
        msg.textContent = '';
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if(!name){
          msg.style.color = 'crimson';
          msg.textContent = 'Enter your name ';
          form.name.focus();
          return;
        }
        if(!email || !isEmail(email)){
          msg.style.color = 'crimson';
          msg.textContent = 'Enter correct email';
          form.email.focus();
          return;
        }
        if(!message){
          msg.style.color = 'crimson';
          msg.textContent = 'Enter message';
          form.message.focus();
          return;
        }
        msg.style.color = 'green';
        msg.textContent = 'your meassage is recevied';
        form.reset();
      });
    });
  </script>