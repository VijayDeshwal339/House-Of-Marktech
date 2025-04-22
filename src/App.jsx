import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Hero />
      <Services />
      <Pricing />
      <ContactForm />
      <UserList />
    </div>
  );
};

export default App;