import Script from "next/script"

export const Analytics = () => {
  if (process.env.NODE_ENV !== "production") return null
  return <Script src="https://umami.moinulmoin.com/script.js" data-website-id="4e413c5b-92cd-4d99-a42b-4414005f7c03" strategy="afterInteractive" />
}