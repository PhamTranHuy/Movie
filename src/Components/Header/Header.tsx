import Navigator from "./Navigator/Navigator";

export default function Header() {
	return (
		<div className="bg-darkBlue">
			<div className="layout-max-w flex-between px-10 py-5">
				<div className="flex-between">
					<div className="w-40">
						<img alt='' src={process.env.PUBLIC_URL + '/header/logo.svg'} />
					</div>
					<Navigator />
				</div>
				<ul className="flex-between">
					<li className="w-7">
						<img alt='' src={process.env.PUBLIC_URL + '/header/plus.svg'} />
					</li>
					<li className="border">EN</li>
					<li>Login</li>
					<li>Join TMDB</li>
					<li className="w-7">
						<img alt='' src={process.env.PUBLIC_URL + '/header/search.svg'} />
					</li>
				</ul>
			</div>
		</div>
	);
}
