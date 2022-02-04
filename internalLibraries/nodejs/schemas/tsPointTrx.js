"use strict";

const mongoose = require("mongoose");

const pointTrxSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: "Customer",
		},
		presentPoint: {
			type: Number,
			required: true,
		},
		lastPoint: {
			type: Number,
			required: true,
		},
		pointActivity: {
			type: Number,
			required: true,
		},
		codeRef: {
			type: String,
			required: true,
		},
		typeTransaction: {
			type: String,
			required: true,
			enum: ["topup", "payment", "refund"],
		},
		description: {
			type: String,
			required: false,
		},
	},
	{ collection: "tsPoint", timestamps: true }
);

module.exports = mongoose.model("Point", pointTrxSchema);
