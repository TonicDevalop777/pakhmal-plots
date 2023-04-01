import React from "react";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Service = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className=" my-48">
				{/* ===================== About Us ==================== */}
				<div className="flex lg:flex-row sm:flex-col-reverse justify-around">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="h-[600px] relative lg:mx-[32] sm:mx-0 lg:w-[35%] shadow_2 bg-about_img backdrop-sepia-0 bg-cover  bg-center rounded-t-2xl">
						<div className=" flex lg:w-[500px] sm:w-[310px] flex-row-reverse absolute justify-between items-center lg:left-[-50px] sm:left-[-10px] bottom-[30px]">
							<div className=" w-52 bg-green-400 rounded-r-lg p-3 text-sm leading-6 custom-shadow  text-white">
								{t("shior")}
							</div>
							<div className="border-4 mr-4 border-white rounded-l-xl  w-48 h-48 bg-about_1 bg-cover bg-center"></div>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="lg:w-[40%]">
						<h1 className="mt-12 text-black font-semibold text-3xl">
							{t("about_us")}
							<div className="ml-8 inline-block h-1 w-24 bg-green-400"></div>
						</h1>
						<p id="about" className="my-10 text-md leading-6 text-[#3e3e3e]">
							{t("about_desc")}
						</p>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Service;
