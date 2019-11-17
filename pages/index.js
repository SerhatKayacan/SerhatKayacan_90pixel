import Layout from "../components/Layout";
import MoviesList from "../components/MoviesList";
import Form from "../components/Form";
import MoviesStore from "../components/Store";
import { observer } from "mobx-react";

@observer
class Index extends React.Component {
  componentDidMount() {
    MoviesStore.setFavorites();
  }
  render() {
    return (
      <Layout>
        <Form />
        <MoviesList />
      </Layout>
    );
  }
}

export default Index;
