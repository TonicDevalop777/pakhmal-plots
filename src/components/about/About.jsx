import React from "react";
import img from "../../assets/director.png";
import { useTranslation } from "react-i18next";
const About = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className=" ">
				{/* ===================== Company ==================== */}
				<div className=" lg:flex-row sm:flex-col-reverse flex h-full items-center justify-between my-12">
					<div className="custom-shadow m-3  flex lg:w-[50%]  rounded-xl overflow-hidden ">
						<div className=" w-16 bg-[#7dba29]"></div>
						<div className="p-3">
							<h2 className="text-[#7dba29] lg:text-3xl sm:text-xl font-semibold">
								{t("director_title").toUpperCase()}
							</h2>
							<h3 className="my-4 text-[20px] ">
								{t("tasischi").toUpperCase()}
							</h3>
							<p className="lg:text-2xl sm:text-md leading-5">
								{t("it_about")}
							</p>
						</div>
					</div>
					<div className="flex flex-col mb-4 items-center">
						<img src={img} className=" lg:w-[340px] sm:w-[230px]" alt="image" />
						<a href="https://t.me/bakhmal_plots">
							<button className="bg-[#7dba29] text-white font-semibold hover:bg-[#5c930f]  rounded-xl py-2 px-8">
								{t("aloqa")}
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
