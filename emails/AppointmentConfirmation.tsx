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

interface EmailTemplateProps {
  name: string;
  formattedDate: string;
  formattedStartTime: string;
  message: string;
}

const baseUrl = "https://xvs-dev-website.vercel.app";

export default function AppointmentConfirmation({
  name,
  formattedDate,
  formattedStartTime,
  message,
}: EmailTemplateProps) {
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
          <Preview>Meeting Schedule Confirmation</Preview>
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
                <Text className="text-center">
                  Thanks for reaching out! This is to confirm that we&apos;ve
                  received your request to schedule a free consultation call.
                </Text>
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
                  You wanted to talk about
                </Text>
              </Row>
              <Heading className="text-center my-0">
                {message ? message : "Logo Design for company "}
              </Heading>
              <Row>
                <Text className="text-center font-light opacity-80 mt-10 mb-0">
                  Preferred time
                </Text>
              </Row>
              <Heading className="text-center mt-0">
                {formattedDate ? formattedDate : "23rd Sep 2025"},{" "}
                {formattedStartTime ? formattedStartTime : "5:30PM IST"}
              </Heading>
            </Section>
            <Hr className="my-4 opacity-30 w-3/5" />
            <Section>
              <Row>
                <Text className="text-brand font-semibold text-center text-xl">
                  What happens next
                </Text>
              </Row>
              <ul>
                <li className="text-brand" style={{ fontSize: "28px" }}>
                  <Text className="text-white text-lg">
                    Our team will review your request and respond within one
                    business day.
                  </Text>
                </li>
                <li className="text-brand" style={{ fontSize: "28px" }}>
                  <Text className="text-white text-lg">
                    Once confirmed, you&apos;ll receive a calendar invite.
                  </Text>
                </li>
                <li className="text-brand" style={{ fontSize: "28px" }}>
                  <Text className="text-white text-lg">
                    If you’d like to reschedule, simply reply to this email.
                  </Text>
                </li>
              </ul>
            </Section>
            <Hr className="my-8 opacity-30 w-3/5" />
            <Section>
              <Row>
                <Text className="text-center font-bold text-lg my-0">
                  To make the most of our call,
                </Text>
              </Row>
              <Row>
                <Text className="text-center my-0 opacity-80 w-4/5 mx-auto">
                  feel free to share any links, files, or notes you&apos;d like
                  us to review in advance. You can reply directly to this email
                </Text>
              </Row>
              <Row>
                <Text className="text-brand font-semibold text-center text-xl mt-10 mb-0">
                  We look forward to speaking with you soon!
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
}
