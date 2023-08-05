import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";

export function SideBar() {
	const [sideBar, setSideBar] = useState(true);

	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	return (
		<Container>
			<Content>
				{!sideBar ? (
					<ClosedSideBar>
						<nav>
							<button onClick={handleChangeSideBar}>
								FECHAR
							</button>

                            <img width={104} className="logo" src="/logos/logo-app.svg" alt="Logo do sistema Pontua" />

							{/* Links principais do app */}
							<ul>
								<a href="/" title="Home">
								</a>
								<a href="/" title="Perfil">
								</a>
							</ul>
						</nav>
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar}>
									</button>
								</span>
								<div>
                                <img className="logo" src="/logos/logo-app.svg" alt="Logo do sistema Pontua" />
								</div>

								{/* Icones principais do app */}
								<ul>
									<a href="/" title="Home">
										<p>Home</p>
									</a>
									<a href="/" title="Perfil">
										<p>Perfil</p>
									</a>
								</ul>
							</nav>
						</section>
						<aside onClick={handleChangeSideBar} />
					</OpenSideBar>
				)}
			</Content>
		</Container>
	);
}
