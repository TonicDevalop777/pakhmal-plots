import React from "react";
import { useTranslation } from "react-i18next";
import "./cursor.css";
function Home() {
	const { t } = useTranslation();

	return (
		<>
			<div
				id="home"
				className="  h-screen bg-hero bg-fixed bg-cover bg-center w-full top-0">
				<div className=" h-screen w-full bg-[#000000ac] text-white flex items-center justify-center">
					<div className=" absolute top-[80vh] left-20">
						<div className=" h-2 w-12 bg-green-400"></div>
						{t("hero_title")}
					</div>

					<div className=" relative mr-[180px]  h-[120px] w-[120px] rounded-[50%] bg-[#10ee5665]"></div>
					<span className=" absolute text-3xl font-semibold">
						BAKHMAL PLOTS
					</span>
				</div>
			</div>
		</>
	);
}

export default Home;
