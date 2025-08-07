<template>
  
    <nav class="main-nav">
      <div class="container">
        
        <ul class="nav-links" :class="{ 'show': showMenu }">
          <li><a href="/">HOME</a></li>
          <li><NuxtLink to="/about1">ABOUT</NuxtLink></li>
          <li><NuxtLink to="/service1">SERVICES</NuxtLink></li>
          <li class="dropdown">
            <NuxtLink to="#">PAGES<i class="fas fa-chevron-down"></i></NuxtLink>
            <ul class="dropdown-menu">
              <li><NuxtLink to="/features">Features</NuxtLink></li>
              <li><NuxtLink to="/welder">Our Team</NuxtLink></li>
              <li><NuxtLink to="/testimonial">Testimonial</NuxtLink></li>
              <li><NuxtLink to="/appointment">Appointment</NuxtLink></li>
              <li><NuxtLink to="/errorpage">404 Page</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
        </ul>
        <NuxtLink to=""><button class="quote-btn">GET A QUOTE</button></NuxtLink>
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  overflow: hidden;
} 
</style>

<style scoped>

.main-nav {
  background-color: white;  
  position: sticky;
  /* height: 50px; */
  padding: 0 12px;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  width: 100%;
  
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}


.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
  margin-right: 35px;
  padding: 6px 0;
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