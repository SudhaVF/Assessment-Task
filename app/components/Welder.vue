<template>
  <section class="team-section">
    <h2 class="section-title">MEET OUR PROFESSIONAL AND<br />EXPERIENCE WELDER</h2>
    
    <div class="team-container">
      <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
      <div class="image-wrapper">
        <img :src="member.image" :alt="member.name" class="team-image" />
        <div class="overlay">
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          </div>
        <h3 class="team-name">{{ member.name }}</h3>
        <p class="team-role">{{ member.role }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      
      teamMembers: [
        {
          name: 'Alex Robin',
          role: 'Welder',
          image: 'https://themewagon.github.io/Weldork/img/team-1.jpg'
        },
        {
          name: 'Andrew Bon',
          role: 'Welder',
          image: 'https://themewagon.github.io/Weldork/img/team-2.jpg'
        },
        {
          name: 'Martin Tompson',
          role: 'Welder',
          image: 'https://themewagon.github.io/Weldork/img/team-3.jpg'
        },
        {
          name: 'Clarabelle Samber',
          role: 'Welder',
          image: 'https://themewagon.github.io/Weldork/img/team-4.jpg'
        }
      ]
    };
  }  
};
</script>

<style scoped>
.team-section {
  padding: 60px 20px;
  background-color: white;
  text-align: center;
  position: relative; 
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  color: #2c2c2c;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
}

.team-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  /* justify-content: center; */
  padding-bottom: 10px;
  height: auto;
  gap: 15px;
  margin-left: 70px;
}

.team-card {
  background-color: white;
  /* padding: 20px; */
  width: 190px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0; 
}

.team-card:hover {
  transform: translateY(-5px);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  /* background-color: white; */
  /* padding:2px; */
  
}

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-bottom: 2px solid #ddd; */
  display: block;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #c7932c;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  z-index: 1;
}
.image-wrapper:hover .overlay {
  transform: translateX(0);
}


.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  color: white;
  font-size: 14px;
  background: black;
  padding: 6px;
  transition: background 0.3s ease;
}

.social-icons a:hover {
  background: black;
}

.team-name {
  font-size: 14px;
  font-weight: 600;
  margin: 11px 0 2px;
  color: #222;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

.team-role {
  font-size: 11px;
  color: #777;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
  /* padding: 0; */
}
</style>