import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Movie App</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"
      />
    </Head>

    <Navbar />
    <div className="container">
      {props.children} {/* pages buraya geliyo */}
    </div>
  </div>
);

export default Layout;
