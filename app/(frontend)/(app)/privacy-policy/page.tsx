const Privacy = () => {
  return (
    <>
      <div className="flex items-center justify-center py-50 max-xs:py-25">
        <div className="w-1/2 max-xs:w-[70%]">
          <header>
            <h1 className="text-brand font-bold text-4xl max-xs:text-[22px]">
              Privacy Policy
            </h1>
            <span className="text-brand-cream max-xs:text-xs">
              Last Updated: 02<sup>nd</sup> December 2025
            </span>
          </header>
          <div className="mt-20 max-xs:mt-10 text-xl max-xs:text-sm leading-10 max-xs:leading-5 flex flex-col gap-10 max-xs:gap-8">
            <p>
              At xVS Creations Private Limited, we are committed to protecting
              your privacy. This Privacy Policy explains how we collect and use
              your information when you visit www.xvscreations.com.
            </p>
            <ol className="list-decimal">
              <li>Information We Collect</li>
              <ul className="list-['-']">
                <li>
                  &nbsp;Name, Email, Phone, Newsletter data, User-submitted
                  messages.
                </li>
                <li>
                  &nbsp;Automatically: IP, device info, pages visited, essential
                  and analytics cookies.
                </li>
              </ul>
              <li className="mt-10">How We Use Your Information</li>
              <p>
                To respond to enquiries, improve services, send newsletters, and
                analyse traffic.
              </p>
              <li className="mt-10">Sharing of Information</li>
              <p>
                We use Google Analytics, WhatsApp API, Google meeting services,
                and Hostinger VPS.
              </p>
              <li className="mt-10">Data Protetion</li>
              <p>We use reasonable security measures.</p>
              <li className="mt-10">User Rights</li>
              <p>
                Access, correct, delete, withdraw consent, opt-out of
                newsletters.
              </p>
              <li className="mt-10">GDPR Compliance</li>
              <p>
                EU users may request data deletion and exercise enhanced rights.
              </p>
              <li className="mt-10">CCPA Compliance</li>
              <p>
                California users may request data details and deletion. We do
                not sell personal data.
              </p>
              <li className="mt-10">Rentention</li>
              <p>Data retained only as needed.</p>
              <li className="mt-10">Third-Party Links</li>
              <p>We aren&apos;t responsible for external site practices.</p>
              <li className="mt-10">Contact</li>
              <p>info@xvscreations.com</p>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
