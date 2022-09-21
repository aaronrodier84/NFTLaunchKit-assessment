import type { NextPage } from "next";
import Home from "lib/pages/home";
import Layout from "lib/layout";

const App: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
export default App;
