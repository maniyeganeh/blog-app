import Layout from "../components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "../styles/globals.css"
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