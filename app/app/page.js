import Image from "next/image";
import { Resource } from "sst";
import styles from "./page.module.css";
export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<ol>
					<li>
						App: <code>{Resource.App.name}</code>
					</li>
					<li>
						Stage: <code>{Resource.App.stage}</code>
					</li>
				</ol>
			</main>
		</div>
	);
}
