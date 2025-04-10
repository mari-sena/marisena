export const metadata = {
  title: "Mariana Sena's portfólio",
  description: "Bem-vindo ao meu portfólio!",
  keywords: [
    "Mariana Sena",
    "Software Developer",
    "Desenvolvedora de Software",
    "Next.js",
    "React",
    "JavaScript",
  ],
  languages: {
    "pt-BR": "/pt-BR",
    "en-US": "/en-US",
  },
  icons: {
    icon: "/computador-portatil.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
