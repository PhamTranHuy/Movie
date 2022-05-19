import Navigator from "./Navigator/Navigator";

export default function Header() {
	return (
		<div className="bg-darkBlue font-semibold">
			<div className="layout-max-w m-auto">
				<div className="flex-between px-10 py-5">
					<div className="flex-between">
						<div className="w-40 mr-6">
							<img alt='' src={process.env.PUBLIC_URL + '/header/logo.svg'} />
						</div>
						<Navigator />
					</div>
					<ul className="flex-between child:ml-6">
						<li className="w-6">
							<img alt='' src={process.env.PUBLIC_URL + '/header/plus.svg'} />
						</li>
						<li className="flex-center w-[28px] h-[26px] border text-sm rounded">EN</li>
						<li>Login</li>
						<li>Join TMDB</li>
						<li className="w-7">
							<img alt='' src={process.env.PUBLIC_URL + '/header/search.svg'} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
