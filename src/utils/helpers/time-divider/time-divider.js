export const timeDivider = ({ timeValue, i18n }) => {
	const hours = Math.floor(timeValue / 3600) || 0;
	const minutes = Math.floor((timeValue - hours * 3600) / 60);
	const seconds = timeValue % 60;

	const hoursMessage = hours ? `${hours} ${i18n("time.hours")} ` : "";
	const minutesMessage = minutes ? `${minutes} ${i18n("time.minutes")} ` : "";
	const secondsMessage = seconds ? `${seconds} ${i18n("time.seconds")}` : "";

	return (hoursMessage + minutesMessage + secondsMessage).trim();
};
