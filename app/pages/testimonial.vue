<template>
    <Navbar />
    <div class="about-banner" >
      <div class="overlay">
        <div class="banner-content">
          <h1>TESTIMONIAL</h1>
          <p><span>Home</span> / <span>Pages</span> / <span class="current">Testimonial</span></p>
        </div>
      </div>
    </div>
    <Testimonial />
    <Newsletter />
</template>
 <script setup>
   import Navbar from '~/components/Navbar.vue'
   import Testimonial from '~/components/Testimonial.vue'
   import Newsletter from '~/components/Newsletter.vue'
  </script>
    <style scoped>
    
    .about-banner {
  position: relative;
  width: 100vw;
  height: 250px;
  background-image: url('/images/carousel-1.jpg'); 
  background-size: cover;
  background-position: center;
  /* margin-top: 60px;  */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.6); 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  text-align: center;
  color: white;
  background-color: white;
  padding: 50px 200px;
  margin: 0 20px;
  max-width: 900px;
  z-index: 10;
  margin-top: 100px;
}

.banner-content h1 {
  color: black;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.banner-content p {
  color:#c7932c;
  font-size: 11px;
  margin: 10px 0 0;
  font-family: "Poppins", sans-serif;
}

.banner-content p span {
  color:#c7932c;
  font-family: "Poppins", sans-serif;
}

.banner-content p span.current {
  color:#797627;
  font-family: "Poppins", sans-serif;
}
</style>