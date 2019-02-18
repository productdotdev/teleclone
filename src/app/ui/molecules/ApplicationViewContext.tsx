import * as React from "react";
import { ApplicationView } from "../atoms/ApplicationViews";

type State = {
	currentView: ApplicationView;
};

type Context = State & {
	setView: (view: ApplicationView) => void;
};

const { Consumer, Provider } = React.createContext<Context>({} as any);

export class ApplicationViewContextProvider extends React.Component<{}, State> {
	state: State = {
		currentView: ApplicationView.Chats
	};

	setView = (currentView: ApplicationView) => {
		this.setState({ currentView });
	};

	render() {
		const {
			setView,
			state: { currentView }
		} = this;

		return (
			<Provider
				value={{
					currentView,
					setView
				}}>
				{this.props.children}
			</Provider>
		);
	}
}

export const ApplicationViewContextConsumer = Consumer;
