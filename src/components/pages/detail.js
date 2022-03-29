import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Content from "./Contents";
import data from "../data.json";
import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	const [getData, setGetData] = useState({});

	const fetchData = () => {
		setGetData(data[id - 1]);
	};

	useEffect(() => {
		fetchData();
	}, []);
    
	return (
		<div>
			<Container>
				<Wrapper>
					<Image src={getData.cardImg} />
					<Content title={getData.title} text={getData.description} />
				</Wrapper>
			</Container>
		</div>
	);
};

export default Detail;

const Image = styled.img`
    border-radius: 8px;
	margin: 40px 0;
	width: 700px;
	height: 400px;
	object-fit: cover;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 80px);
	background-color: lightgray;
`;
