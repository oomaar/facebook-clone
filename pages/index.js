import { Header, Login } from '../components';
import HeadTag from '../global/HeadTag';
import { getSession } from "next-auth/client";

const Home = ({ session }) => {
  if (!session) return <Login />;
  return (
    <div>
      <HeadTag title="Facebook 2.0 Clone" />

      <Header />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
};