import Head from "next/head"

const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <title>Plant Water Tracker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-6">{children}</div>
    </main>

    <footer></footer>

    <style jsx>{``}</style>

    <style jsx global>{``}</style>
  </div>
)

export default Layout
