<template>

  <div>
  <section class="welding-section">
    <div class="content-container">
      
     <div class="box-container">
      <div class="box-background"></div>
      <div class="left-column">
        <img src="/images/about.jpg" alt="Welding Worker" />
      </div>
      
    </div>
      <div class="right-column">
        <h2>ULTIMATE WELDING AND QUALITY METAL SOLUTIONS</h2>
        <p>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit.Curabitur
          tellus augue,iaculis id elit eget,ultrices pulvinar tortor.Quisque vel lorem porttitor, malesuada arcu quis,fringilla risus. Pellentesque eu consequat augue.
        </p>

        <div class="features">
          <div class="feature">
            <pre><i class="fa fa-users-cog fa-2x text-primary"></i> CERTIFIED EXPERT & 
         TEAM</pre> 
            
          </div>
          <div class="feature">
            <pre><i class="fa fa-tachometer-alt fa-2x text-primary"></i> FAST & RELIABLE 
         SERVICES</pre>
          </div>
          <ul type="none">
              <li><i class="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum</li>
              <li><i class="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum</li>
              <li><i class="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum</li>
            </ul>
        </div>

        <div class="highlight-box">
          <p>
            <strong>WE'RE GOOD IN ALL METAL WORKS USING<br />QUALITY WELDING TOOLS</strong>
          </p>
        </div>
      </div>
    </div>

    
  </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
.welding-section {
  background-color: #fdfdfd;
  padding: 40px 20px;
}

.content-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: auto;
  flex-wrap: nowrap; 
  margin-top: 60px;
}

.left-column {
  flex: 1;
  max-width: 500px;
}

.left-column img {
  width: 370px;
  height: 400px;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
  margin-left: 80px;

}

.right-column {
  flex: 1;
  max-width: 600px;
  

}


.right-column h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 0;
  font-family: "Poppins", sans-serif;
  
}

.right-column p {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  height: 30px;
}

.features {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  

}
.feature{
  flex: 1 1 45%;
  height: 10px;
}

.feature pre {
  font-size: 14px;
  margin-bottom: 10px;
  color:black;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  width: 200px;
  height: 200px;
  
}
.feature pre i {
  font-size: 16px;
  color:#c7932c;
  background-color:rgb(247, 244, 244);         
  padding: 8px;              
  border-radius: 3px;        
  font-size: 16px;                     
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;                
  height: 15px; 

}

.features ul {
  list-style: none;
  padding-left: 0;
  margin-top:20px;
  padding-top: 0;
  height: 30px
}

.features ul li {
  font-size: 12px;
  margin-bottom: 8px;
  color:  #444;
  position: relative;
  padding-left: 0%;
  font-family: "Poppins", sans-serif;
  margin-left: 0;
  

  
}

.features ul li i {
  color: #c7932c;
  background-color: white;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 0;
  padding-left: 0%;
}

.highlight-box {
  border: 4px solid #c7932c;
  padding: 15px;
  margin-top: 0px;
  box-sizing: border-box;
  border-width: 5px;
  /* height: 50px; */
  text-align: center;
  font-size: 16px;
  color:#2B2C2E;
  font-family: "Poppins", sans-serif;
  
}


.box-container {
  position: relative;
}

@keyframes floatUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); 
  }
  100% {
    transform: translateY(0);    
  }
}


.box-background {
  position: absolute;
  top: -20px;      
  left: 60px;      
  width: 130px;     
  height: 200px;     
  z-index: 1;
  background-color: white;        
  border: 4px solid #c7932c;
   animation: floatUpDown 3s ease-in-out infinite;  
  /* border-radius: 8px;  */
}


.left-column {
  position: relative;
  z-index: 2;
}

</style> 