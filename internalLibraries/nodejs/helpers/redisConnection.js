const Redis = require("redis");

let redisClient;

exports.getLastCache = async (key) => {
	let response = {};
	redisClient = Redis.createClient({
		url: `redis://:cfyhn38789js@178.128.106.137`,
	});

	redisClient.on("error", (err) => {
		return response;
	});

	await redisClient.connect();
	const value = await redisClient.get(key);
	return value;
};

exports.setCache = async (key, value) => {
	redisClient = Redis.createClient({
		url: `redis://:cfyhn38789js@178.128.106.137`,
	});

	redisClient.on("error", (err) => {
		console.log("REDIS SET FAILED");
	});

	await redisClient.connect();
	await redisClient.set(key, value);

	console.log("SET COMPLETE");
};

exports.flushCache = async () => {
	redisClient = Redis.createClient({
		url: `redis://:cfyhn38789js@178.128.106.137`,
	});

	redisClient.on("error", (err) => {
		console.log("REDIS SET FAILED");
	});

	await redisClient.connect();
	console.log("FLUSH COMPLETE");
	redisClient.flushAll();
};

exports.delCache = async (key) => {
	redisClient = Redis.createClient({
		url: `redis://:cfyhn38789js@178.128.106.137`,
	});

	redisClient.on("error", (err) => {
		console.log("REDIS SET FAILED");
	});

	await redisClient.connect();
	await redisClient.del(key);

	console.log("DEL COMPLETE");
};
