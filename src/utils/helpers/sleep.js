export const sleep = ms =>
	new Promise(resolve => {
		console.log("SLEEP STARTED");
		setTimeout(() => {
			resolve();
			console.log("SLEEP ENDED");
		}, ms);
	});
