import React, { useEffect, useRef, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import "./Header.css";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown } from "flowbite-react";
import Flag from "react-flagkit";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import icon from "../../assets/logo.jpg";

const Header = () => {
	const [cookie] = useCookies(["i18next"]);
	const codes = cookie.i18next === "en" ? "US" : cookie.i18next;
	const [languageCode, setLanguageCode] = useState(
		codes && codes.toUpperCase()
	);
	const { t } = useTranslation();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const language = [
		{ code: "en", name: "English", country_code: "US" },
		{ code: "uz", name: "Uzbek", country_code: "UZ" },
		{ code: "ru", name: "Russian", country_code: "RU" },
	];

	const headerRef = useRef(null);
	const stickyHeaderFunc = () => {
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 70 ||
				document.documentElement.scrollTop > 70
			) {
				headerRef.current.classList.add("sticky_header");
			} else {
				headerRef.current.classList.remove("sticky_header");
			}
		});
	};

	useEffect(() => {
		stickyHeaderFunc();
		return () => window.removeEventListener("scroll", stickyHeaderFunc);
	});

	return (
		<header ref={headerRef}>
			<div className="md:mx-12 flex w-full z-50 items-center justify-between">
				<Link smooth={true} spy={true} to="home">
					<img src={icon} className="h-14 rounded-md" alt="" />
				</Link>
				<div className="md:flex hidden">
					<Link
						to="home"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer active hover:text-green-400 text-white w-[70px] h-[20px] flex z-50 items-center justify-center font-semibold mr-10">
						{t("home")}
					</Link>
					<Link
						to="about"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer hover:text-green-400 text-white w-[70px] h-[20px] flex items-center justify-center font-semibold mr-10">
						{t("about")}{" "}
					</Link>
					<Link
						to="service"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer hover:text-green-400 text-white w-[70px] h-[20px] flex items-center justify-center font-semibold mr-10">
						{t("service")}{" "}
					</Link>
					<Link
						to="contact"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer hover:text-green-400 text-white w-[70px] h-[20px] flex items-center justify-center font-semibold ">
						{t("contact")}{" "}
					</Link>
				</div>
				<Button id="basic-button" onClick={handleClick}>
					<Flag country={languageCode} />
					&nbsp;
					<span className="text-white">{languageCode}</span>
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}>
					{language.map(({ name, country_code, code }) => (
						<li
							key={country_code}
							onClick={() => setLanguageCode(country_code)}>
							<MenuItem onClick={() => i18next.changeLanguage(code)}>
								<div className="flex" onClick={handleClose}>
									<Flag country={country_code} />
									&nbsp;
									{name}
								</div>
							</MenuItem>
						</li>
					))}
				</Menu>
				<Dropdown
					label={
						<div className="md:hidden p-1 hover:text-green-400 mr-3 text-4xl">
							<AiOutlineMenu className=" text-white" />
						</div>
					}
					placement="left-end"
					arrowIcon={false}
					inline={true}
					dismissOnClick={true}>
					<Link
						to="home"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer my-2 hover:text-green-400 w-full flex z-50 items-center justify-center font-semibold mr-10">
						Home
					</Link>
					<Link
						to="about"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer my-2 hover:text-green-400  flex items-center justify-center font-semibold ">
						About
					</Link>
					<Link
						to="service"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer my-2 hover:text-green-400  flex items-center justify-center font-semibold ">
						Service
					</Link>
					<Link
						to="contact"
						activeClass="active"
						smooth={true}
						spy={true}
						offset={-200}
						className="cursor-pointer my-2 hover:text-green-400 flex items-center justify-center font-semibold ">
						Conatact
					</Link>
				</Dropdown>
			</div>
		</header>
	);
};

export default Header;
