import { Link } from "react-router-dom";
import styled from "styled-components";
import IPost from "../../../types/types";

const Card = styled.div`
	border: 1px solid #c2c3c4;
	padding: 10px 12px;
	width: calc(25% - 20px);
	border-radius: 6px;
`;

function Post({ id, title }: IPost) {
	return (
		<Card key={id}>
			<small>id: {id}</small>
			<h5>{title}</h5>
			<Link to={`post/${id}`}>Read more</Link>
		</Card>
	);
}

export default Post;
