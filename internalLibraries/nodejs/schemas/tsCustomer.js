"use strict";

const mongoose = require("mongoose");
const customerSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: false,
			default: null,
		},
		phone: {
			type: String,
			required: true,
		},
		uid: {
			type: String,
			required: true,
		},
		verified: {
			type: Boolean,
			required: false,
			default: false,
		},
		otp: {
			type: String,
			required: false,
			default: null,
		},
		uniqeCode: {
			type: String,
			required: false,
			default: null,
		},
		lockStatus: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	{ timestamps: true, collection: "tsCustomers" }
);

module.exports = mongoose.model("Customer", customerSchema);
