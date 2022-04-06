import styled from 'styled-components';

export const Box = styled.div`
	padding: 80px 60px;
	background: black;

	box-sizing: border-box;
	margin: 0;
	position: relative;
	top: 400px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
    display: grid;
	flex-direction: column;
	text-align: left;
	justify-content:center;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	grid-gap: 20px;

	@media screen and (max-width:1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

export const Link = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 14px;
	text-decoration: none;
`;

export const Title = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
	text-align: left;
`;
