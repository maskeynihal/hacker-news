export default (unixTime) => {
	const dateObject = new Date(unixTime * 1000);

	return dateObject.toLocaleString();
};
