import { Link } from "react-router-dom";
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
								<Link to="/" relative="route" className="link--active">
									<LuLayoutDashboard />
								</Link>
								<Link to="/" relative="route" className="link">
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
									<Link to="/" relative="route" className="link--active">
										<LuLayoutDashboard /> Home
									</Link>
									<Link to="/" relative="route" className="link">
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