import Link from 'next/link';

const Layout = ({ children, title }) => (
  <div className="root">
    <header>
      <Link href="/"><a>HOME</a></Link> <Link href="/about"><a>ABOUT</a></Link> <Link href="/contact"><a>CONTACT</a></Link>
    </header>
      <h1> {title} </h1>
      { children }

    <footer>
      &copy; carrering {new Date().getFullYear()}
    </footer>
    <style jsx>{`
      .root {
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: black;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      footer {
        padding: 1em;
      }
    `}
    </style>
    <style global jsx> 
    {`
      body {
        margin:0;
        font-size:110%;
        background: #f0f0f0;
      }
    `}
    </style>
  </div>
);


export default Layout;

