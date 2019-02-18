import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction/";
import Phone from "@material-ui/icons/Call";
import Settings from "@material-ui/icons/Settings";
import Contacts from "@material-ui/icons/AccountCircle";
import Chat from "@material-ui/icons/Chat";
import { ApplicationViewContextConsumer } from "./ApplicationViewContext";
import { ApplicationView } from "../atoms/ApplicationViews";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

type Props = {
	icon: React.ComponentType<SvgIconProps>;
	label: string;
	view: ApplicationView;
};

const Action = ({ icon: Icon, label, view }: Props) => (
	<ApplicationViewContextConsumer>
		{({ currentView, setView }) => (
			<BottomNavigationAction
				icon={<Icon color={currentView === view ? "primary" : "default"} />}
				label={label}
				showLabel
				color={"primary"}
				onClick={() => setView(view)}
			/>
		)}
	</ApplicationViewContextConsumer>
);

export const ApplicationBottomNavigation = () => (
	<BottomNavigation style={{ backgroundColor: "whitesmoke" }}>
		<Action icon={Contacts} label="Contacts" view={ApplicationView.Contacts} />
		<Action icon={Phone} label="Calls" view={ApplicationView.Calls} />
		<Action icon={Chat} label="Chats" view={ApplicationView.Chats} />
		<Action icon={Settings} label="Settings" view={ApplicationView.Settings} />
	</BottomNavigation>
);
