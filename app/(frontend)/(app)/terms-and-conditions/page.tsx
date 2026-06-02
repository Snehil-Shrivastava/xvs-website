import Link from "next/link";

const Terms = () => {
  return (
    <>
      <div className="flex items-center justify-center py-50 max-xs:py-25">
        <div className="w-1/2 max-xs:w-[70%]">
          <header>
            <h1 className="text-brand font-bold text-4xl max-xs:text-[22px]">
              Terms & Conditions
            </h1>
            <span className="text-brand-cream max-xs:text-xs">
              Last Updated: 02<sup>nd</sup> December 2025
            </span>
          </header>
          <div className="mt-20 max-xs:mt-10 text-xl max-xs:text-sm leading-10 max-xs:leading-5 flex flex-col gap-10 max-xs:gap-8">
            <p>
              Welcome to xVS Creations (“we”, “our”, “us”). These Terms &
              Conditions govern your use of our website www.xvscreations.com,
              owned and operated by xVS Creations Private Limited, registered in
              Uttar Pradesh, India.
            </p>
            <p>By accessing or using our website, you agree to these Terms.</p>
            <ol className="list-decimal">
              <li>Use of Our Website</li>
              <p>
                You may browse our website, explore our portfolio, submit
                enquiry forms, and book meetings. You agree not to:
              </p>
              <ul className="list-['-']">
                <li>&nbsp;Use the website for illegal or harmful activities</li>
                <li>
                  &nbsp;Try to disrupt or access our systems without permission
                </li>
                <li>&nbsp;Copy or reuse our content without written consent</li>
              </ul>
              <li className="mt-10">Services</li>
              <p>
                xVS Creations Private Limited provides design services for
                branding, advertising, and marketing. All services are provided
                based on project discussions, agreements, or quotations shared
                with clients. Our website itself does not process payments or
                e-commerce transactions.
              </p>
              <li className="mt-10">Intellectual Property</li>
              <p>
                All content, designs, images, portfolio work, logos, and text
                displayed on this website belong to xVS Creations Private
                Limited unless stated otherwise. You may not copy or reproduce
                without permission.
              </p>
              <li className="mt-10">User Submissions</li>
              <p>
                When you submit forms, messages, reviews, or any information on
                our website, you confirm accuracy and grant permission to
                contact you.
              </p>
              <li className="mt-10">Third-Party Tools</li>
              <p>
                We use Google Analytics, WhatsApp API, and Google services for
                meeting bookings.
              </p>
              <li className="mt-10">Limitation of Liability</li>
              <p>
                We do not guarantee uninterrupted or error-free website
                performance and are not responsible for any losses arising from
                use.
              </p>
              <li className="mt-10">Privacy</li>
              <p>Use of the website is governed by our Privacy Policy.</p>
              <li className="mt-10">Changes to Terms</li>
              <p>We may update these Terms.</p>
              <li className="mt-10">Governing Law</li>
              <p>
                These Terms are governed by the laws of India, Uttar Pradesh.
              </p>
              <li className="mt-10">Contact</li>
              <Link href="mailto:info@xvscreations.com">
                info@xvscreations.com
              </Link>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
