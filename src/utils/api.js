const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const topStoriesUrl = `${baseUrl}topstories.json`;

const getItemUrlById = (id) => {
	return `${baseUrl}item/${id}.json`;
};

export { baseUrl, topStoriesUrl, getItemUrlById };
