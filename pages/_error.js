import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error!!!">
  { statusCode ? `Could not load your user data: Status Code ${statusCode}
  ` : `Couldn't get that page, sorry!` }
    <p>Black Flagged! Head back to pitlane!</p>
  </Layout>
);

