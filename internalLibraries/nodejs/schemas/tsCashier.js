"use strict";

const mongoose = require("mongoose");
const cashierSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		uid: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		collection: "tsCashiers",
		timestamps: true,
	}
);

module.exports = mongoose.model("Cashier", cashierSchema);
