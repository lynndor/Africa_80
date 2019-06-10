import Layout from "../components/Layout";
import Mini from "../components/header/mini_slider";
import MainEvent from "../components/Events/eventParent";

const EventsPage = () => {
  return (
    <Layout>
      <div className="content">
        <Mini />
        <MainEvent />
      </div>
    </Layout>
  );
};

export default EventsPage;
