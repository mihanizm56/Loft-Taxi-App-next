import { timeDivider } from "./time-divider";

export const lockTimeMessage = ({ seconds, i18n }) =>
	seconds
		? `${i18n("lock-time", {
				formattedTimeValue: timeDivider({ timeValue: seconds, i18n }),
		  })}` // eslint-disable-line
		: i18n("timeout-done-text");
