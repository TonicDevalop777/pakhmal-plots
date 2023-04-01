import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
// motion

import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Service2 = () => {
	const { t } = useTranslation();
	// const trans =;
	// console.log(trans);
	return (
		<>
			<div className=" my-6 ">
				{/* ===================== Our Jobs ==================== */}
				<div className="flex lg:flex-row sm:flex-col items-center">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className=" lg:w-[50%]">
						<h1 className="mt-12 text-black font-semibold text-3xl">
							{t("job_title")}
							<div className="ml-8 inline-block h-1 w-24 bg-green-400"></div>
						</h1>
						<div className="pr-4">
							<p
								dangerouslySetInnerHTML={{ __html: t("job_desc1") }}
								className="my-4 para text-[17px] leading-6 text-[#3e3e3e]"></p>
							<div className=" w-full border-b border-[#5d5959]"></div>
							<p
								dangerouslySetInnerHTML={{ __html: t("job_desc2") }}
								className="my-4 para text-[17px] leading-6 text-[#3e3e3e]"></p>
							<div className=" w-full border-b border-[#5d5959]"></div>
							<p
								dangerouslySetInnerHTML={{ __html: t("job_desc3") }}
								className="my-4 para text-[17px] leading-6 text-[#3e3e3e]"></p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="lg:w-[50%]">
						<div className="grid grid-cols-2 gap-4">
							<div className="hover:shadow-2xl cursor-pointer">
								<img
									className=" rounded-tl-3xl  border border-green-400"
									src={img1}
									alt="imag1"
								/>
							</div>
							<div>
								<img
									className="hover:shadow-2xl rounded-tr-3xl border border-green-400"
									src={img2}
									alt="imag2"
								/>
							</div>
							<div className="mt-6">
								<img
									className="hover:shadow-2xl rounded-bl-3xl border border-green-400"
									src={img3}
									alt="imag3"
								/>
							</div>
							<div>
								<img
									className="hover:shadow-2xl rounded-br-3xl border border-green-400"
									src={img4}
									alt="imag4"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Service2;
