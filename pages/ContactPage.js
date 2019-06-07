import Layout from '../components/Layout';
import Form from '../components/contact/index';
import Mini from '../components/header/mini_slider';

const ContactPage = () => {
	return (
		<Layout>
			<div className="content">
				<Mini />
				<Form />
			</div>
		</Layout>

	)
}

export default ContactPage;