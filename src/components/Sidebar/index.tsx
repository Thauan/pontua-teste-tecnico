import { Link, matchPath, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUser, FiCornerUpLeft } from "react-icons/fi";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";
import { useSidebar } from "../../hooks/useSidebar";

interface SidebarProps {
	openedSidebar?: boolean;
	toggle: () => void;
}


const SideBar = () => {
	const { openedSidebar, toggle }: SidebarProps = useSidebar();

	const handleChangeSideBar = () => toggle();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const location = useLocation();

	console.log(location.pathname, "location");
	console.log(matchPath('/dashboard/profile', String(location.pathname)), "match");

	const checkCurrentRoute = (route: string) => {
		console.log(matchPath(String(route), String(location.pathname)) !== null);
		console.log(route);

		if(matchPath(String(route), String(location.pathname)) !== null) {
			return true;
		} else {
			return false;
		}
	}
	return (
		<Container>
			<Content>
				{!openedSidebar ? (
					<ClosedSideBar>
						<nav>
							<div>
								<img className="logo" src="/logos/logo-app-mini.svg" alt="Logo do sistema Pontua" />

								<button onClick={handleChangeSideBar}>
									<AiOutlineDoubleRight />
								</button>
							</div>

							<div className="divider" />
							<ul>
								<Link to="/dashboard/home" relative="route" className={`link--${checkCurrentRoute('/dashboard/home') ? 'active' : ''}`}>
									<LuLayoutDashboard />
								</Link>
								<Link to="/dashboard/profile" relative="route" className={`link--${checkCurrentRoute('/dashboard/profile') ? 'active' : ''}`}>
									<FiUser />
								</Link>
							</ul>
							<div className="divider" />
						</nav>
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<div>
									<img className="logo" src="/logos/logo-app.svg" alt="Logo do sistema Pontua" />

									<button onClick={handleChangeSideBar}>
										<AiOutlineDoubleLeft />
									</button>
								</div>
								<div className="divider" />

								<ul>
									<Link to="/dashboard/home" relative="route" className={`link--${checkCurrentRoute('/dashboard/home') ? 'active' : ''}`}>
										<LuLayoutDashboard /> Home
									</Link>
									<Link to="/dashboard/profile" relative="route" className={`link--${checkCurrentRoute('/dashboard/profile') ? 'active' : ''}`}>
										<FiUser /> Perfil
									</Link>
								</ul>

								<div className="divider" />

								<ul>
									<a href="/" className="link">
										<FiCornerUpLeft /> Sair
									</a>
								</ul>
							</nav>
						</section>
					</OpenSideBar>
				)}
			</Content>
		</Container>
	);
}

export { SideBar };