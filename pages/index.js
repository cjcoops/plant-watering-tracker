import Layout from '../components/Layout';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../lib/apollo';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <section />;

  return (
    <Layout>
      <h1>Water Tracker</h1>
      <p>{data.sayHello}</p>
    </Layout>
  );
};

export default withApollo(Home);
