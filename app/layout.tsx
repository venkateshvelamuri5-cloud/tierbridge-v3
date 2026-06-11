import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TierBridge — Bridge Your College-to-Corporate Skill Gap",
  description: "Identify academic curriculum gaps, upskill in modern enterprise technologies (AWS, MuleSoft, Salesforce, ServiceNow), and fast-track your path to top placement success.",
  keywords: [
    "TierBridge",
    "college to corporate",
    "syllabus gap scanner",
    "curriculum diagnostics",
    "enterprise tech stack",
    "fresher placements",
    "MuleSoft APIs",
    "AWS Bedrock",
    "Salesforce Developer",
    "ServiceNow CSA"
  ],
  metadataBase: new URL("https://tierbridge.in"),
  openGraph: {
    title: "TierBridge — Bridge Your College-to-Corporate Skill Gap",
    description: "Compare your college syllabus with real-world enterprise job requirements. Get certified, track upskilling goals, and unlock placement playbooks.",
    url: "https://tierbridge.in",
    siteName: "TierBridge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TierBridge — Bridge Your College-to-Corporate Skill Gap",
    description: "Identify academic curriculum gaps, upskill in modern enterprise technologies, and fast-track your path to top IT placements.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
