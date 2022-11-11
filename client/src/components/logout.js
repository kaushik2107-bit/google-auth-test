import { GoogleLogout } from "react-google-login"

const clientId = "968963508756-vpf1i92tm522sd769r1tju3ij7a6imtn.apps.googleusercontent.com"

export default function Logout({ setUserName }) {

	const onSuccess = () => {
		console.log("Log out successfully");
		setUserName()
	}

	return (
		<div id="signOutButton">
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			/>
		</div>
	)
}