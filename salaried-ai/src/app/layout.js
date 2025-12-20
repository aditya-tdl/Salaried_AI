import Providers from "./providers";

export const metadata = {
  title: "Salaried.ai - India’s First Career Focused Platform",
  description:
    "India’s first subscription-based platform designed for working professionals to learn, upskill, and stay ahead of job market trends. Join monthly webinars, get career news, and more.",
  keywords: "career growth, upskilling, working professionals, webinars, job market trends, resume tips, salaried.ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
