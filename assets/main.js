const navbarNav = document.querySelector(".navbar");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.onclick = () => {
    navbarNav.classList.toggle('active');
};

document.addEventListener("click", function (e) {
    if (!menuIcon.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault(); // Mencegah pengiriman formulir
  
      var valid = true;
  
      // Validasi Nama Lengkap
      var fullname = $('#fullname').val();
      if (fullname.trim() == '') {
        valid = false;
        alert('Nama lengkap harus diisi.');
      }
  
      // Validasi Email
      var email = $('#email').val();
      if (email.trim() == '') {
        valid = false;
        alert('Email harus diisi.');
      } else if (!validateEmail(email)) {
        valid = false;
        alert('Email tidak valid.');
      }
  
      // Validasi Nomor Handphone
      var phone = $('#phone').val();
      if (phone.trim() == '') {
        valid = false;
        alert('Nomor handphone harus diisi.');
      } else if (!validatePhone(phone)) {
        valid = false;
        alert('Nomor handphone tidak valid.');
      }
  
      // Validasi Pesan
      var message = $('#message').val();
      if (message.trim() == '') {
        valid = false;
        alert('Pesan harus diisi.');
      } else if (message.length > 200) {
        valid = false;
        alert('Pesan tidak boleh lebih dari 200 karakter.');
      }
  
      // Jika semua bidang valid, kirim formulir
      if (valid) {
        alert('Formulir berhasil dikirim!');
        $('#contact-form')[0].reset(); // Reset formulir setelah pengiriman
      }
    });
  
    // Fungsi untuk memvalidasi format email
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  
    // Fungsi untuk memvalidasi format nomor handphone
    function validatePhone(phone) {
      var re = /^\d{10,12}$/;
      return re.test(phone);
    }
});