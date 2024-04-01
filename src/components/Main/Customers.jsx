/* eslint-disable no-unused-vars */
import React from "react";
import client_1 from "../../assets/Client/Arrow.png";
import client_2 from "../../assets/Client/expoknits.png";
import client_3 from "../../assets/Client/Madhura.png";
import client_4 from "../../assets/Client/RBR.png";
import client_5 from "../../assets/Client/Rex.png";
import client_6 from "../../assets/Client/SIG.png";

import "../../styles/Main_Section.css";

const Customers = () => {
	return (
		<>
			<section
				className="d-flex w-100 justify-content-evenly align-items-center"
				style={{
					width: "100vw",
					height: "30vh",
					marginTop: "10rem",
					background: "whitesmoke",
				}}>
				<article
					className="customers_card card bg-transparent d-flex justify-content-center align-items-center py-2"
					style={{ width: "15rem" }}>
					<img src={client_1} alt="" height={70} width={150} />
				</article>

				<article
					className="customers_card card bg-transparent d-flex justify-content-center align-items-center py-2"
					style={{ width: "15rem" }}>
					<img src={client_2} alt="" height={70} width={200} />
				</article>

				<article
					className="customers_card card bg-transparent d-flex justify-content-center align-items-center py-2"
					style={{ width: "15rem" }}>
					<img src={client_3} alt="" height={70} width={150} />
				</article>

				<article
					className="customers_card card bg-transparent d-flex justify-content-center align-items-center py-2"
					style={{ width: "15rem" }}>
					<img src={client_4} alt="" height={70} width={150} />
				</article>

				<article
					className="customers_card card bg-transparent d-flex justify-content-center align-items-center py-2"
					style={{ width: "15rem" }}>
					<img src={client_5} alt="" height={70} width={150} />
				</article>

				<article
					className="customers_card card bg-transparent d-flex justify-content-center align-items-center py-2"
					style={{ width: "15rem" }}>
					<img src={client_6} alt="" height={70} width={150} />
				</article>
			</section>
		</>
	);
};

export default Customers;
