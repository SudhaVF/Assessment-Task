<template>
  <section class="why-section" ref="sectionRef">
    <div class="container">
     
      <div class="left"></div>

      
      <div class="right">
        <h2>WHY YOU SHOULD CHOOSE OUR<br />WELDING SERVICES</h2>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget,
          ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.
          Pellentesque eu consequat augue.
        </p>

        <div class="stats">
          <div class="stat-box">
            <h3>{{ clientCount }}</h3>
            <p>SATISFIED CLIENTS</p>
          </div>
          <div class="stat-box">
            <h3>{{ projectCount }}</h3>
            <p>COMPLETE PROJECTS</p>
          </div>
        </div>

        <div class="progress-bars">
          <div class="progress-item">
            <div class="label-row">
              <div class="label">EXPERIENCE</div>
              <div class="percent">90%</div>
            </div>
            <div class="bar">
              <div class="fill" :style="{ width: '90%' }"></div>
            </div>
          </div>

          <div class="progress-item">
            <div class="label-row">
              <div class="label">WORK DONE</div>
              <div class="percent">95%</div>
            </div>
            <div class="bar">
              <div class="fill" :style="{ width: '95%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clientCount: 0,
      projectCount: 0,
      counted: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.counted) {
            this.countUp('clientCount', 9999, 1000);
            this.countUp('projectCount', 9999, 1000);
            this.counted = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.$refs.sectionRef);
  },
  methods: {
    countUp(target, end, duration) {
      const start = 0;
      const range = end - start;
      let current = start;
      const increment = end / (duration / 20);

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          this[target] = end;
          clearInterval(timer);
        } else {
          this[target] = Math.floor(current);
        }
      }, 20);
    },
  },
};
</script>


<style scoped>
.why-section {
  background-color: #131313;
  /* color: white; */
  /* padding: 60px 0; */
  /* overflow-x: hidden; */
  /* font-family: Arial, sans-serif; */
  /* margin-bottom: 100px; */
  
  
  
}

.container {
  display: flex;
  flex-direction: row; 
  flex-wrap: nowrap;
  /* min-height: 400px; */
}

.left {
  flex: 1 1 50%;
  min-height: 400px;
  background-image: url('/images/carousel-2.jpg');
  background-size: cover;
  background-position: center;
  order: 1;
  filter: brightness(0.3);
  /* padding-left: 0px; */
}

.right {
  flex: 1 1 50%;
  padding: 20px;
  background-color:#131313;
  order: 2;
  
  /* flex-direction: column; */
  /* gap: 20px; */
}

h2 {
  font-size: 28px;
  line-height: 1.4;
  margin-bottom: 20px;
  color:white;
  font-family: "Roboto", sans-serif;
}

.desc {
  font-size: 13px;
  color: #ccc;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  /* gap: 100px; */
}

.stats {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin-bottom: 30px;
}

.stat-box {
  flex: 1 1 50%;
  border: 3px solid #c7932c;
  text-align: center;
  padding: 20px;
  background-color: #131313;
  
}

.stat-box h3 {
  font-size: 28px;
  margin-bottom: 5px;
  color: white;
  font-family: "Roboto", sans-serif;
}

.stat-box p {
  font-size: 12px;
  color: white;
  font-family: "Poppins", sans-serif;
}

.progress-bars {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-top: 3px solid #c7932c;
  border-left: 3px solid #c7932c;
  border-right: 3px solid #c7932c;
  padding: 20px;
  height: 30%;
  box-sizing: border-box;
}

.progress-item {
  display: flex;
  /* align-items: center; */
  flex-direction: column; 
  gap: 10px;
  /* justify-content: space-between; */
  /* width: 100%; */

  
}

.label-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.label {
  width: 100px;
  font-size: 12px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.bar {
  /* flex: 1; */
  background-color: white;
  height: 4px;
  /* position: relative; */
  /* border-radius: 4px; */
  overflow: hidden;
  width: 100%;
}

.fill {
  background-color: #c7932c;
  height: 100%;
  transition: width 0.6s ease;
}

.percent {
  width: 50px;
  text-align: right;
  font-size: 13px;
  color: #fff;
  /* align-self: flex-end; */
}


@media (max-width: 768px) {
  .container {
    flex-direction: column;
    
  }

  .left,
  .right {
    flex: 1 1 100%;
    min-height: 250px; 
  }

  .stats {
    flex-direction: column;
    gap: 15px;
  }

  .stat-box {
    padding: 15px;
  }

  h2 {
    font-size: 22px;
    text-align: center;
  }

  .desc {
    font-size: 12px;
    text-align: center;
    margin-bottom: 20px;
  }

  .progress-bars {
    padding: 15px;
    gap: 20px;
  }

  .label {
    font-size: 11px;
    
  }

  .percent {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .left {
    min-height: 200px;
  }

  h2 {
    font-size: 20px;
  }

  .desc {
    font-size: 11px;
  }

  .stat-box h3 {
    font-size: 22px;
  }

  .stat-box p {
    font-size: 11px;
  }

  .label {
    font-size: 10px;
  }

  .percent {
    font-size: 11px;
  }
}

</style>
