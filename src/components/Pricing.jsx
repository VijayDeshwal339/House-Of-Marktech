// import React from 'react';

// const plans = [
//   { name: 'Basic', price: '$19/mo', features: ['1 Project', 'Basic Support'] },
//   { name: 'Pro', price: '$49/mo', features: ['10 Projects', 'Priority Support'] },
//   { name: 'Enterprise', price: '$99/mo', features: ['Unlimited Projects', '24/7 Support'] },
// ];

// const Pricing = () => {
//   return (
//     <section className="py-20 px-6 text-center bg-gray-50">
//       <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {plans.map((plan, i) => (
//           <div key={i} className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
//             <p className="text-xl mb-4">{plan.price}</p>
//             <ul className="mb-4">
//               {plan.features.map((f, j) => (
//                 <li key={j}>✅ {f}</li>
//               ))}
//             </ul>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Choose Plan</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Pricing;

import React from 'react';

const plans = [
  { name: 'Basic', price: '$19/mo', features: ['1 Project', 'Basic Support'] },
  { name: 'Pro', price: '$49/mo', features: ['10 Projects', 'Priority Support'] },
  { name: 'Enterprise', price: '$99/mo', features: ['Unlimited Projects', '24/7 Support'] },
];

const Pricing = () => {
  return (
    <section className="py-20 px-6 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl shadow-md p-6 transition-all transform duration-300 ${
              plan.name === 'Pro' ? 'border-2 border-blue-600' : ''
            } hover:scale-105 hover:shadow-lg`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{plan.name}</h3>
            <p className="text-xl text-gray-600 mb-4">{plan.price}</p>
            <ul className="text-left mb-6 text-gray-700 space-y-2">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center">
                  <span className="text-blue-600">✅</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-xl transition-all duration-300 ${
                plan.name === 'Pro' ? 'bg-blue-700 hover:bg-blue-800' : 'hover:bg-blue-500'
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
