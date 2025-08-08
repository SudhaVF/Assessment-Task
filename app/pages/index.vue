<template>
  <Topbar />
  <Navbar />
  <div class="page-content">
  <section>
  <div class="slider-container">
    
    <div class="slider" :style="{ transform: `translateX(-${selectedIndex * 100}%)` }">
      <div class="slide" v-for="(img, index) in frontpage" :key="index">
        <img :src="img.image" alt="Slide Image" class="slide-bg" />
        <div class="slide-content">
          <h1>{{ img.title }}</h1>
          <button class="btn">EXPLORE MORE</button>
        </div>
      </div>
    </div>

   
    <div class="image-column">
      <img
        v-for="(img, index) in frontpage"
        :key="index"
        :src="img.image"
        @click="changeSlide(index)"
        :class="{ active: selectedIndex === index }"
        alt="image"
      />
    </div>
  </div>
  </section>
  <About />
  <Features />
  <Choose />
  <Services />
  <Appointment />
  <Welder />
  <Testimonial />
  <Newsletter />
  <Scroll />
  </div>
</template>

<script setup>
import Scroll from '~/components/Scroll.vue'
import Topbar from '~/components/Topbar.vue'
import Navbar from '~/components/Navbar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const frontpage = [
  { image: '/images/carousel-1.jpg', title: 'BEST METALCRAFT SOLUTIONS' },
  { image: '/images/carousel-2.jpg', title: 'BEST METALCRAFT SOLUTION' },
  { image: '/images/carousel-3.jpg', title: 'BEST METALCRAFT SOLUTIONS' }
]

const selectedIndex = ref(0)
let interval = null

function startAutoSlide() {
  interval = setInterval(() => {
    selectedIndex.value = (selectedIndex.value + 1) % frontpage.length
  }, 5000)
}

function stopAutoSlide() {
  if (interval) clearInterval(interval)
}

function changeSlide(index) {
  stopAutoSlide()
  selectedIndex.value = index
  startAutoSlide()
}



onMounted(startAutoSlide)
onBeforeUnmount(stopAutoSlide)

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.page-content{
  /* margin-top: 100px; */
}
.slider-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  
}

.slider {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  
}

.slide {
  position: relative;
  min-width: 100%;
  height: 100%;
  
}

.slide-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  filter: brightness(0.3);
}

.slide-content {
  position: absolute;
  top: 70px;
  left: 100px;
  z-index: 2;
  color: white;
  max-width: 800px;
  
}

.slide-content h1 {
  font-size: 75px;
  font-weight: 800;
  line-height: 1.3;
  font-family: "Roboto",sans-serif;
}

.btn {
  /* margin-top: 0px; */
  padding: 12px;
  background-color: #c7932c;
  border: none;
  margin-bottom: 100%;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 10px;
  
  cursor: pointer;
}
.btn:hover{
  color: black;
  /* border: 3px solid; */
}

.image-column {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 3;
  
}

.image-column img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s ease;
   
}

.image-column img.active {
  border-color: white;
}

@media screen and (max-width: 768px) {
  .slider-container {
    height: 85vh;
  }

  .slide-content {
    padding-top: 40px; 
  }

  .slide-content h1 {
    font-size: 32px; 
    line-height: 1.3;
  }

  .slide-content p {
    font-size: 14px;
    line-height: 1.4;
  }

  .btn {
    padding: 8px 14px;
    font-size: 13px;
  }
}

@media screen and (max-width: 480px) {
  .slider-container {
    height: 90vh; 
  }

  .slide-content {
    padding-top: 30px; 
  }

  .slide-content h1 {
    font-size: 26px;
  }

  .slide-content p {
    font-size: 13px;
  }

  .btn {
    padding: 7px 12px;
    font-size: 12px;
  }
}

</style>