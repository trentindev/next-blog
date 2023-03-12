import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

/**
 * paths contient le tableau des chemins connus renvoyés par getAllPostIds(), 
 * qui incluent les paramètres définis par pages/posts/[id].js.  
 */

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}