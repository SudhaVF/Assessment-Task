<template>

    <Navbar />
    <div class="about-banner" >
      <div class="overlay">
        <div class="banner-content">
          <h1>404</h1>
          <p><span>Home</span> / <span>Pages</span> / <span class="current">404</span></p>
        </div>
      </div>
    </div>
    <div>
    <main class="content">
      <div class="icon"><i class="bi bi-exclamation-triangle display-1 text-primary"></i></div>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>
        We're sorry, the page you have looked for does not exist in our website!<br />
        Maybe go to our home page or try to use a search?
      </p>
      <button class="home-btn">GO BACK TO HOME</button>
    </main>
  </div>
  <Newsletter />
</template>

<script>
export default {
  name: "PageNotFound",
};
import Navbar from '~/components/Navbar.vue'
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



.page-not-found {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #f4f4f4, #eaeaea);
}
.content {
  flex: 1;
  text-align: center;
  padding: 80px 20px;
}

.icon {
  font-size: 45px;
  margin-bottom: 10px;
  color: #CE9233;
}

h1 {
  font-size: 60px;
  margin: 0;
  color: black;
  font-family: "Roboto",sans-serif;
}

h2 {
  margin: 10px 0;
  font-size: 24px;
  color: black;
  font-family: "Roboto", sans-serif;
}

p {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  font-family: "Poppins", sans-serif;
}

.home-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #CE9233;
  color: white;
  border: none;
  font-weight: bold;
  /* border-radius: 3px; */
  cursor: pointer;
  font-size: 12px;
  font-family: "Poppins", sans-serif;;
}
.home-btn:hover{
    color: black;
}

</style>
