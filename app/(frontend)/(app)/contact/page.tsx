// import ContactPage from "@/page/ContactPage";

// const Contact = () => {
//   return (
//     <div className="h-350 max-md:h-280 md:max-lg:h-260 lg:max-1440p:h-320">
//       <ContactPage />
//     </div>
//   );
// };

// export default Contact;

// -------------------------------------------

"use client"; // 1. Mark this as a client component to use React hooks

import { useEffect } from "react"; // 2. Import useEffect
import ContactPage from "@/page/ContactPage";

const Contact = () => {
  // 3. Force the window to scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-350 max-md:h-280 md:max-lg:h-260 lg:max-1440p:h-320">
      <ContactPage />
    </div>
  );
};

export default Contact;
