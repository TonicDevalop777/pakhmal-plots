import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Seedling from "../assets/seedling.png";
import Milk from "../assets/milk.png";
import Field from "../assets/field.png";
import Meat from "../assets/meat.png";
import { useTranslation } from "react-i18next";
const CountUps = () => {
	const { t } = useTranslation();

	const [viewPortEntered, setViewPortEntered] = useState(false);
	return (
		<div className=" my-44 ">
			<ScrollTrigger
				onEnter={() => setViewPortEntered(true)}
				onExit={() => setViewPortEntered(false)}>
				<div className=" bg-[#dcdbdb] flex lg:flex-row sm:flex-col items-center justify-around py-12 px-20">
					<div className=" flex mt-4">
						<div className=" text-6xl mr-2 text-[#faf9f9]">
							<img className=" h-16" src={Meat} alt="" />
						</div>
						<div className="">
							{viewPortEntered && (
								<>
									<div>{t("peryear")}</div>
									<CountUp
										className=" text-3xl font-[900] font_custom  text-green-500"
										start={0}
										end={30000}
										duration={2}
										delay={0}
									/>
									Kg
								</>
							)}
							<div>{t("meat")}</div>
						</div>
					</div>
					<div className=" flex mt-4">
						<div className=" text-6xl mr-2 text-[#faf9f9]">
							<img className=" h-16" src={Seedling} alt="" />
						</div>
						<div className="">
							{viewPortEntered && (
								<>
									<div>{t("total")}</div>
									<CountUp
										className=" text-3xl font-[900] font_custom  text-green-500"
										start={0}
										end={1000000}
										duration={2}
										delay={0}
									/>
									m²
								</>
							)}
							<div>{t("garden")}</div>
						</div>
					</div>
					<div className=" flex mt-4">
						<div className=" text-6xl mr-2 text-[#faf9f9]">
							<img className=" h-16" src={Milk} alt="" />
						</div>
						<div className="">
							{viewPortEntered && (
								<>
									<div>{t("peryear")}</div>
									<CountUp
										className=" text-3xl font-[900] font_custom  text-green-500"
										start={0}
										end={2700}
										duration={2}
										delay={0}
									/>
									litr
								</>
							)}
							<div>{t("milk")}</div>
						</div>
					</div>
					<div className=" flex mt-4">
						<div className=" text-6xl mr-2 text-[#faf9f9]">
							<img className=" h-16" src={Field} alt="" />
						</div>
						<div className="">
							{viewPortEntered && (
								<>
									<div>{t("total")}</div>
									<CountUp
										className=" text-3xl font-[900] font_custom  text-green-500"
										start={0}
										end={3000000}
										duration={2}
										delay={0}
									/>
									m²
								</>
							)}
							<div>{t("field")}</div>
						</div>
					</div>
				</div>
			</ScrollTrigger>
		</div>
	);
};

export default CountUps;
