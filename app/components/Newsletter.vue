<template>
  <section class="complete-section">
    
    <div class="newsletter">
      <div class="newsletter-content">
        <h2>NEWSLETTER</h2>
        <p>
          <i class="far fa-envelope-open fa-3x text-primary me-4"></i>
          <em>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore lorem ipsum.</em>
        </p>
      </div>
      <div class="newsletter-form">
        <input type="email" placeholder="Your Email" />
        <button>SUBMIT NOW</button>
      </div>
    </div>

    
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-column">
          <h3>OUR OFFICE</h3>
          <p><i class="fa fa-map-marker-alt text-primary me-3"></i> 123 Street, New York, USA</p>
          <p><i class="fas fa-phone"></i> +012 345 67890</p>
          <p><i class="fa fa-envelope text-primary me-3"></i> info@example.com</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div class="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><i class="fas fa-chevron-right"></i>About Us</li>
            <li><i class="fas fa-chevron-right"></i>Contact Us</li>
            <li><i class="fas fa-chevron-right"></i>Our Services</li>
            <li><i class="fas fa-chevron-right"></i>Terms & Condition</li>
            <li><i class="fas fa-chevron-right"></i>Support</li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>BUSINESS HOURS</h3>
          <p>MONDAY - FRIDAY<br />09:00 am - 07:00 pm</p>
          <p>SATURDAY<br />09:00 am - 12:00 pm</p>
          <p>SUNDAY<br />Closed</p>
        </div>

        <div class="footer-column gallery">
          <h3>GALLERY</h3>
          <div class="gallery-images">
            <img
              v-for="(image, index) in galleryImages"
              :key="index"
              :src="image"
              :alt="`Gallery image ${index + 1}`"
            />
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© <strong>Your Site Name</strong>, All Right Reserved.</p>
        <p>Designed By <strong>HTML Codex</strong> Distributed by <strong>ThemeWagon</strong></p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "NewsletterFooter",
   data() {
    return {
      galleryImages: [
        '/images/carousel-1.jpg',
        '/images/carousel-2.jpg',
        '/images/carousel-3.jpg',
        '/images/carousel-4.jpg',
        '/images/carousel-5.jpg',
        '/images/carousel-6.jpg',
      ]
    }
  }
};
</script>

<style scoped>
.complete-section {
  position: relative;
  margin-top: 100px;
  /* height: 400px; */
  overflow: hidden;
  z-index: 1;
}

.complete-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 350px;
  background-image: url('/images/carousel-3.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.4); 
  z-index: -1;
}

.newsletter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 30px;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 60px;
  
}
.newsletter-content h2 {
  font-size: 24px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
}
.newsletter-content p{
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #797672;
  display: inline-block;
  padding-left: 30px;
  text-indent: -20px;
  max-width: 600px;
}
.newsletter-content p i{
  font-size: 22px;
  color: #c7932c;
  width: 24px;
  flex-shrink: 0;
}
.newsletter-content {
  width: 50%;
}
.newsletter-content .icon {
  width: 25px;
  vertical-align: middle;
  margin-right: 10px;
}
.newsletter-form {
  width: 45%;
  display: flex;
  flex-direction: column;
}
.newsletter-form input {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f4f1f1;
  border: none;
  outline: none;
}
.newsletter-form input:focus {
  border: 2px solid #CE9233;
}
.newsletter-form button {
  background: #CE9233;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 10px;
}


.footer {
  background: #343535;
  color: #fff;
  font-size: 14px;
}
.footer-top {
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
  flex-wrap: wrap;
}
.footer-column {
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
}
.footer-column p i{
  color: #CE9233;
}
.footer-column p{
  font-family: "Poppins", sans-serif;
  color: #797672;
  font-size: 11px;
  
}
.footer-column h3 {
  margin-bottom: 15px;
  color: white;
  font-family: "Roboto", sans-serif;
}
.footer-column ul {
  list-style: none;
  padding: 0;
}
.footer-column ul li {
  margin-bottom: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  color: #797672;
 
}
.footer-column ul li i{
  color: #CE9233;
  font-size: 10px;
  font-weight: bold;
  
}
.footer-column .social-icons a {
  margin-right: 10px;
  color: black;
  background-color: white;
  text-decoration: none;
  /* background-size: 70px; */
  font-size: 14px;       
  width: 25px;           
  height: 25px;          
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.footer-column .gallery-images img {
  /* margin: 2px; */
  width: 60px;
  height: 50px;
}
.footer-bottom {
  text-align: center;
  background: #252424;
  padding: 10px 0;
  font-size: 13px;
  border-top: 1px solid #333;
  justify-content: space-between;
  display: flex;
  align-items: center;
  
}
.footer-bottom p{
  color: #797672;
  font-family: "Poppins", sans-serif;
  margin-right: 60px;
  margin-left: 60px;
  font-weight: 200;
}
.footer-bottom p strong{
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 200;

}



@media screen and (max-width: 768px) {
  
  .newsletter {
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    text-align: center;
  }

  .newsletter-content {
    width: 100%;
    margin-bottom: 20px;
  }

  .newsletter-content h2 {
    font-size: 20px;
  }

  .newsletter-content p {
    font-size: 16px;
    padding-left: 0;
    text-indent: 0;
    max-width: 100%;
  }

  .newsletter-form {
    width: 100%;
  }

  .newsletter-form input {
    width: 100%;
    margin-bottom: 10px;
  }

  .newsletter-form button {
    width: 100%;
    font-size: 12px;
  }

  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .footer-column {
    width: 100%;
    margin-bottom: 20px;
  }

 
  .footer-column.gallery .gallery-images {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .footer-column.gallery .gallery-images img {
    width: 48%;
    height: auto;
  }

  
  .footer-bottom {
    flex-direction: column;
    gap: 7px;
    text-align: center;
    padding: 15px 10px;
  }

  .footer-bottom p {
    margin: 0;
  }
}

</style>