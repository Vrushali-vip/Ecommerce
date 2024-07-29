import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-black p-2">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>

        <div className="flex flex-wrap items-stretch justify-center">
          <div className="w-full md:w-1/2 px-2 flex items-center">
            <div>
              <p className="mb-4">
                Welcome to ClickMyOrder, your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with an emphasis on quality, customer service, and uniqueness. Founded in 2020 by Vrushali, ClickMyOrder has come a long way from its beginnings in a home office. When Jane first started out, her passion for eco-friendly fashion drove her to start her own business.
              </p>
              <p className="mb-4">
                Our journey began with a simple idea: to offer stylish, sustainable fashion options to consumers worldwide. As advocates for environmental responsibility, we carefully curate our collections to include ethically sourced materials and eco-conscious production methods. Each garment tells a story of craftsmanship and care, reflecting our commitment to both style and sustainability.
              </p>
              <p className="mb-4">
                Over the years, ClickMyOrder has grown into a global brand, serving customers from every corner of the globe. From trendy urbanites to eco-conscious enthusiasts, our diverse clientele appreciates our dedication to quality, innovation, and social responsibility. We take pride in our ability to bridge the gap between fashion and sustainability, offering stylish solutions that don't compromise on ethics or aesthetics.
              </p>
              <p className="mb-4">
                At ClickMyOrder, we believe that fashion should be more than just a trend—it should be a statement. That's why we're constantly pushing the boundaries of creativity and design, exploring new ways to integrate sustainability into every aspect of our business. Whether it's through our use of organic fabrics, our commitment to fair labor practices, or our innovative recycling initiatives, we're always striving to lead by example in the fashion industry. Together, we're not just changing the way people think about fashion—we're changing the world, one garment at a time.
              </p>
              <p className="mb-4">
              As we look to the future, our commitment to sustainability and social responsibility remains unwavering. We'll continue to push boundaries, challenge conventions, and inspire change, all while staying true to our core values of quality, integrity, and innovation. Thank you for joining us on this journey. Together, we can create a brighter, more beautiful world—one stylish step at a time.
              </p>
              <p className="font-bold text-right">Sincerely,</p>
              <p className="font-bold text-right">Vrushali, Founder</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 flex items-center">
            <img className="w-full h-auto max-h-full" src="Images/aboutimg.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
