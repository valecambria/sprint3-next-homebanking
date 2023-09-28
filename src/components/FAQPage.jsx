import React from 'react';
import FAQSection from './FaqSection';
import FAQItem from './Faq';
import Header from './Header';
import Footer from './Footer';


function FAQPage() {
  return (
    <div className="faq-page">
      <Header />
      <FAQSection />
      <FAQItem />
      <Footer />
    </div>
  );
}

export default FAQPage;
