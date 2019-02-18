import * as React from "react";
import styled from "styled-components";
import { ApplicationBottomNavigation } from "../molecules/ApplicationBottomNavigation";
import { ApplicationViewContextProvider } from "../molecules/ApplicationViewContext";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

type Props = {
	children: React.ReactNode;
};

const Content = styled.div`
	flex-grow: 1;
`;

export const MobileLayout = ({ children }: Props) => (
	<Wrapper>
		<ApplicationViewContextProvider>
			<Content>{children}</Content>
			<ApplicationBottomNavigation />
		</ApplicationViewContextProvider>
	</Wrapper>
);
