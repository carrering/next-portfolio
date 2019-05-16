import Link from 'next/link';
import Layout from '../components/Layout';

let yolo = "yolor!!!";

const Index = () => <Layout title="Home">

  <Link href="/about">
    <a>About</a>
  </Link>
  <p>
    Welcome to the {yolo}
  </p>

  <a href="/about">this about link loads the entire page again</a>
</Layout>;

export default Index;