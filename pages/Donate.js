import Layout from "../components/Layout";
import Mini from "../components/header/mini_slider";
import DonateItem from "../components/Donate/donate_item";

const Donate = () => {
  return (
    <Layout>
      <div className="content">
        <Mini />
        <DonateItem />
      </div>
    </Layout>
  );
};

export default Donate;
