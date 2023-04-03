import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  const [translate, settranslate] = useState(false);
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      detect_browser_language: true,
      // url_structure: "sub_directory",
      // url_structure: "sub_domain",
      languages: ["en", "fr", "de", "it", "es", "hi"],
      wrapper_selector: ".gtranslate_wrapper",
      flag_style: "3d",
      add_new_line: true,
    };
    settranslate(true);
  }, []);
  return (
    <>
      <Head>
        <meta name="uri-translation" content="on" />
      </Head>
      <Script
        // src="https://tdns5.gtranslate.net/tdn-bin/queue.js"
        src="https://cdn.gtranslate.net/widgets/latest/fd.js"
        defer
        strategy="lazyOnload"
      ></Script>
      <div className={translate ? "gtranslate_wrapper" : ""}></div>
      {/* gtranslate_wrapper */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
