// 'use client';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/src/redux/store';
// import Image from 'next/image';

// const page = () => {
//   const selectedShop = useSelector((state: RootState) => state.cart.items);

//   return (
//     <div>
//       <h1 className="font-bold text-3xl text-lime-900">Storely Shopping</h1>
//       <div className="flex flex-col gap-4 h-lg">
//         {selectedShop.map((item) => (
//           <div key={item.id} className="bg-amber-600 text-black gap-10">
//             <img src={item.image} alt={item.title} />
//             <h2>{item.title}</h2>
//             <span>{item.price}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
'use client';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Cart() {
  const { data, error } = useSWR('/api/cart', fetcher);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="bg-amber-500">
          <p>{item.productId}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
