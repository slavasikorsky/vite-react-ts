import Container from "../../components/Container";
import Hero from "../../components/Hero";
import HeroImage from "../../assets/images/hero.jpg";
import Text from "../../components/Text";

function About() {
	return (
		<Container>
			<h1>About page</h1>
			<Hero
				title="Hero title"
				image={HeroImage}
				linkText="Buy now"
				linkURL="http://google.com/"
			/>
			<Text title="Heading text" text="Heading text lorem ipsum" />
		</Container>
	);
}

export default About;
