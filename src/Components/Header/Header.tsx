import { useEffect, useState } from "react";
import Navigator from "./Navigator/Navigator";
import useWindowScroll from "../../Hooks/useWindowScroll";

export default function Header() {
	const windowScroll = useWindowScroll();
	const [hidden, setHidden] = useState(false);
	useEffect(() => {
		if (windowScroll.y <= 150) return;
		if (windowScroll.directionY === 'down') {
			setHidden(true);
		} else {
			setHidden(false);
		}
	}, [windowScroll])
	return (
		<div style={{
				top: `${hidden ? '-20%' : '0'}`,
				transition: `top 0.5s`
			}} 
			className="fixed z-50 top-0 left-0 right-0 bg-darkBlue font-semibold">
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
