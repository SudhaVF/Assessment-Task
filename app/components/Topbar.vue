<template>
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
</template>

<style scoped>
 .top-bar {
  background-color: #c7932c;
  color: white;
  /* font-size: 14px; */
  padding: 10px 0;
  /* margin-top: -100px; */
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


</style>