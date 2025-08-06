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

    
<div class="testimonial-content">
  <div class="transition-wrapper">
    <transition name="slide" mode="out-in">
      <div class="testimonial-card" :key="mainClient.name">
        <div class="client-info">
          <img :src="mainClient.image" class="client-image" />
          <div class="client-details">
            <div class="stars"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
            <h3 class="client-name">{{ mainClient.name }}</h3>
            <p class="client-profession">{{ mainClient.profession }}</p>
          </div>
        </div>
        <p class="testimonial-text">{{ mainClient.feedback }}</p>
        <div class="arrow">
          <span @click="prevClient">&larr;</span>
          <span @click="nextClient" style="margin-left: 20px;">&rarr;</span>
        </div>
      </div>
    </transition>
  </div>
</div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      sideAvatars: [
        "https://themewagon.github.io/Weldork/img/testimonial-1.jpg",
        "https://themewagon.github.io/Weldork/img/testimonial-3.jpg",
        "https://themewagon.github.io/Weldork/img/testimonial-2.jpg",
        "https://themewagon.github.io/Weldork/img/testimonial-4.jpg",
      ],
      clients: [
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
      ],
    };
  },
  computed: {
    mainClient() {
      return this.clients[this.currentIndex];
    },
  },
  methods: {
    nextClient() {
      this.currentIndex = (this.currentIndex + 1) % this.clients.length;
    },
    prevClient() {
      this.currentIndex =
        (this.currentIndex - 1 + this.clients.length) % this.clients.length;
    },
  },
};
</script>

<style scoped>
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
  font-family: "Roboto", sans-serif;
}

.heading h1 {
  font-size: 31px;
  font-weight: bold;
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
}

.testimonial-wrapper {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}


.side-avatars {
  display: grid;
  grid-template-columns: repeat(2, 90px);
  gap: 20px;
  margin-right: 100px;
  margin-left: 15px;
  /* filter: brightness(1); */
  border: blur;
  

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
  /* border-radius: 10px; */
  animation: rotateZoom 8s infinite linear;
  filter: blur(0.1);
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

/* Right Testimonial */
.testimonial-content {
  max-width: 600px;
}

.testimonial-card {
  /* background: #fafafa; */
  padding: 20px;
  /* border-radius: 10px; */
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
  /* border-radius: 10px; */
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
  font-family: "Roboto", sans-serif;
}

.client-profession {
  font-size: 12px;
  color: #666;
  font-family: "Poppins", sans-serif;
  margin: -8px 0;

}

.testimonial-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-top: 15px;
  font-family: "Poppins", sans-serif;
}

.arrow {
  font-size: 28px;
  color: #c7932c;
  margin-top: 20px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>