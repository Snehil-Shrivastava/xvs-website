// import { RefObject } from "react";

// export default function PlanetHorizon({
//   arccontainerRef,
//   arcRef,
// }: {
//   arccontainerRef: RefObject<HTMLDivElement | null>;
//   arcRef: RefObject<HTMLDivElement | null>;
// }) {
//   return (
//     <div
//       ref={arccontainerRef}
//       className="absolute inset-x-0 bottom-0 h-full min-h-75 overflow-hidden pointer-events-none select-none z-0"
//     >
//       <div
//         ref={arcRef}
//         className="absolute top-[60%] left-1/2 w-[200vw] sm:w-[150vw] h-550 -translate-x-1/2 rounded-[100%]"
//         style={{
//           backgroundColor: "#282828",
//           borderTop: "1.5px solid #fe9227b3",
//           boxShadow: `
//             0 -40px 150px -20px rgba(247, 152, 57, 0.4), /* Wide ambient glow */
//             0 -10px 30px -5px rgba(247, 152, 57, 0.6)    /* Sharp bright edge glow */
//           `,
//         }}
//       />
//     </div>
//   );
// }

// --------------------------- test

import { RefObject } from "react";

export default function PlanetHorizon({
  arccontainerRef,
  arcRef,
}: {
  arccontainerRef: RefObject<HTMLDivElement | null>;
  arcRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={arccontainerRef}
      // "absolute inset-0 w-full h-full" ensures it completely fills the parent
      className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none select-none"
    >
      <div
        ref={arcRef}
        className={`
          absolute left-1/2 -translate-x-1/2 rounded-[100%] w-[90%] aspect-square top-1/2 -translate-y-1/2 md:w-[150vw] md:h-137.5 md:aspect-auto md:top-[60%] md:translate-y-0
        `}
        style={{
          backgroundColor: "#282828",
          borderTop: "1px solid #fe9227b3",
          boxShadow: `
            0 -40px 150px -20px rgba(247, 152, 57, 0.4), /* Wide ambient glow */
            0 -10px 30px -5px rgba(247, 152, 57, 0.6)    /* Sharp bright edge glow */
          `,
        }}
      />
    </div>
  );
}
