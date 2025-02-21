// import React, { useState, useEffect } from "react";
// import styles from "./AnalogWatch.module.css";

// const AnalogWatch = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const hours = time.getHours() % 12;
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   const hourRotation = ((hours + minutes / 60) * 360) / 12;
//   const minuteRotation = ((minutes + seconds / 60) * 360) / 60;
//   const secondRotation = (seconds * 360) / 60;

//   return (
//     <div className={styles.analogWatch}>
//       <div
//         className={styles.handMH}
//         style={{ transform: `rotate(${hourRotation}deg)` }}
//       ></div>
//       <div
//         className={styles.handMH}
//         style={{ transform: `rotate(${minuteRotation}deg)` }}
//       ></div>
//       <div
//         className={styles.handS}
//         style={{ transform: `rotate(${secondRotation}deg)` }}
//       ></div>
//     </div>
//   );
// };

// export default AnalogWatch;

// new code
// import React, { useState, useEffect } from "react";
// import styles from "./AnalogWatch.module.css";

// const AnalogWatch: React.FC = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const hours = time.getHours() % 12;
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   const hourRotation = ((hours + minutes / 60) * 360) / 12;
//   const minuteRotation = ((minutes + seconds / 60) * 360) / 60;
//   const secondRotation = (seconds * 360) / 60;

//   return (
//     <div className={styles.analogWatch}>
//       {Array.from({ length: 12 }, (_, index) => index + 1).map((hour) => (
//         <div key={hour} className={`${styles.hourMarker} hour${hour}`} />
//       ))}
//       {Array.from({ length: 12 }, (_, index) => index + 1).map((hour) => (
//         <div key={hour} className={`${styles.hourContainer} hour${hour}`}>
//           {hour}
//         </div>
//       ))}
//       <div
//         className={`${styles.hand} ${styles.hourHand}`}
//         style={{ transform: `rotate(${hourRotation}deg)` }}
//       ></div>
//       <div
//         className={`${styles.hand} ${styles.minuteHand}`}
//         style={{ transform: `rotate(${minuteRotation}deg)` }}
//       ></div>
//       <div
//         className={`${styles.hand} ${styles.secondHand}`}
//         style={{ transform: `rotate(${secondRotation}deg)` }}
//       ></div>
//     </div>
//   );
// };

// export default AnalogWatch;

// new code
// import React, { useState, useEffect } from "react";
// import styles from "./AnalogWatch.module.css";

// const AnalogWatch = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const hours = time.getHours() % 12;
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   const hourRotation = ((hours + minutes / 60) * 360) / 12;
//   const minuteRotation = ((minutes + seconds / 60) * 360) / 60;
//   const secondRotation = (seconds * 360) / 60;

//   return (
//     <div className={styles.analogWatch}>
//       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((hour) => (
//         <div key={hour + 1} className={`${styles.hourMarker} hour${hour + 1}`}>
//           {hour + 1}
//         </div>
//       ))}
//       <div
//         className={`${styles.handMH} ${styles.hourHand}`}
//         style={{ transform: `rotate(${hourRotation}deg)` }}
//       ></div>
//       <div
//         className={`${styles.handMH} ${styles.minuteHand}`}
//         style={{ transform: `rotate(${minuteRotation}deg)` }}
//       ></div>
//       <div
//         className={`${styles.handS} ${styles.secondHand}`}
//         style={{ transform: `rotate(${secondRotation}deg)` }}
//       ></div>
//     </div>
//   );
// };

// export default AnalogWatch;

// new code
// import React, { useState, useEffect } from "react";
// import styles from "./AnalogWatch.module.css";

// const AnalogWatch = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const hours = time.getHours() % 12;
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   const hourRotation = ((hours + minutes / 60) * 360) / 12;
//   const minuteRotation = ((minutes + seconds / 60) * 360) / 60;
//   const secondRotation = (seconds * 360) / 60;

//   const hourMarkers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((hour) => (
//     <div
//       key={hour + 1}
//       className={`${styles.hourMarker} hour${hour + 1}`}
//       style={{ transform: `rotate(${(hour + 1) * 30}deg)` }}
//     >
//       {hour + 1}
//     </div>
//   ));

//   return (
//     <div className={styles.analogWatch}>
//       {hourMarkers}
//       <div
//         className={`${styles.handMH} ${styles.hourHand}`}
//         style={{ transform: `rotate(${hourRotation}deg)` }}
//       ></div>
//       <div
//         className={`${styles.handMH} ${styles.minuteHand}`}
//         style={{ transform: `rotate(${minuteRotation}deg)` }}
//       ></div>
//       <div
//         className={`${styles.handS} ${styles.secondHand}`}
//         style={{ transform: `rotate(${secondRotation}deg)` }}
//       ></div>
//     </div>
//   );
// };

// export default AnalogWatch;

// new
import React, { useEffect, useState } from "react";
import styles from "./AnalogWatch.module.css";
const AnalogWatch: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.clock}>
      <div
        className={styles.hour_hand}
        style={{
          transform: `rotateZ(${time.getHours() * 30}deg)`,
        }}
      ></div>
      <div
        className={styles.min_hand}
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`,
        }}
      ></div>
      <div
        className={styles.sec_hand}
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`,
        }}
      ></div>
      <span className={styles.twelve}>12</span>
      <span className={styles.one}>1</span>
      <span className={styles.two}>2</span>
      <span className={styles.three}>3</span>
      <span className={styles.four}>4</span>
      <span className={styles.five}>5</span>
      <span className={styles.six}>6</span>
      <span className={styles.seven}>7</span>
      <span className={styles.eight}>8</span>
      <span className={styles.nine}>9</span>
      <span className={styles.ten}>10</span>
      <span className={styles.eleven}>11</span>
    </div>
  );
};

export default AnalogWatch;
