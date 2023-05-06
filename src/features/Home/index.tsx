import { useEffect } from "react";
import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import IPost from "../../types/types";
import Post from "../../components/Post";
import Container from "../../components/Container";
import CTA from "../../components/CTA";

const CardsWrapper = styled.div`
	display: flex;
	flex-flow: wrap;
	gap: 20px;
`;

function Home() {
	const URL = "https://jsonplaceholder.typicode.com";
	const pageCount = 4;
	const { response, loading, error, sendData } = useAxios({
		method: "GET",
		baseURL: URL,
		url: `/posts?_start=0&_limit=${pageCount}`,
	});

	useEffect(() => {
		sendData();
	}, []);

	return (
		<Container>
			<h1>Home page</h1>
			<CTA
				heading="Lorem ipsum"
				text="default text"
				buttonUrl="http://google.com/"
				buttonLabel="Link"
			/>
			<>
				{loading && <p>Loading...</p>}
				{error && <p>{error.message}</p>}
				{!loading && !error && (
					<CardsWrapper>
						{response?.data.map((item: IPost) => (
							<Post
								key={item.id}
								id={item.id}
								title={item.title}
							/>
						))}
					</CardsWrapper>
				)}
			</>
		</Container>
	);
}

export default Home;
