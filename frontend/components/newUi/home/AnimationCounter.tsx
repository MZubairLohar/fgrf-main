import React, { useState, useEffect } from 'react';

const AnimatedNumberCounter = () => {
    const [shown1, setShown1] = useState(false);
    const [shown2, setShown2] = useState(false);
    const [shown3, setShown3] = useState(false);

  useEffect(() => {
    // Load Alpine.js scripts
    const alpineScript1 = document.createElement('script');
    alpineScript1.src = 'https://cdn.jsdelivr.net/npm/@alpinejs/intersect@3.x.x/dist/cdn.min.js';
    alpineScript1.defer = true;
    document.head.appendChild(alpineScript1);

    const alpineScript2 = document.createElement('script');
    alpineScript2.src = 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js';
    alpineScript2.defer = true;
    document.head.appendChild(alpineScript2);

    // Trigger animations
    setShown1(true);
    setShown2(true);
    setShown3(true);
  }, []); 

  return (
    <div>
      <section className="grid gap-12 md:grid-cols-3 md:gap-16">
        <article>
          <h2>
            <span
              className={`flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] ${
                shown1 && '[--num:40]'
              }`}
            >
              <span className="supports-[counter-set]:sr-only">40</span>K+
            </span>
          </h2>
        </article>

        <article>
          <h2>
            <span
              className={`flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] ${
                shown2 && '[--num:70]'
              }`}
            >
              <span className="supports-[counter-set]:sr-only">70</span>K+
            </span>
          </h2>
        </article>

        <article>
          <h2>
            <span
              className={`flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2 transition-[_--num] duration-[10s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] ${
                shown3 && '[--num:540000]'
              }`}
            >
              <span className="supports-[counter-set]:sr-only">540000</span>+
            </span>
          </h2>
        </article>
      </section>
    </div>
  );
};

export default AnimatedNumberCounter;