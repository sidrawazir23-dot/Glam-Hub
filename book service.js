 <script>
    const bookBtn = document.getElementById('bookBtn');
    const successMsg = document.getElementById('successMsg');

    bookBtn.addEventListener('click', () => {
      const city = document.getElementById('city').value;
      const time = document.getElementById('time').value;
      const date = document.getElementById('date').value;

      if (city && time && date) {
        successMsg.style.display = 'block';
        successMsg.textContent = `✅ Booking confirmed for ${city} on ${date} at ${time}`;
      } else {
        successMsg.style.display = 'block';
        successMsg.textContent = '⚠️ Please fill all fields!';
      }

      setTimeout(() => {
        successMsg.style.display = 'none';
         }, 3000);
    });
  </script>