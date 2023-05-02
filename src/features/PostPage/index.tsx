import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Container from "../../components/Container";

function PostPage() {
	const routeParams = useParams();
	const id = parseInt(routeParams.id, 10);

	const URL = "https://jsonplaceholder.typicode.com";
	const { response, loading, error, sendData } = useAxios({
		method: "GET",
		baseURL: URL,
		url: `/posts/${id}`,
	});

	useEffect(() => {
		sendData();
	}, [sendData]);

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			{!loading && !error && (
				<Container>
					<h3>{response?.data.title}</h3>
					<p>{response?.data.body}</p>
				</Container>
			)}
		</>
	);
}

export default PostPage;
