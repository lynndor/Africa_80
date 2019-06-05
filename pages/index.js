import Layout from '../components/Layout';
import ImageSlider from '../components/image_slider/index';

const Home = () => {
	return (
		<Layout>
			<React.Fragment>
				<ImageSlider />
				<h2>Home page</h2>
			</React.Fragment>
		</Layout>

	)
}

export default Home;