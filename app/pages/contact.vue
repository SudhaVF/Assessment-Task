<template>
    <Navbar />
    <div class="about-banner" >
      <div class="overlay">
        <div class="banner-content">
          <h1>CONTACT</h1>
          <p><span>Home</span> / <span>Pages</span> / <span class="current">Contact</span></p>
        </div>
      </div>
    </div>
    <section class="appointment-section">
    <div class="left-section">
      <h2>HAVE ANY QUERY? FEEL FREE<br />TO CONTACT US</h2>
      <p>
        The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. 
      </p>

      <div class="info-box">
        <div class="icon-text">
          <i class="bi bi-envelope-at text-dark fs-3"></i>
          <span><strong>MAIL US</strong></span>

        </div>
        <p>info@example.com</p>
        <hr></hr>
        <div class="icon-text">
         <i class="bi bi-telephone text-dark fs-3"></i>
          <span><strong>CALL US</strong></span>
        </div>
        <p>+012 345 6789</p>
      </div>
    </div>

    <div class="right-section">
      <h2>CONTACT US</h2>
      <form class="form-box">
        <div class="form-row">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div class="form-row">
          <input type="text" placeholder="Your Mobile" />
          <input type="text" placeholder="Subject"/>
        </div>

        <textarea rows="4" placeholder="Message"></textarea>

        <button type="submit">SUBMIT NOW</button>
      </form>
    </div>
  </section>
  <div class="contact-map">
    <iframe
      width="100%"
      height="500"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="mapUrl"
    ></iframe>
  </div>

    <Newsletter />
</template>

<script>
export default {
  name: "AppointmentPage",
  name: "ContactMap",
  data() {
    return {
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43862123856!2d-74.11808666435227!3d40.70531103609901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzE5LjIiTiA3NMKwMDcnMDEuMCJX!5e0!3m2!1sen!2sin!4v1620223422075!5m2!1sen!2sin"
    };
  },
};
  import Navbar from '~/components/Navbar.vue'
  import Newsletter from '~/components/Newsletter.vue'

</script>
<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');
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

.appointment-section {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  z-index: 1;
  margin-top: 70px;
}


.appointment-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('/images/carousel-2.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.3);
  z-index: -1; 
}


.left-section {
  flex: 1;
  color: white;
  padding: 40px;
}

.left-section h2 {
  font-size: 26px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
}

.left-section p {
  margin-bottom:20px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  line-height: 1.6;
  
}

.info-box {
  margin-bottom: 20px;

}
hr{
  height: 1px;
  border: none;
  background-color: #ada1a1;
}

.info-box p {
  font-family: "Poppins", sans-serif;
  margin: -18px 0 0 0;
  position: relative;
  top: 6;
  display: flex;
  align-items: flex-start; 
  gap: 2px;
  margin-left: 45px;
  padding-bottom: 20px;
}


.icon-text {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  /* margin-bottom: 5px; */
  font-family: "Roboto", sans-serif;
}

.icon-text i {
  background-color: white;
  color: black;
  padding: 5px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
}
.icon-text span {
  padding-bottom: 18px;
  margin-bottom: 4px;
}

.right-section {
  flex: 1;
  background-color: #fff;
  padding: 30px;
  color: #222;
  margin-top: 50px;
  margin-right: 60px;
  margin-left: -10px;
  /* margin-bottom: 40px; */
}

.right-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;

}

.form-row input {
  flex: 1;
  min-width: 100px;
  height: 30px;
  background-color: #f0efef;
  border: none;
}



.form-box textarea {
  margin-top: 20px;
  padding: 10px;
  background-color: #f0efef;
  width: 400px;
  border: none;
}

.form-box button {
  padding: 12px;
  background-color: #b3861e;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  width: 420px;
}

.form-box button:hover {
  /* background-color: black; */
  color: black;
}

.contact-map {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
 
  /* border-radius: 8px; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

</style>