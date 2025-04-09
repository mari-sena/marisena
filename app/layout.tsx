export const metadata = {
  title: "Sena's portfólio",
  description: "Bem-vindo ao meu portfólio!",
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
