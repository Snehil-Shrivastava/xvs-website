import {
  Body,
  Container,
  pixelBasedPreset,
  Preview,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Tailwind,
  Text,
  Section,
  Row,
  Column,
} from "react-email";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const baseUrl = "https://xvs-dev-website.vercel.app";

const ContactFormEmail = ({
  name,
  email,
  phone,
  message,
}: ContactEmailTemplateProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
            format: "embedded-opentype",
          }}
        />
      </Head>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#f79839",
                brandBlack: "#282828",
                containerBlack: "#333333",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
              fontFamily: {
                poppins: ["Poppins", "sans-serif"],
              },
            },
          },
        }}
      >
        <Body className="bg-brandBlack font-poppins">
          <Preview>Contact Form Confirmation</Preview>
          <Img
            src={`${baseUrl}/svg/xvs-logo-svg.svg`}
            width="184"
            height="75"
            alt="xvs creations"
            className="mx-auto my-20"
          />
          <Container className="bg-containerBlack px-10 text-white py-10">
            <Section>
              <Row>
                <Text className="text-brand text-2xl font-light text-center my-0">
                  Hello,
                </Text>
              </Row>
              <Heading className="text-center my-3 text-5xl">
                {name ? name : "John Doe"}
              </Heading>
              <Row>
                <Text className="text-center">Thanks for reaching out!</Text>
              </Row>
            </Section>
            <Hr className="my-4 opacity-30 w-3/5" />
            <Section>
              <Row>
                <Text className="text-brand font-semibold text-center text-xl">
                  Here&apos;s a quick summary of your request
                </Text>
              </Row>
              <Row>
                <Text className="text-center font-light opacity-80 my-0">
                  You wanted to contact us about
                </Text>
              </Row>
              <Heading className="text-center my-0">
                {message ? message : "Logo Design for company"}
              </Heading>
              <Row>
                <Text className="text-center font-light opacity-80 mt-10 mb-0">
                  Your contact details are as follows
                </Text>
              </Row>
              <Heading className="text-center mt-2 mb-2">
                {email ? email : "john@doe.com"},
              </Heading>
              <Heading className="text-center mt-0">
                {phone ? phone : "9845211567"}
              </Heading>
            </Section>
            <Hr className="my-4 opacity-30 w-3/5" />
            <Section>
              <Row>
                <Text className="text-brand font-semibold text-center text-xl">
                  What happens next?
                </Text>
              </Row>
              <ul>
                <li className="text-brand" style={{ fontSize: "28px" }}>
                  <Text className="text-white text-lg">
                    Our team will review your request and respond within one
                    business day.
                  </Text>
                </li>
              </ul>
            </Section>
            <Hr className="my-8 opacity-30 w-3/5" />
            <Section>
              <Row>
                <Text className="text-center font-bold text-lg my-0">
                  To add any more information, you can simply reply to this
                  email.
                </Text>
              </Row>
            </Section>
          </Container>
          <Container className="py-12 text-white">
            <Section>
              <Row>
                <Text className="my-0 text-center">Best regards,</Text>
              </Row>
              <Row>
                <Text className="my-0 text-center">
                  The xVS Creations&apos; Team
                </Text>
              </Row>
              <Row>
                <Link href={`https://xvscreations.com`}>
                  <Text className="my-0 text-center text-white">
                    www.xvscreations.com
                  </Text>
                </Link>
              </Row>
            </Section>
            <Section className="mt-10">
              <Row className="w-1/2">
                <Column align="center">
                  <Link href="https://www.behance.net/xVSCreations">
                    <Img
                      src={`${baseUrl}/svg/behance.svg`}
                      width="22"
                      height="22"
                      alt="Behance"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://www.instagram.com/xvscreations">
                    <Img
                      src={`${baseUrl}/svg/instagram.svg`}
                      width="20"
                      height="20"
                      alt="Instagram"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://www.dribbble.com/xvscreations">
                    <Img
                      src={`${baseUrl}/svg/dribble.svg`}
                      width="20"
                      height="20"
                      alt="Dribble"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://www.facebook.com/xVSCreations">
                    <Img
                      src={`${baseUrl}/svg/facebook.svg`}
                      width="20"
                      height="20"
                      alt="Facebook"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://www.linkedin.com/company/xvs-creations">
                    <Img
                      src={`${baseUrl}/svg/linkedin.svg`}
                      width="20"
                      height="20"
                      alt="Linkedin"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://x.com/xvscreations">
                    <Img
                      src={`${baseUrl}/svg/twitter.svg`}
                      width="20"
                      height="20"
                      alt="Twitter"
                    />
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>
          <Section className="text-white opacity-70 px-6">
            <Row>
              <Column align="left">
                <Text className="mt-0 text-white opacity-70">
                  @ 2025 xVS Creations All Rights Reserved
                </Text>
              </Column>
              <Column align="right">
                <Link
                  href={`${baseUrl}/terms-and-conditions`}
                  className="text-white opacity-70"
                >
                  <Text className="mt-0">Terms and Conditions</Text>
                </Link>
              </Column>
              <Column align="right">
                <Link
                  href={`${baseUrl}/privacy-policy`}
                  className="text-white opacity-70"
                >
                  <Text className="mt-0">Privacy Policy</Text>
                </Link>
              </Column>
              <Column align="right">
                <Link
                  href={`${baseUrl}/cookies-policy`}
                  className="text-white opacity-70"
                >
                  <Text className="mt-0">Cookies Policy</Text>
                </Link>
              </Column>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
