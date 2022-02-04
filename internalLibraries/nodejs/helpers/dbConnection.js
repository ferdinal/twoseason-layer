let mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

exports.dbConnection = () => {
	const Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;

	const conn = mongoose
		.connect(
			"mongodb+srv://Z1HbRfsRSlirQcTb:Z1HbRfsRSlirQcTb@cluster0.tkpuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{
				useUnifiedTopology: true,
				dbName: "sgi",
				useFindAndModify: false,
				useNewUrlParser: true,
				useCreateIndex: true,
			}
		)
		.then(console.log("connecting success"))
		.catch(console.log("conneting error"));

	mongoose.connection.once("open", function () {
		console.log("Mongoose connection in lambda opened");
	});

	mongoose.connection.on("error", function () {
		console.error("Error creating mongoose connection in lambda, exiting!");
		process.exit(1);
	});

	return conn;
};

exports.dbConnectionDev = () => {
	const Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;

	const conn = mongoose
		.connect(
			"mongodb+srv://Z1HbRfsRSlirQcTb:Z1HbRfsRSlirQcTb@cluster0.tkpuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{
				useUnifiedTopology: true,
				dbName: "development",
				useFindAndModify: false,
				useNewUrlParser: true,
				useCreateIndex: true,
			}
		)
		.then(console.log("connecting success"))
		.catch(console.log("conneting error"));

	mongoose.connection.once("open", function () {
		console.log("Mongoose connection in lambda opened");
	});

	mongoose.connection.on("error", function () {
		console.error("Error creating mongoose connection in lambda, exiting!");
		process.exit(1);
	});

	return conn;
};
