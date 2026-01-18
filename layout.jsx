import "./globals.css";

export const metadata = {
  title: "A Special Surprise",
  description: "Happy Birthday Celebration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
