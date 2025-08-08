<template>
  <section class="testimonial-section">
    <div class="heading">
      <h2>WHAT THEY’RE TALKING ABOUT</h2>
      <h1>OUR WELDING WORK</h1>
    </div>

    <div class="testimonial-wrapper">
      
      <div class="side-avatars">
        <div
          v-for="(avatar, index) in sideAvatars"
          :key="index"
          class="avatar-box"
        >
          <img :src="avatar" />
        </div>
      </div>

      
      <div class="testimonial-content relative">
        <Swiper
          :modules="[Navigation, Autoplay]"
          :loop="true"
          :allowTouchMove="false"
          :autoplay="false"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="(client, index) in clients" :key="index">
            <div class="testimonial-card">
              <div class="client-info">
                <img :src="client.image" class="client-image" />
                <div class="client-details">
                  <div class="stars">
                    <i class="far fa-star" v-for="n in 5" :key="n"></i>
                  </div>
                  <h3 class="client-name">{{ client.name }}</h3>
                  <p class="client-profession">{{ client.profession }}</p>
                </div>
              </div>
              <p class="testimonial-text">{{ client.feedback }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="arrow-nav">
          <div class="swiper-button-prev custom-arrow">
            <i class="bi bi-arrow-left"></i>
          </div>
          <div class="swiper-button-next custom-arrow">
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sideAvatars = [
  "https://themewagon.github.io/Weldork/img/testimonial-1.jpg",
  "https://themewagon.github.io/Weldork/img/testimonial-3.jpg",
  "https://themewagon.github.io/Weldork/img/testimonial-2.jpg",
  "https://themewagon.github.io/Weldork/img/testimonial-4.jpg",
];

const clients = [
  {
    image: "https://themewagon.github.io/Weldork/img/testimonial-1.jpg",
    name: "Alice Johnson",
    profession: "Mechanical Engineer",
    feedback:
      "Great welding quality and service. Highly recommend their team for heavy-duty jobs.",
  },
  {
    image: "https://themewagon.github.io/Weldork/img/testimonial-2.jpg",
    name: "Mark Brown",
    profession: "Project Supervisor",
    feedback:
      "Reliable and precise work. Timely delivery and excellent craftsmanship.",
  },
  {
    image: "https://themewagon.github.io/Weldork/img/testimonial-3.jpg",
    name: "Sara Lee",
    profession: "Site Manager",
    feedback:
      "Thorough professionals with a dedication to quality. Will hire again!",
  },
  {
    image: "https://themewagon.github.io/Weldork/img/testimonial-4.jpg",
    name: "John Smith",
    profession: "Civil Contractor",
    feedback:
      "Our go-to welding team for infrastructure jobs. Dependable and skilled.",
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.testimonial-section {
  padding: 50px 30px;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
}

.heading {
  text-align: center;
  margin-bottom: 40px;
}
.heading h2 {
  font-size: 31px;
  margin: 0;
}
.heading h1 {
  font-size: 31px;
  font-weight: bold;
  margin-top: 10px;
}

.testimonial-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: nowrap;
  margin-left: 50px;
}

/* .side-avatars {
  display: grid;
  grid-template-columns: repeat(2, 90px);
  gap: 20px;
  margin-right: 100px;
  margin-left: 15px;
} */

.side-avatars {
  display: grid;
  grid-template-columns: repeat(2, 90px);
  gap: 20px;
  margin-left: 0;
  margin-right: 0;
}

.avatar-box {
  width: 80px;
  height: 80px;
  perspective: 1000px;
}
.side-avatars .avatar-box:nth-child(3) {
  margin-left: 50px;
}
.side-avatars .avatar-box:nth-child(4) {
  margin-left: 60px;
  margin-top: 20px;
}
.side-avatars .avatar-box:nth-child(2) {
  margin-top: 25px;
  margin-left: 30px;
}
.avatar-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: rotateZoom 8s infinite linear;
  filter: blur(0.1px);
}
@keyframes rotateZoom {
  0% {
    transform: rotateY(0deg) scale(1);
  }
  25% {
    transform: rotateY(90deg) scale(0.9);
  }
  50% {
    transform: rotateY(180deg) scale(1);
  }
  75% {
    transform: rotateY(270deg) scale(0.9);
  }
  100% {
    transform: rotateY(360deg) scale(1);
  }
}

.testimonial-content {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  overflow: hidden;
  /* padding-bottom: 50px; */
  margin-left: 80px;
}

.testimonial-swiper {
  width: 100%;
  /* padding-bottom: 40px; */
}

.arrow-nav {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  /* width: 100%; */
  /* position: absolute; */
  /* bottom: 10px; */
  /* left: 80px; */
  /* right: 400px; */
  z-index: 2;
}
.custom-arrow i {
  font-size: 30px;
  color: #c7932c;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.custom-arrow i:hover {
  transform: scale(1.1);
}

.swiper-button-prev, .swiper-button-next {
  position: relative;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
  content: "";
}

.testimonial-card {
  padding: 10px 15px;
  /* padding: 10px; */
}
.client-info {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 15px;
}
.client-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
.client-details {
  display: flex;
  flex-direction: column;
}
.stars {
  color: #c7932c;
  font-size: 11px;
  margin-top: 5px;
}
.client-name {
  font-size: 14px;
  margin-top: 5px;
}
.client-profession {
  font-size: 12px;
  color: #666;
  margin: -8px 0;
}
.testimonial-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-top: 15px;
}

/* Swiper nav buttons
.swiper-button-prev,
.swiper-button-next {
  color: #c7932c;
  font-size: 18px;
  font-weight: bold;
} */



@media screen and (max-width: 768px) {
  .testimonial-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-left: 0;
  }

  .side-avatars {
    grid-template-columns: repeat(2, 70px);
    gap: 15px;
    justify-content: center;
    margin: 0;
  }
  .side-avatars .avatar-box {
    width: 70px;
    height: 70px;
  }
  .side-avatars .avatar-box:nth-child(2),
  .side-avatars .avatar-box:nth-child(3),
  .side-avatars .avatar-box:nth-child(4) {
    margin: 0;
  }

  .testimonial-content {
    margin-left: 0;
    max-width: 100%;
    padding: 30px;
  }

  .testimonial-card {
    padding: 15px;
  }

  .client-info {
    gap: 10px;
  }
  .client-image {
    width: 60px;
    height: 60px;
  }

  .arrow-nav {
    justify-content: left;
    gap: 30px;
    margin-top: 15px;
  }
}

</style>
