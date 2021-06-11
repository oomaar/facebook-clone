import { Feed, Header, Login, Sidebar, Widgets } from '../components';
import HeadTag from '../global/HeadTag';
import { getSession } from "next-auth/client";

const Home = ({ session }) => {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <HeadTag title="Facebook 2.0 Clone" />

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
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