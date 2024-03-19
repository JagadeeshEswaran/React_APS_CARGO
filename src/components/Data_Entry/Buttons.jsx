/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import styles from "../../styles/DataEntry.module.css";

const Buttons = ({ handleSubmitBtn }) => {
	return (
		<>
			<article className={styles.buttons_container}>
				<button onClick={() => handleSubmitBtn()}>Submit</button>
				<button>Clear</button>
				<button>Repeat Prev.</button>
			</article>
		</>
	);
};

export default Buttons;
