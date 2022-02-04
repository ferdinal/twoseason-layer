"use strict";

const mongoose = require("mongoose");

const pointTrxSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: "Customer",
		},
		cashierId: {
			type: mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: "Cashier",
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
			required: false,
			default: null,
		},
		typeTransaction: {
			type: String,
			required: true,
			enum: ["new", "topup", "payment", "refund"],
		},
		description: {
			type: String,
			required: false,
		},
	},
	{ collection: "tsPoint", timestamps: true }
);

module.exports = mongoose.model("Point", pointTrxSchema);
