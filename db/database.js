const users = [
	{
		id: 1,
		name: "Ferdi Tarakcı",
		email: "bilgi@ferditarakci.com.tr",
		// password => 123456
		password: "$2b$10$GklUldNxhkck50vaHT785u/K3xRuoQauEEPgsoGXYPldKqBrW/1dS",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	{
		id: 2,
		name: "Test User 1",
		email: "test1@gmail.com",
		// password => 123456
		password: "$2b$10$GklUldNxhkck50vaHT785u/K3xRuoQauEEPgsoGXYPldKqBrW/1dS",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	{
		id: 3,
		name: "Test User 2",
		email: "test2@gmail.com",
		// password => 123456
		password: "$2b$10$GklUldNxhkck50vaHT785u/K3xRuoQauEEPgsoGXYPldKqBrW/1dS",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	{
		id: 4,
		name: "Test User 3",
		email: "test1@gmail.com",
		// password => 123456
		password: "$2b$10$GklUldNxhkck50vaHT785u/K3xRuoQauEEPgsoGXYPldKqBrW/1dS",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	{
		id: 5,
		name: "Test User 4",
		email: "test2@gmail.com",
		// password => 123456
		password: "$2b$10$GklUldNxhkck50vaHT785u/K3xRuoQauEEPgsoGXYPldKqBrW/1dS",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	{
		id: 6,
		name: "Test User 5",
		email: "test1@gmail.com",
		// password => 123456
		password: "$2b$10$GklUldNxhkck50vaHT785u/K3xRuoQauEEPgsoGXYPldKqBrW/1dS",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
];

const publicPosts = [
	{
		title: "Post 1",
		content: "Post 1 is free",
	},
	{
		title: "Post 2",
		content: "Post 2 is free",
	},
];

const privatePosts = [
	{
		title: "Post 3",
		content: "Post 3 is private",
	},
];

module.exports = { users, publicPosts, privatePosts };
