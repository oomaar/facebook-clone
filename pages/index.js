import { Feed, Header, Login, Sidebar, Widgets } from '../components';
import HeadTag from '../global/HeadTag';
import { getSession } from "next-auth/client";
import { db } from '../lib/Firebase';

const Home = ({ session, posts }) => {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <HeadTag title="Facebook 2.0 Clone" />

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const posts = await db
    .collection('posts')
    .orderBy('timestamp', 'desc')
    .get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }));

  return {
    props: {
      session,
      posts: docs
    }
  };
};