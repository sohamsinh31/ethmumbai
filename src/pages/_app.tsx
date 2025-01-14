import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { AnonAadhaarProvider, useProver } from "@anon-aadhaar/react";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState<boolean>(false);
  const [useTestAadhaar, setUseTestAadhaar] = useState<boolean>(false);
  const [, latestProof] = useProver();
  
  useEffect(() => {
    setReady(true);
    console.log(latestProof)
  }, []);

  return (
    <>
      {ready ? (
        <AnonAadhaarProvider
          _useTestAadhaar={useTestAadhaar}
          _appName="Anon Aadhaar"
        >
          <Component
            {...pageProps}
            setUseTestAadhaar={setUseTestAadhaar}
            useTestAadhaar={useTestAadhaar}
          />
        </AnonAadhaarProvider>
      ) : null}
    </>
  );
}
