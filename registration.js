<script>
    document.getElementById("registrationForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const salonName = document.getElementById("salonName").value.trim();
      const ownerName = document.getElementById("ownerName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const city = document.getElementById("city").value.trim();

      if (!salonName || !ownerName || !email || !password || !city) {
        alert("Please fill in all fields.");
        return;
      }

      alert(`Salon Registered Successfully!\n\nSalon: ${salonName}\nOwner: ${ownerName}\nEmail: ${email}\nCity: ${city}`);
      this.reset();
    });
  </script>