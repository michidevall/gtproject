import React from 'react';
import './App.css'; 
import logo from './logo.png';
import ContactForm from './ContactForm';
import instagramLogo from './instagram.png'; // Ensure you have an Instagram logo image
import etsyLogo from './etsy.png'; // Ensure you have an Etsy logo image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <h1>Welcome to G & T Estate Services</h1>
        {/* <p>A brief description of your product or service.</p> */}
        <button onClick={() => window.open('https://www.instagram.com/gtestateservicesltd/', '_blank')}>
      <img src={instagramLogo} alt="instagram" style={{height: "60px", width: "auto"}} />
      </button>
    <button onClick={() => window.open('https://www.estatesales.net/companies/CO/Denver/80203/166514', '_blank')}>
    <a href="https://www.estatesales.net/">
  <img src="https://www.estatesales.net/assets/images/logos/dark100.png" width="385" height="65" alt="EstateSales.NET" />
</a>
      </button>
      {/* <button onClick={() => window.open('https://www.instagram.com/gtestateservicesltd/', '_blank')}>
      <img src={instagramLogo} alt="instagram" style={{height: "60px", width: "auto"}} />
      </button> */}
    <button onClick={() => window.open('https://www.etsy.com/shop/gtvintageco/?etsrc=sdt', '_blank')}>
    <img src={etsyLogo} alt="etsy" style={{height: "60px", width: "auto"}} />
      </button>
      </header>
      <main>
        <section className="features">
          <h2>About Us</h2>
          <div className="feature">
            {/* <h3>Feature 1</h3> */}
            <p>With well over a decade in Denver's estate sale scene, we bring big company know-how with a genuine personal touch.  We understand that this process can be daunting, and our main focus is on making these transitions as easy as possible on our clients. We offer flexible terms, a wealth of knowledge, and real local experience. </p>
          </div>
          {/* <div className="feature">
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
          </div> */}
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
          <p>If you have any questions, feel free to reach out!
            <br />
            <strong>Gracie:</strong>
            <br /> 970-302-7444
            <br />          
            <strong>Tyler:</strong>
            <br /> 720-254-4907
            <br />
          </p>
          </div>
          
         <div className="App">
         {/* <h1>Contact</h1> */}
        <ContactForm />
         </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 G&T Estate Services</p>
      </footer>
    </div>
  );
}

export default App;