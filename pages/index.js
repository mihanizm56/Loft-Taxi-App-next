import React from "react";
import Link from "next/link";

import {
	loadData,
	startClock,
	tickClock,
} from "../src/redux/modules/scroller/actions";

const Index = () => (
	<div>
		<Link href="/scroll">
			<a>Scroll Me</a>
		</Link>
	</div>
);

export default Index;
