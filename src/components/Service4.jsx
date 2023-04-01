import React from "react";
import img1 from "../assets/qora_mol.jpg";
import img2 from "../assets/milk.jpg";
import img3 from "../assets/apple.jpg";
import img4 from "../assets/seedling.jpg";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Service4 = () => {
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
					<h1 className="mt-12 text-center flex flex-col justify-center items-center text-black font-semibold text-3xl">
						<div className="ml-8 mb-4 inline-block h-1 w-24 bg-green-400"></div>
						{t("our_service")}
					</h1>
					<p id="service" className="my-8 text-md leading-6 text-[#3e3e3e]">
						{t("service_title_desc")}
					</p>
				</motion.div>
				<div className="lg:flex mt-8">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className=" lg:w-[50%] flex justify-center items-center">
						<div>
							<h3 className=" text-black">{t("soil_desc_title")}</h3>
							<p className="para text-md leading-6 text-[#3e3e3e] px-6 ">
								{t("service_desc")}
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="lg:w-[70%] mt-10">
						<div className="flex justify-center">
							<img
								className="  border lg:w-48 sm:h-32 lg:h-48 sm:w-32  rounded-lg shadow_2"
								src={img1}
								alt="imag1"
							/>
							<img
								className=" border lg:w-48 sm:h-32 lg:h-48 sm:w-32 ml-4  rounded-lg shadow_2"
								src={img2}
								alt="imag2"
							/>
						</div>
						<div className="mt-4 flex justify-center">
							<img
								className="border lg:w-48 sm:h-32 lg:h-48 sm:w-32  rounded-lg shadow_2"
								src={img3}
								alt="imag3"
							/>

							<img
								className="lg:w-48 sm:h-32 lg:h-48 sm:w-32 ml-4  rounded-lg shadow_2"
								src={img4}
								alt="imag4"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Service4;
