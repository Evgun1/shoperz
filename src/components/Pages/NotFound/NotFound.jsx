import { useRouteError } from "react-router-dom";
import Header from "../../Elements/Header/Header";
import Footer from "../../Elements/Footer/Footer";

const NotFound = () => {
  const error = useRouteError();

  return (
    <>
      <Header></Header>
      <section>
        <div>
          <h1>Oops!</h1>
          <p>Page was not found.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
