import React, { useEffect, useRef } from "react";
import { CookiesProvider } from "react-cookie";

// components
import Home from "./components/home/Home";
import About from "./components/about/About";
import ParticlesBack from "./particlesBack";
import Service from "./components/Service";
import Service2 from "./components/Service2";
import Footer from "./components/Footer";
// Translation
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Service3 from "./components/Service3";
import Service4 from "./components/Service4";
import CountUps from "./components/CountUp";
import Header from "./components/header/Header";

const App = () => {
	const headerRef = useRef(null);
	const stickyHeaderFunc = () => {
		window.addEventListener("scroll", () => {
			if (document.documentElement.scrollTop > 1000) {
				headerRef.current.classList.add("bgwhite");
			} else {
				headerRef.current.classList.remove("bgwhite");
			}
		});
	};
	useEffect(() => {
		stickyHeaderFunc();
		return () => window.removeEventListener("scroll", stickyHeaderFunc);
	});

	i18n
		.use(initReactI18next) // passes i18n down to react-i18next
		.use(LanguageDetector)
		.use(HttpApi)
		.init({
			supportedLngs: ["en", "uz", "ru"],
			fallbackLng: "en",
			detection: {
				order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
				caches: ["cookie"],
			},
			backend: {
				loadPath: "/assets/locales/{{lng}}/translation.json",
			},
			react: { useSuspense: false },
		});

	return (
		<CookiesProvider>
			<div className=" w-full" ref={headerRef}>
				<ParticlesBack />
				<div className="w-full absolute top-0">
					<Header />
					<Home />
					<div className="xl:mx-[100px]  sm:mx-[10px] ">
						<About />
					</div>
				</div>
				<div className=" h-[25vh]"></div>
				<div className="xl:mx-[100px]  sm:mx-[10px] ">
					<Service />
				</div>
				<div className="xl:mx-[100px]  sm:mx-[10px] ">
					<Service2 />
				</div>
				<CountUps />
				<div className="xl:mx-[100px]  sm:mx-[10px] ">
					<Service3 />
				</div>
				<div className="xl:mx-[100px]  sm:mx-[10px] ">
					<Service4 />
				</div>
				<div className="xl:mx-[100px]  sm:mx-[10px] ">
					<Footer />
				</div>
			</div>
		</CookiesProvider>
	);
};

export default App;
