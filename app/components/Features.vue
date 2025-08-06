<template>
  <section class="feature-section">
    <div class="container">
      <div class="feature-card" v-for="(feature, index) in features" :key="index" @click = "toggleIcon(index)">

        <div class="icon-box" :class="{ 'icon-move': activeIndex === index }">
          <i :class="feature.icon"></i>
        </div>
        <div class="card-content">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <a href="#" class="read-more">READ MORE <span class="line"></span><span>→</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      features: [
        {
          icon: "fa fa-hammer fa-2x text-white",
          title: "QUALITY WELDING",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue."
        },
        {
          icon: "fa fa-dollar-sign fa-2x text-white",
          title: "AFFORDABLE PRICING",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue."
        },
        {
          icon: "fa fa-check-double fa-2x text-white",
          title: "BEST WELDER",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue."
        },
        {
          icon: "fa fa-tools fa-2x text-white",
          title: "QUALITY TOOLS",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue."
        }
      ]
    };
},
  methods: {
    toggleIcon(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.feature-section {
  padding: 200px 0;
  background-color: white;
  overflow-x: auto;
}

.container {
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  height: 0px;
  width: 700px;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 70px;
}

.feature-card {
  background-color: white;
  flex: 0 0 25%;
  position: relative;
  padding: 40px 20px 20px 20px;
  border: 1px solid rgb(241, 241, 237);
  box-shadow:0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 0.3s;
  /* border-radius: 0; */
}

.feature-card:first-child {
  border-left: 1px solid #e0e0e0;
}

/* .feature-card:hover {
  transform: translateY(-5px);
} */

.icon-box {
  position: absolute;
  top: -10px;
  left: 0px;
  background-color: #c7932c;
  width: 40px;
  height: 40px;
  /* border-radius: 4px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}
 .feature-card:hover .icon-box {
  transform: translateX(15px);
}


.card-content {
  margin-top: 10px;
}

h3 {
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;

}

p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
  /* font-weight: 100px; */

}

.read-more {
  text-decoration: none;
  color: #666;
  font-weight: 600;
  font-size: 9px;
  gap:5px;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;

  /* border-bottom: 1px solid #000; */
}

.read-more span {
  margin-left: 10px;
  margin-right: 10px;
}

.read-more .line{
    flex-grow: 1;
    height: 1px;
    background-color: #7a7979;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 2px;

}
</style>
