import React from "react";
import LiquidChrome from "../../Reactbits/LiquidChrome";


const Footer = () => {
  return (
    <>
      <div className="w-full relative z-10  shadow-[0_4px_100px_rgba(255,255,255,0.4)]">
        <div className="absolute inset-0 -z-9 ">
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={1}
            amplitude={0.6}
            interactive={true}
          />
        </div>
        <div className="w-full pb-10 flex gap-4">
          <div className="w-1/2 h-full  pl-30 pt-15">
            <img className="h-18" src="/images/logo.png" alt="" />
            <h2 className="font-medium text-xl my-4">Contact Us</h2>
            <p className="text-[15px] leading-[2] w-[90%]">
              <i class="ri-map-pin-line text-[14px] mr-2"></i> HD-327, WeWork
              Oberoi Commerz II, 20th floor, CTS No. 95, 4 B 3 & 4 590, Off W.
              E. Highway, Oberoi Garden City, Goregaon East (D2), Mumbai, MH
              400063
            </p>
            <p className="text-[15px] my-4">
              <i class="ri-phone-line text-[14px] mr-2"></i> +1234 567 9000
            </p>
            <p className="text-[15px] ">
              <i class="ri-mail-line text-[14px] mr-2"></i> info@example.com
            </p>
            <img className="h-18 mt-4" src="/images/groups/trust2.png" alt="" />
          </div>
          <div className="w-1/2 h-full  pl-10 pt-18">
            <h2 className="font-medium text-xl">Quick Links</h2>
            <h4 className="text-[14px] my-4">Client login</h4>
            <h4 className="text-[14px] mb-4">About Us</h4>
            <h4 className="text-[14px] mb-4">Our Commitment</h4>
            <h4 className="text-[14px] mb-4">Contact details</h4>
            <h4 className="text-[14px] mb-4">Blogs</h4>
            <h4 className="text-[14px] mb-4">MF Forms</h4>
            <h4 className="text-[14px] mb-4">MF Tools</h4>
            <h4 className="text-[14px] mb-4">Calculator</h4>
          </div>
          <div className="w-1/2 h-full pt-18">
            <h2 className="font-medium text-xl">Our Services</h2>
            <h4 className="text-[14px] my-4">Mutual Funds</h4>
            <h4 className="text-[14px] mb-4">Portfolio Management Services</h4>
            <h4 className="text-[14px] mb-4">Alternative Investment Funds</h4>
            <h4 className="text-[14px] mb-4">Stock Trading</h4>
            <h4 className="text-[14px] mb-4">IPO and FPO Investment</h4>
            <h4 className="text-[14px] mb-4">NPS</h4>
            <h4 className="text-[14px] mb-4">Insurance</h4>
            <h4 className="text-[14px] mb-4">Loan Products</h4>
            <h4 className="text-[14px] mb-4">Retirement Saving</h4>
            <h4 className="text-[14px] mb-4">Tax-Efficient Investment</h4>
            <h4 className="text-[14px] mb-4">Estate Planning</h4>
            <h4 className="text-[14px] mb-4">Auxiliary Offerings</h4>
          </div>
          <div className="w-[100%] h-full  pt-18 pr-22">
            <h2 className="font-medium text-xl">Get in Touch</h2>
            <div className="flex gap-2 mt-4">
              <a
                href="https://www.youtube.com/@MintByteOfficial"
                target="_blank"
              >
                <img className="h-10" src="/images/groups/youtube.png" alt="" />
              </a>
              <a
                href="https://www.facebook.com/mintbyteofficial/"
                target="_blank"
              >
                {" "}
                <img
                  className="h-10"
                  src="/images/groups/facebook.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/mintbyteofficial/"
                target="_blank"
              >
                {" "}
                <img
                  className="h-10"
                  src="/images/groups/instagram.png"
                  alt=""
                />
              </a>
              <a href="https://x.com/mintbyteinvest" target="_blank">
                {" "}
                <img className="h-10" src="/images/groups/X.png" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/mintbyte/"
                target="_blank"
              >
                {" "}
                <img className="h-10" src="/images/groups/Link.png" alt="" />
              </a>
              <a
                href="https://www.google.com/maps/place/WeWork+Oberoi+Commerz+II/@19.1699651,72.8574014,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7a854988e67:0x66f59a5e3c2da936!8m2!3d19.1699651!4d72.8599763!16s%2Fg%2F11g2tvn27t?coh=245187&entry=tts&g_ep=EgoyMDI1MDMyNS4xIPu8ASoJLDEwMjExNDUzSAFQAw%3D%3D&skid=4c72f1ce-64c8-49d5-9c47-988968593b82"
                target="_blank"
              >
                {" "}
                <img className="h-10" src="/images/groups/google.png" alt="" />
              </a>
              <a
                href="https://apps.apple.com/in/app/mintbyte/id6739696193"
                target="_blank"
              >
                {" "}
                <img className="h-10" src="/images/groups/apple.png" alt="" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mintbyte.investment&hl=en&pli=1"
                target="_blank"
              >
                {" "}
                <img
                  className="h-10"
                  src="/images/groups/playstore.png"
                  alt=""
                />
              </a>
            </div>
            <h2 className="font-medium text-xl my-4">Warning</h2>
            <p className="text-[14px]">
              Investments in the securities market are subject to market risks.
              Read all the related documents carefully before investing.
            </p>
            <h2 className="font-medium text-xl my-4">Compliance</h2>
            <p className="text-[14px] my-2">
              © 2024 Mintbyte Investment Services Private Limited, All Rights
              Reserved
            </p>
            <p className="text-[14px]  my-2">
              Mintbyte® is a registered trademark of Mintbyte Investment
              Services Private Limited | CIN: U66190MH2024PTC434330 
            </p>
            <p className="text-[14px]  my-2">
              AMFI Registration No: ARN-314872 | Type of Registration:
              Non-Individual | Validity Until: 27 November 2027
            </p>
            <p className="text-[14px]  my-2">
              APMI Registration No: APRN-01658 | Type of Registration:
              Non-Individual | Validity Until: 10 June 2027
            </p>
            <p className="text-[14px]  my-2">
              APMI Registration No: APRN-01658 | Type of Registration:
              Non-Individual | Validity Until: 10 June 2027
            </p>
            <p className="text-[14px]  my-2 cursor-pointer">
              Privacy Policy | User Agreement | Disclosure | SID/SAI/KIM | Code
              of Conduct | SEBI Circulars | AMFI Risk Factors
            </p>
            <div className="flex gap-8 items-center">
              <p className="text-[14px] my-4">
                <i class="ri-phone-line text-[14px] mr-2"></i> +1234 567 9000
              </p>
              <p className="text-[14px] ">
                <i class="ri-mail-line text-[14px] mr-2"></i> info@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-22 pt-10">
          <div className="w-full pb-15 flex gap-4">
            <div className="w-1/2 h-full  px-4">
              <h2 className="font-medium text-2xl">Our Commitment</h2>
              <p className="text-[15px] w-[70%] mt-4">
                We adhere strictly to all regulations and guidelines set forth
                by SEBI, AMFI, and APMI to ensure the highest professionalism,
                transparency, and investor protection standards. Mintbyte is
                committed to maintaining the highest compliance and ethical
                conduct levels in all our operations. We regularly update our
                knowledge and practices to stay abreast of regulatory changes
                and ensure that our clients receive the best possible service
                within a framework of trust and integrity.
              </p>
              <h2 className="font-medium text-2xl mt-6">Risk Factors</h2>
              <p className="text-[15px] w-[80%] mt-4">
                Investments in Mutual Funds are subject to Market Risks. Read
                all scheme related documents carefully before investing. Mutual
                Fund Schemes do not assure or guarantee any returns. Past
                performances of any Mutual Fund Scheme may or may not be
                sustained in future. There is no guarantee that the investment
                objective of any suggested scheme shall be achieved. All
                existing and prospective investors are advised to check and
                evaluate the Exit loads and other cost structure (TER)
                applicable at the time of making the investment before
                finalizing on any investment decision for Mutual Funds schemes.
              </p>
            </div>
            <div className="w-1/2 h-full ">
              <h2 className="font-medium text-2xl mt-6">Risk Factors</h2>
              <p className="text-[15px] w-[90%] mt-4">
                The information provided herein is solely for informational
                purposes. It should not be construed as investment advice, an
                offer to sell, or a solicitation of an offer to buy any
                securities or financial products. Mintbyte is not liable for any
                losses incurred from using this information. Investors are
                strongly advised to seek independent professional advice and
                carefully consider their investment objectives, risk tolerance,
                and financial situation before making investment decisions.
              </p>
              <p className="text-[15px] w-[90%]">
                Mintbyte is also registered as a mutual fund distributor with
                the Association of Mutual Funds in India (AMFI)
              </p>
              <p className="text-[15px] w-[90%]">
                Securities investments involve risks, and past performance does
                not indicate future results. The value of investments may
                fluctuate, and investors may lose a portion or all of their
                investment capital. Please read all scheme-related documents
                carefully before investing. By accessing this information, you
                acknowledge that you have read, understood, and agreed to the
                terms of this disclaimer. Registration with AMFI and
                certification from NISM do not guarantee the intermediary's
                performance or provide any assurance of returns to investors.
              </p>
            </div>
          </div>

          <div className="w-full pl-4">
            <h2 className="text-2xl font-medium ">
              Additional Disclaimer for Stock Trading Services
            </h2>
            <p className="text-lg font-medium mt-4">Stock Trading Risk:</p>
            <p className="text-[16px]">
              Stock trading involves inherent risks due to market volatility.
              The value of stocks can fluctuate significantly, and investors may
              experience losses, including the potential loss of their entire
              investment capital. Past performance is not indicative of future
              results.
            </p>
            <p className="text-lg font-medium mt-4">Sub-Broker Relationship:</p>
            <p className="text-[16px]">
              Mintbyte acts as a sub-broker of the Main Broker for stock trading
              services. While we strive to provide efficient and reliable
              services, we are not responsible for the principal broker's
              actions or omissions.
            </p>
            <p className="text-lg font-medium mt-4">Client Responsibility:</p>
            <p className="text-[16px]">
              Clients are solely responsible for their investment decisions and
              should carefully consider their risk tolerance, financial
              situation, and investment objectives before engaging in stock
              trading. We strongly recommend seeking independent financial
              advice before making any investment decisions.
            </p>
            <p className="text-lg font-medium mt-4">No Guarantees:</p>
            <p className="text-[16px]">
              Mintbyte and the principal broker do not guarantee the accuracy,
              completeness, or timeliness of any market data, research, or
              recommendations provided, nor do we guarantee any specific
              investment outcomes or profits.
            </p>
            <p className="text-lg font-medium mt-4">Regulatory Compliance:</p>
            <p className="text-[16px]">
              Mintbyte and its principal broker adhere to all applicable
              regulations and guidelines set forth by the Securities and
              Exchange Board of India (SEBI) and other relevant authorities.
              However, clients should be aware that regulatory changes may
              impact their investments.
            </p>
            <p className="text-lg font-medium mt-4">Limited Liability:</p>
            <p className="text-[16px]">
              Mintbyte and the principal broker shall not be liable for any
              losses, damages, or expenses incurred by clients arising from
              using our stock trading services or relying on any information we
              provide.
            </p>
            <p className="text-lg font-medium mt-4">Dispute Resolution:</p>
            <p className="text-[16px]">
              Any disputes arising between Mintbyte, the principal broker, and
              clients shall be subject to the jurisdiction of the courts in
              Mumbai, India. By engaging in stock trading services through
              Mintbyte as a sub-broker, clients acknowledge that they have read,
              understood, and agreed to the terms of this disclaimer. This
              disclaimer is in addition to the general disclaimer provided
              earlier and should be read in conjunction.
            </p>
            <div className="flex gap-2 mt-8 border-b pb-6">
              <a
                href="https://www.youtube.com/@MintByteOfficial"
                target="_blank"
              >
                <img className="h-8" src="/images/groups/youtube.png" alt="" />
              </a>
              <a
                href="https://www.facebook.com/mintbyteofficial/"
                target="_blank"
              >
                {" "}
                <img className="h-8" src="/images/groups/facebook.png" alt="" />
              </a>
              <a
                href="https://www.instagram.com/mintbyteofficial/"
                target="_blank"
              >
                {" "}
                <img
                  className="h-8"
                  src="/images/groups/instagram.png"
                  alt=""
                />
              </a>
              <a href="https://x.com/mintbyteinvest" target="_blank">
                {" "}
                <img className="h-8" src="/images/groups/X.png" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/mintbyte/"
                target="_blank"
              >
                {" "}
                <img className="h-8" src="/images/groups/Link.png" alt="" />
              </a>
              <a
                href="https://www.google.com/maps/place/WeWork+Oberoi+Commerz+II/@19.1699651,72.8574014,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7a854988e67:0x66f59a5e3c2da936!8m2!3d19.1699651!4d72.8599763!16s%2Fg%2F11g2tvn27t?coh=245187&entry=tts&g_ep=EgoyMDI1MDMyNS4xIPu8ASoJLDEwMjExNDUzSAFQAw%3D%3D&skid=4c72f1ce-64c8-49d5-9c47-988968593b82"
                target="_blank"
              >
                {" "}
                <img className="h-8" src="/images/groups/google.png" alt="" />
              </a>
              <a
                href="https://apps.apple.com/in/app/mintbyte/id6739696193"
                target="_blank"
              >
                {" "}
                <img className="h-8" src="/images/groups/apple.png" alt="" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mintbyte.investment&hl=en&pli=1"
                target="_blank"
              >
                {" "}
                <img
                  className="h-8"
                  src="/images/groups/playstore.png"
                  alt=""
                />
              </a>
            </div>
            <p className="text-[13px] text-center py-4">
              © 2024 Mintbyte Investment Services Private Limited, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
