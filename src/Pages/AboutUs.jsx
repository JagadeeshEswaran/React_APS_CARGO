/* eslint-disable no-unused-vars */
import React from "react";
import excellence_img from "../assets/collections/20Years_final.svg";

import "../styles/AboutPage.css";
import "animate.css";

const AboutUs = () => {
	return (
		<section
			className="card m-2 aboutUs_main_container d-flex flex-row justify-content-center align-items-center"
			style={{ height: "auto", minHeight: "85vh" }}>
			<article
				className="border rounded-4 p-5 aboutUs_textfield_container me-5 animate__animated animate__fadeInLeft"
				style={{ width: "35vw" }}>
				<h5 className="mb-5">About APS</h5>

				<p className="aboutUs_paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
					accusamus at recusandae? Autem eius suscipit fugit quo aperiam qui,
					molestias iusto cupiditate quidem provident numquam nulla amet illo
					est quia! Ex maxime totam veniam doloremque eos assumenda, impedit
					ipsa inventore atque, cupiditate ad quidem, expedita soluta veritatis
					similique amet? Quia nemo nulla quidem iste ipsa dignissimos! Cumque,
					suscipit! Dolorum, tempora! Culpa nam vitae voluptate? Corrupti
					facilis reiciendis aliquam nemo rerum assumenda. Voluptatem vitae,
					harum consequatur unde pariatur officiis nulla sed amet id
					voluptatibus, nesciunt quod dignissimos nihil commodi deserunt iusto?
					Consequatur, omnis molestiae odio, tempore corporis incidunt, iure
					mollitia aut maxime minus necessitatibus dicta fuga asperiores harum
					non. Accusantium repellendus reprehenderit minus tempora nam quia,
					tempore porro eveniet inventore vel. Aspernatur tempora nostrum
					exercitationem numquam assumenda inventore laborum illum veritatis,
					nobis error excepturi doloribus ab totam fugit pariatur aut reiciendis
					ex quaerat perspiciatis neque provident. Est non debitis ratione
					nostrum.
				</p>
			</article>

			<article
				className="border rounded-4 d-flex justify-content-center align-items-center aboutUs_textfield_container animate__animated animate__fadeInRight"
				style={{ width: "30vw", height: "57.25vh" }}>
				<img src={excellence_img} alt="" width={500} />
			</article>
		</section>
	);
};

export default AboutUs;
