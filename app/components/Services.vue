<template>
  <section class="welding-section">
    <div class="container">
      <h2 class="title">RELIABLE & HIGH-QUALITY<br />WELDING SERVICES</h2>

      <div class="cards">
        <div v-for="(service, index) in services" :key="index" class="card">
          <div class="img-container">
            <img :src="service.image" alt="service image" />
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-text">{{ service.description }}</p>
          </div>
          <a href="#" class="read-more">READ MORE <span>&#187;</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "METAL WORKS",
    image: "/images/carousel-2.jpg",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Curabitur tellus augue.",
  },
  {
    title: "STEEL WELDING",
    image: "/images/carousel-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
  },
  {
    title: "PIPE WELDING",
    image: "/images/carousel-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
  },
  {
    title: "CUSTOM WELDING",
    image: "/images/carousel-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
  },
  {
    title: "STEEL WELDING",
    image: "/images/carousel-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
  },
  {
    title: "METAL WORK",
    image: "/images/carousel-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
  },
  {
    title: "CUSTOM WELDING",
    image: "/images/carousel-7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
  },
  {
    title: "PIPE WELDING",
    image: "/images/carousel-8.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.welding-section {
  padding: 60px 20px;
  background-color: white;
 
  text-align: center;
}


.container {
  max-width: 1200px;
  margin: auto;
}


.title {
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-family: "Roboto",sans-serif;
  
}


.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  padding-top: 50px;
  
}


.card {
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 250px;
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 350px;
  position: relative;
  overflow: hidden;
  color: black;
  animation: fadeUp;
  
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: #dca847;
  transition: height 0.4s ease;
  z-index: 0; /* behind content */
}

.card:hover::before {
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  color: white;
}


.card > * {
  position: relative;
  z-index: 1;
}

.card:hover .card-title,
.card:hover .card-text,
.card:hover .read-more {
  color: white;
}

.card:hover .read-more {
  color: black;
  background-color: #fff;
}


.img-container {
  overflow: hidden;
  
}

.img-container img {
  width: 100%;
  height: 260px;
  position: relative;
  top: -50px;
  z-index: 2;
  object-fit: cover;
  transition: transform 0.4s ease;
  margin-left: 30px;
  margin-top: -40px;
}

.card:hover .img-container img {
  transform: scale(1.05);
}


.card-body {
  padding: 20px;
  /* background-color: inherit; */
   
}

.card-title {
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  /* margin-bottom: 10px; */
  margin-right: 30px;
  width: 150px;
  margin-top: 0;
  font-family: "Roboto", sans-serif;
  text-align: left;
  margin-left: 0%;
}

.card-text {
  font-size: 14px;
  margin-bottom: 15px;
  margin-right: 20px;
  color:rgb(121, 118, 114);
  font-family:"Poppins", sans-serif;
  text-align: left;
  /* margin-left: 5px; */
}

.read-more {
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  font-family:"Poppins", sans-serif;
  margin-right: 110px;
  margin-bottom: 20px;
  margin-left: 0;
  padding: 7px;
  /* background-color: #F9F8F7; */
}

.read-more span{
    font-size: 14px;
    text-align: center;
    font-weight: normal;
    margin-left: 1px;
}


@media (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .card {
    max-width: 100%;
    height: auto;
  }

  .img-container img {
    height: 200px;
    top: 0;
    margin-left: 0;
    margin-top: 0;
  }

  .title {
    font-size: 24px;
    margin-bottom: 25px;
  }
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .card {
    max-width: 100%;
  }

  .img-container img {
    height: 180px;
  }

  .title {
    font-size: 20px;
    line-height: 1.4;
  }

  .card-title {
    width: auto;
    margin-right: 0;
    text-align: center;
  }

  .card-text {
    text-align: center;
    margin-right: 0;
  }

  .read-more {
    margin: 0 auto 15px auto;
    display: inline-block;
  }
}


</style>