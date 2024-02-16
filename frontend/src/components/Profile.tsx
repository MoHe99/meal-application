import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

function Profile() {
	const { user } = useAuth0();

	return (
		<div className="profile">
			<h2>Profil Informationen</h2>
			<div className="profile-information">
				<img src={user?.picture} alt={user?.name} />
				<div className="information">
					<h3>{user?.name}</h3>
					<p>{user?.email}</p>
					<p>{user?.user_roles}</p>
					<LogoutButton />
				</div>
			</div>
		</div>
	);
}

export default Profile;
