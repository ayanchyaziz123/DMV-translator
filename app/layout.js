import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DMV Bangla",
  description: "DMV Bangla is a user-friendly platform designed to assist individuals in understanding and navigating the complexities of driving regulations and road signs. With a comprehensive database of traffic rules, signs, and driving-related terminology, DMVtranslator empowers users to prepare for driver's license exams, brush up on driving knowledge, or simply enhance their understanding of road safety. Whether you're a new driver or seeking to refresh your driving skills, DMVtranslator provides clear and concise explanations alongside interactive quizzes and visual aids, making learning both informative and engaging. Explore our site today and embark on your journey towards safer and more confident driving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
