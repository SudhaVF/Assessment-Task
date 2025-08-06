<template>
  <header>
    <div class="top-bar">
      <div class="container">
        <div class="logo">WELDORK</div>
        <div class="left-info">
          <span><i class="fas fa-map-marker-alt"></i> 123 Street, New York, USA</span>
          <span><i class="fas fa-envelope"></i> info@example.com</span>
          <span><i class="fas fa-phone"></i> +012 345 67890</span>
        </div>
        <div class="right-icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>

    <nav class="main-nav">
      <div class="container">
        <ul class="nav-links">
          <li><a href="#slider-container">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><NuxtLink to="/service1">SERVICES</NuxtLink></li>
          <li class="dropdown">
            <a href="#">PAGES<i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown-menu">
              <li><a href="#">Features</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">404 Page</a></li>
            </ul>
          </li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <a href="#"><button class="quote-btn">GET A QUOTE</button></a>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style>
body {
  padding-top: 90px; /* Push content down below fixed header */
}
</style>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.top-bar {
  background-color: #c7932c;
  color: white;
  font-size: 14px;
  padding: 10px 0;
}

.main-nav {
  background-color: white;  
  height: 50px;
  padding: 0 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: white;
  margin-left: 15px;
}

.left-info {
  margin-left: 300px;
}

.left-info span {
  margin-right: 10px;
  font-family: "Poppins", sans-serif;
  display: inline-flex;
  align-items: center;
  font-size: 10px;
}

.left-info i {
  margin-right: 5px;
  font-size: 8px;
}

.right-icons {
  margin-right: 60px;
}

.right-icons i {
  margin-left: 10px;
  cursor: pointer;
  background-color: white;
  color: #c7932c;
  padding: 5px;
  font-size: 10px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
  margin-right: 35px;
  padding: 10px 0;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 11px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links li:hover > a {
  color: #c7932c;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #eee;
  list-style: none;
  padding: 0;
  display: none;
  min-width: 100px;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li a {
  display: block;
  padding: 7px;
  color: black;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: normal;
}

.dropdown a i {
  color: black;
  font-size: 8px;
  font-weight: bold;
  margin-left: 3px;
  margin-bottom: 2px;
}

.dropdown a i:hover {
  color: #c7932c;
}

.dropdown-menu li a:hover {
  background-color: #f5f5f5;
}

.quote-btn {
  background-color: #c7932c;
  border: none;
  color: white;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  width: 100px;
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  margin-right: 50px;
  margin-bottom: 10px;
 
}

.quote-btn:hover {
  color: black;
}
</style>
