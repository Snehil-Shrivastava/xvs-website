const Cookies = () => {
  return (
    <>
      <div className="flex items-center justify-center py-50 max-xs:py-25">
        <div className="w-1/2 max-xs:w-[70%]">
          <header>
            <h1 className="text-brand font-bold text-4xl max-xs:text-[22px]">
              Cookies Policy
            </h1>
            <span className="text-brand-cream max-xs:text-xs">
              Last Updated: 02<sup>nd</sup> December 2025
            </span>
          </header>
          <div className="mt-20 max-xs:mt-10 text-xl max-xs:text-sm leading-10 max-xs:leading-5 flex flex-col gap-10 max-xs:gap-8">
            <ol className="list-decimal">
              <li>What are Cookies?</li>
              <p>Small files stored on your device.</p>
              <li className="mt-10">Types We Use</li>
              <ul className="list-['-']">
                <li>&nbsp;Essential cookies</li>
                <li>&nbsp;Analytical cookies (Google Analytics)</li>
              </ul>
              <li className="mt-10">Why We Use Cookies</li>
              <p>To improve performance and analyse traffic.</p>
              <li className="mt-10">Managing Cookies</li>
              <p>Manage them through browser settings.</p>
              <li className="mt-10">Third-Party Cookies</li>
              <p>May be set by Google Analytics, Hostinger, WhatsApp API.</p>
              <li className="mt-10">Updates</li>
              <p>We may update this policy.</p>
              <li className="mt-10">Contact</li>
              <p>info@xvscreations.com</p>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
