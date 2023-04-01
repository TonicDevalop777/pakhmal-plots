import React from "react";
import img from "../assets/tuproq.png";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Service3 = () => {
	const { t } = useTranslation();

	return (
		<>
			{/* ===================== Our Soil ==================== */}
			<div className=" my-48 text-center">
				<motion.div
					variants={fadeIn("down", 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.3 }}>
					<h1 className=" text-center flex flex-col justify-center items-center text-black font-semibold text-3xl">
						<div className="ml-8 mb-4 inline-block h-1 w-24 bg-green-400"></div>
						{t("soil_title")}
					</h1>
					<p className="my-10 text-md leading-6 text-[#3e3e3e]">
						{t("soil_title_desc")}
					</p>
				</motion.div>
				<div className="flex lg:flex-row sm:flex-col">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="lg:w-[70%]">
						<img src={img} className=" border border-black" alt="tuproq" />
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className=" lg:w-[50%] mt-4">
						<h3 className=" text-black">{t("soil_desc_title")}</h3>
						<p className="para text-md leading-6 text-[#3e3e3e] px-6 ">
							{t("soil_desc")}
						</p>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Service3;
