import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from "@/components/theme-provider";

// بدل هاد المعلومات باش تولي ديال الشركة الحقيقية
export const metadata = {
  title: "Nouest Management | Excellence des Services Généraux",
  description: "Nouest Management : Votre partenaire expert en Gardiennage, Nettoyage et Jardinage au Maroc.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // خليه ديما Light حيت اللوغو والألوان صاوبناهم على البيض
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* حيدنا كاع الـ Scripts ديال Orchids و Messenger و ErrorReporter */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}