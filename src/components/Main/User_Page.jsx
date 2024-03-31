/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import styles from "../../styles/Main_Section.module.css";
import { useAppContext } from "../../GlobalContext/AppContext";

const User_Page = () => {
	const { userData } = useAppContext();

	return (
		<>
			<section className={styles.user_page_cards_container}>
				<a href="/tracking">
					<article className={styles.user_page_cards}>
						{/* <h3 className={styles.cards_body_h3}>
						<a href="/tracking">Track Consignment</a>
					</h3> */}
						Track Consignment
					</article>
				</a>

				<a href="/admin/book_parcel">
					<article className={styles.user_page_cards}>Book a Parcel</article>
				</a>

				<a
					href="/admin/tracking_update
				">
					<article className={styles.user_page_cards}>
						Update Consignment
					</article>
				</a>
			</section>
		</>
	);
};

export default User_Page;
