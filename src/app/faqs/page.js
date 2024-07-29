"use client"

import React, { useState } from 'react';
import Head from 'next/head';

const faqs = [
  {
    question: "What is ClickMyOrder?",
    answer: "ClickMyOrder is your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with an emphasis on quality, customer service, and uniqueness. Our goal is to offer a diverse range of stylish and trendy apparel that meets the highest standards of craftsmanship. We believe in creating a seamless shopping experience and building lasting relationships with our customers."
  },
  {
    question: "How do I place an order?",
    answer: "Placing an order on ClickMyOrder is simple and straightforward. Start by browsing our catalog and selecting the items you wish to purchase. Add your chosen items to your cart, then proceed to checkout. Follow the prompts to enter your shipping and payment information, review your order details, and complete your purchase. Once your order is confirmed, you will receive a confirmation email with all the necessary details."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods including major credit cards such as Visa, MasterCard, and American Express. Additionally, you can use PayPal and Apple Pay for a more seamless checkout experience. All transactions are securely processed using advanced encryption technologies to ensure your information is protected."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order has been shipped, you will receive a confirmation email containing a tracking number. This tracking number can be used on our website or the carrier's website to monitor the status and progress of your delivery. If you encounter any issues or do not receive a tracking number, please reach out to our customer service team for assistance."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. If you are not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange. The item must be in its original condition and packaging. To initiate a return, please contact our customer service team to obtain a return authorization number and further instructions."
  },
  {
    question: "How do I contact customer service?",
    answer: "You can reach our customer service team via email at support@clickmyorder.com or by phone at 1-800-123-4567. Our customer service hours are Monday through Friday from 9 AM to 5 PM EST. We aim to respond to all inquiries within 24 hours to ensure you receive the help you need promptly."
  },
  {
    question: "Do you offer expedited shipping?",
    answer: "Yes, we offer expedited shipping options for an additional fee. During the checkout process, you can select expedited shipping and see the estimated delivery time and cost. This option is available for both domestic and international orders, ensuring that you can receive your items as quickly as possible when needed."
  },
  {
    question: "Are there any items that cannot be shipped internationally?",
    answer: "Certain items may be restricted or prohibited from international shipping due to regulations or shipping carrier limitations. These items include hazardous materials, oversized products, and specific electronics. If an item cannot be shipped to your country, you will be notified at checkout or contacted by our customer service team to discuss alternatives."
  },
  {
    question: "Can I request a specific delivery date?",
    answer: "While we cannot guarantee a specific delivery date, we do offer options to prioritize your shipping. If you have special delivery requirements, please add a note during the checkout process or contact our customer service team. We will make every effort to accommodate your request within the limitations of our shipping partners."
  },
  {
    question: "How can I provide feedback on my purchase?",
    answer: "We value your feedback and welcome your comments on your shopping experience. After you receive your order, you will receive an email invitation to review the products and share your experience. Additionally, you can contact our customer service team directly to provide feedback and suggestions, helping us improve our services."
  },
  {
    question: "Do you offer wholesale or bulk purchasing options?",
    answer: "Yes, we offer wholesale and bulk purchasing options for businesses and large orders. For more information on pricing, minimum order quantities, and special terms, please contact our sales team at wholesale@clickmyorder.com. We are happy to discuss how we can meet your bulk purchasing needs and provide tailored solutions."
  },
  {
    question: "What do I do if I have issues with my account?",
    answer: "If you encounter any issues with your account, such as trouble logging in or updating your information, please contact our customer service team for assistance. We can help reset your password, update your account details, and resolve any other account-related issues promptly. Ensuring your account is fully functional is our priority."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQ - ClickMyOrder</title>
        <meta name="description" content="Frequently Asked Questions about ClickMyOrder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white text-black p-2 min-h-screen">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full text-left p-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{faq.question}</span>
                    <span>{activeIndex === index ? '-' : '+'}</span>
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
