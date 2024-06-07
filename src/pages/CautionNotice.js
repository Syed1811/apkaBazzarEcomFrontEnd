import React from "react";

const CautionNotice = (props) => {
  return (
    <>
      <h1
        className="text-center titleC mt-5"
        style={{
          fontFamily: "Poppins",
          sansSerif: "sans-serif",
          fontWeight: "bolder",
          color: props.mode === "dark" ? "white" : "",
        }}
      >
        CAUTION NOTICE – BEWARE OF FRAUD
      </h1>
      <div className="br"></div>
      <div
        className="bodyP"
        style={{
          color: props.mode === "dark" ? "white" : "",
        }}
      >
        <p>
          It has come to the notice of apkaBazzar that some fraudsters are
          approaching customers:
        </p>

        <ol>
          <li>With promotional offers from apkaBazzar</li>
          <li>
            Through fake email IDs as well as fake domain names/website links
            which may appear confusingly similar or identical with apkaBazzar
            and its Group Companies
          </li>
          <li>
            Through Social media Apps such as Whatsapp / Facebook/ Instagram/
            Twitter by including the trademark/logo of apkaBazzar and/or the
            logo as part of their profile pic and pushing fake offers to the
            innocent public, by luring them with false promises
          </li>
        </ol>

        <p>
          CUSTOMERS, GENERAL PUBLIC AND PROSPECTIVE CUSTOMERS ARE HEREBY
          CAUTIONED:
        </p>

        <ol>
          <li>
            To exercise caution against fraudsters who may use fake email IDs,
            fake profiles on Social media (Whatsapp, Facebook, Instagram,
            Twitter, etc.) domains, websites, telephones, and advertisements in
            newspapers/magazines, etc. by impersonating themselves to be from
            apkaBazzar and/or its Group Companies and claim to offer promotional
            offers, collect customer account details, ask for advance money to
            process winners, etc.
          </li>
          <li>
            apkaBazzar or its Group Companies or any of its representatives will
            NOT call for any advance payment of money from any of its
            prospects/customers;
          </li>
          <li>
            apkaBazzar or any of its representatives would NOT ask for any OTP
            or PIN to offer any promotional offers. You are obliged NOT to share
            OTP/PIN with any person or authorizing UPI requests in wallets,
            received from unknown sources, as the same may lead to a fraud,
            through which, money may be debited from your Bank account and
            credited to the fraudster’s account
          </li>
          <li>
            apkaBazzar email ID contains “apkabazzar@domain.com” ALONE and does
            NOT contain any other domain name such as Gmail/Yahoo/Rediff/Ymail,
            etc., or in any other form.
          </li>
          <li>
            To exercise caution against fraudsters luring you with fictitious
            offers by calling you over unidentified phone numbers, fake email
            ids, fake website/domain and/or through any other physical or
            electronic medium and styling themselves to be
            employee/representative of apkaBazzar and/or its Group Companies.
            Before dealing with such fraudsters and/or responding/accessing any
            fraudulent advertisements, telephone calls, emails and website, to
            protect themselves against any fraud and criminal acts of the
            perpetrators, you are advised to act responsibly and are solely
            obliged to verify:
            <ol type="a">
              <li>
                By reaching out to Official customer care number of apkaBazzar
                Limited; or
              </li>
              <li>
                The veracity of such claims from the Company’s official website
                www.apkabazzar.com.
              </li>
            </ol>
          </li>
        </ol>

        <p>
          General Public and prospective customers are also advised to
          immediately report any suspicious incident and/or incident of
          defrauding of money as a result of these fraudulent acts and practices
          to the authorities in their jurisdiction, i.e. the Police and the
          Telecommunications regulator, including the Cyber Crime Cell. Please
          note that any person dealing with such fraudsters will be dealing at
          his/her own risk and responsibility. apkaBazzar and/or any of its
          Group Company will not be responsible for any loss suffered or
          otherwise in this respect.
        </p>
      </div>
    </>
  );
};

export default CautionNotice;
