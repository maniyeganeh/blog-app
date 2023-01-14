import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import makeStore from "../store/store";
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={makeStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}
export default App