import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiTelegramLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import img from "../assets/contact.jpg";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Footer = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className=" lg:h-screen lg:flex flex-row-reverse py-10 justify-center items-center">
				<motion.div
					variants={fadeIn("left", 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.3 }}
					className="lg:w-[50%] lg:ml-10">
					<h1 className=" text-black font-semibold text-3xl">
						{t("contact_us")}
						<div className="ml-8 inline-block h-1 w-24 bg-green-400"></div>
					</h1>
					<p className="my-10 text-md leading-6 text-[#3e3e3e]">
						{t("contact_dec")}
					</p>
					<div id="contact" className="flex">
						<AiOutlinePhone className=" text-black text-3xl" />
						<ul className="list-disc ml-8">
							<li>
								<a
									href="tel:+998 99-447-71-71"
									className="text-blue-600 visited:text-purple-600">
									+998 99-447-71-71
								</a>
							</li>
							<li>
								<a
									href="tel:+998 91-199-77-11"
									className="text-blue-600 visited:text-purple-600">
									+998 91-199-77-11
								</a>
							</li>
							<li>
								<a
									href="tel:+998 97-081-05-55"
									className="text-blue-600 visited:text-purple-600">
									+998 97-081-05-55
								</a>
							</li>
						</ul>
					</div>
					<a
						className="flex text-blue-600 visited:text-purple-600"
						href="mailto:max.omuxammadiyev24@gmail.com?body=My custom mail body">
						<HiOutlineMail className="mr-4 whitespace-pre-wrap text-[#92861c] lg:text-3xl sm:text-[30px]" />
						<span className="lg:text-1xl sm:text-[15px] ">
							omuxammadiyev24@gmail.com
						</span>
					</a>
					<a
						className="flex text-blue-600 visited:text-purple-600"
						href="https://bakhmal-plots.uz">
						<TbWorldWww className="mr-4 text-[#92861c] text-3xl" />
						bakhmal-plots.uz
					</a>
					<a
						href="https://t.me/bakhmal_plots"
						className=" flex text-blue-600 visited:text-purple-600">
						<RiTelegramLine className=" mr-4 text-[#315de2] text-3xl" />
						Telegram
					</a>
				</motion.div>
				<motion.div
					variants={fadeIn("right", 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.3 }}
					className="lg:block sm:hidden">
					<img className=" h-80 rounded-xl" src={img} alt="" />
				</motion.div>
			</div>
		</>
	);
};

export default Footer;
