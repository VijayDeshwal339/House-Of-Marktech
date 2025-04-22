// import React from 'react';
// import web from '../assets/pexels-pixabay-39284.jpg'
// import Seo from '../assets/pexels-vlada-karpovich-4050312.jpg'
// import Digital from '../assets/pexels-serpstat-177219-572056.jpg'

// const services = [
//   { title: 'Web Development', desc: 'Modern and responsive websites.', img: web },
//   { title: 'SEO Optimization', desc: 'Boost your site ranking.', img: Seo },
//   { title: 'Digital Marketing', desc: 'Reach a wider audience.', img: Digital },
// ];

// const Services = () => {
//   return (
//     <section className="py-20 px-6 text-center">
//       <h2 className="text-4xl font-bold mb-12">Our Services</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {services.map((service, i) => (
//           <div key={i} className="bg-white rounded-2xl shadow-md p-6">
//             <img src={service.img} alt={service.title} className="rounded-xl mb-4 w-full h-48 object-cover" />
//             <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
//             <p>{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from 'react';
import web from '../assets/pexels-pixabay-39284.jpg';
import Seo from '../assets/pexels-vlada-karpovich-4050312.jpg';
import Digital from '../assets/pexels-serpstat-177219-572056.jpg';

const services = [
  { title: 'Web Development', desc: 'Modern and responsive websites.', img: web },
  { title: 'SEO Optimization', desc: 'Boost your site ranking.', img: Seo },
  { title: 'Digital Marketing', desc: 'Reach a wider audience.', img: Digital },
];

const Services = () => {
  return (
    <section className="py-20 px-6 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <img
              src={service.img}
              alt={service.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
