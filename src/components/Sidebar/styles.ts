import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
	height: 100%;
	width: 256px;
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
	box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`;

export const ClosedSideBar = styled.header`
	max-width: 60px;
	width: 100%;
	height: 100%;
	border-radius: 0 12px 12px 0;

	background: var(--second-background);

	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	.logo {
		width: 105px;
		height: 29px;
	}

	.divider {
		border-bottom: 1px solid #EBEFF2;
		width: 100%;
	}

	svg {
		color: #00000;
		stroke: #000;
	}

	ul li {
		cursor: pointer;
	}

	/* Links principais do app */
	nav {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
		background: var(--white, #FFF);

		> button {
			width: 100%;
			padding: 18px;

			&:hover {
				svg {
					path {
						color: var(--third-color);
					}
				}
			}
		}

		> button svg {
			width: 24px;
			height: 24px;

			color: #c4c4c4;
		}

		div {
			margin-top: 13px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: row;
			gap: 0px;
			padding: 3px;

			h1 {
				color: #fff;
				font-size: 14px;

				animation: ${appearFromRight} 0.4s;
			}
		}

		ul {
			margin-top: 16px;
			width: 100%;
			text-align: center;
			display: flex;
			align-items: center;
			flex-direction: column;

			.link {
					animation: ${appearFromRight} 0.4s;

					&--active {
						color: #F21A05;
					}

					svg {
						width: 24px;
						height: 24px;
						stroke: #000;
					}

					&--active > svg {
						width: 24px;
						height: 24px;
						stroke: #F21A05;
					}
				}
			a {
				width: 100%;
				padding: 16px 0;
				border-radius: 8px 0 0 8px;

				display: flex;
				align-items: center;
				justify-content: center;

				transition: background 0.3s;

				&:hover {
					background: var(--primary-background);

					svg {
						path {
							color: var(--third-color);
						}
					}
				}
			}
		}
	}

	/* Icones que pode não ser tão principais no app */
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;

		ul {
			margin-bottom: 16px;
			text-align: center;
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;

			ul {
				margin-top: 15px;
				width: 100%;
				text-align: left;
				display: flex;
				flex-direction: column;

				.link {
					animation: ${appearFromRight} 0.4s;

					&--active {
						color: #F21A05;
					}

					svg {
						width: 24px;
						height: 24px;
					}

					&--active > svg {
						width: 24px;
						height: 24px;
						stroke: #F21A05;
					}
				}

				a {
					color: #000000;
					padding: 16px 20px;
					border-radius: 8px 0 0 8px;
					animation: ${appearFromRight} 0.4s;

					display: flex;
					align-items: center;
					gap: 16px;

					transition: background 0.3s;
				}
			}
		}

		span {
			padding: 16px 0;
			text-align: center;
			border-radius: 8px 8px 0 0;

			display: flex;
			align-items: center;
			justify-content: center;

			background: var(--third-color);
			width: 100%;
		}
	}
`;

export const OpenSideBar = styled.header`
	height: 100%;
	width: 256px;

	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	background: var(--shadow-black-color);

	display: flex;
	align-items: center;

	.logo {
		width: 110px;
		height: 35px;
	}

	.divider {
		border-bottom: 1px solid #EBEFF2;
		width: 100%;
	}

	section {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: space-between;

		max-width: 256px;
		width: 100%;
		height: 100%;

		background: var(--second-background);
		border-radius: 0 12px 12px 0;

		ul li {
			cursor: pointer;
		}

		/* Links principais do app */
		nav {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 100%;
			box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
			background: var(--white, #FFF);

			> span {
				width: 100%;
				display: flex;
				align-items: flex-start;

				button {
					cursor: pointer;
					padding: 18px;

					&:hover {
						svg path {
							color: var(--third-color);
						}
					}

					svg {
						width: 24px;
						height: 24px;

						color: #c4c4c4;
					}
				}
			}

			div {
				margin-top: 16px;

				display: flex;
				align-items: center;
				justify-content: flex-start;
				padding-left: 24px;
				flex-direction: row;
				gap: 16px;

				h1 {
					color: #fff;
					font-size: 14px;

					animation: ${appearFromRight} 0.4s;
				}
			}

			ul {
				margin-top: 15px;
				width: 100%;
				text-align: left;
				display: flex;
				flex-direction: column;

				.link {
					animation: ${appearFromRight} 0.4s;

					&--active {
						color: #F21A05;
					}

					svg {
						width: 24px;
						height: 24px;
					}

					&--active > svg {
						width: 24px;
						height: 24px;
						stroke: #F21A05;
					}
				}

				a {
					color: #000000;
					padding: 16px 20px;
					border-radius: 8px 0 0 8px;

					display: flex;
					align-items: center;
					gap: 16px;

					transition: background 0.3s;
				}
			}
		}

		div {
			margin-top: 16px;
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;

			ul {
				margin-bottom: 16px;
				text-align: left;
				width: 100%;
				display: flex;
				flex-direction: column;

				a {
					padding: 16px 20px;
					display: flex;
					align-items: center;
					color: #c4c4c4;
					gap: 16px;

					transition: color 0.3s;
					&:hover {
						svg path {
							color: var(--third-color);
						}
					}
					svg {
						width: 20px;
						height: 20px;
					}

					p {
						animation: ${appearFromRight} 0.4s;
					}
				}
			}

			span {
				padding: 16px 0;
				border-radius: 8px 8px 0 0;

				background: var(--third-color);
				width: 100%;

				display: flex;
				align-items: center;
				gap: 12px;

				p {
					text-overflow: ellipsis;
					color: #c4c4c4;
					width: 70%;
					padding-right: 12px;
					white-space: nowrap;
					animation: ${appearFromRight} 0.4s;
					overflow: hidden;
				}

			}
		}
	}

	aside {
		width: 100%;
		height: 100%;
	}
`;
