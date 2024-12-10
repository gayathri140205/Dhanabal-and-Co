import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure to include this for Bootstrap JS to work

function App() {
  return (
    <div>
      {/* Header Section */}
      <header style={{ backgroundColor: '#004080', color: '#fff', textAlign: 'center', padding: '1rem 0' }}>
        <img src="/assets/images/img1.jpg" alt="Dhanabal and Co Logo" style={{ width: '150px' }} />
        <h1>Dhanabal and Co</h1>
        <p>Engineers and Builders | Building Dreams with Excellence</p>
      </header>

      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Dhanabal and Co</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <div id="buildingCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/img8.jpg" className="d-block w-100 img-fluid" alt="Building exterior with modern architecture" /> {/* img-fluid makes image responsive */}
          </div>
          <div className="carousel-item">
            <img src="/assets/images/img9.jpg" className="d-block w-100 img-fluid" alt="Construction site in progress" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/img4.jpg" className="d-block w-100 img-fluid" alt="Completed residential building" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#buildingCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#buildingCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About Section */}
      <section className="container mt-4">
        <div id="about" className="text-center">
          <h2>About Us</h2>
          <p>Dhanabal & Co, having been around for more than 10 years in the Coimbatore Realty business, has built a deep connection with the people of Coimbatore that are guaranteed to last a lifetime. Dhanabal & Co has imbued in Coimbatore culture.</p>
        </div>

        {/* Services Section */}
        <div id="services" className="text-center mt-4">
          <h2>Our Services</h2>
          <ul className="list-unstyled">
            <li>✔ Residential Construction</li>
            <li>✔ Commercial Construction</li>
            <li>✔ Renovation and Remodeling</li>
            <li>✔ Structural Engineering</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div id="contact" className="text-center mt-4">
          <h2>Contact Us</h2>
          <p>📍 Address: 36, Marudham Nagar, Saravanampatti, Coimbatore</p>
          <p>📞 Phone: +91-9843353335</p>
          <p>📧 Email: dhanabalan.engg@gmail.com</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#004080', color: '#fff', textAlign: 'center', padding: '1rem 0', marginTop: '2rem' }}>
        <p>&copy; 2024 Dhanabal and Co Engineers and Builders. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;