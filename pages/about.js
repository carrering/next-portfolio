import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About">
    <Link href="/">
      <a>Home</a>
    </Link>
    <p>A kickass developer</p>
    <img src="/static/pitcrew.jpg" alt="pitcrew" height="200px"/>
  </Layout>
);

export default About;
