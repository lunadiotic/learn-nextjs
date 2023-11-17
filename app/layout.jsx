export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn Next.js Fundamental</title>
      </head>
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
