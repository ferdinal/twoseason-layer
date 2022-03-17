const mongoose = require("mongoose");

const medicalRecordSchema = mongoose.Schema(
	{
		bookingCode: {
			type: String,
			required: true,
		},
		activities: [mongoose.SchemaTypes.Mixed],
		user: {
			type: mongoose.SchemaTypes.ObjectId,
			required: false,
			ref: "Customer",
		},
	},
	{ collection: "tsMedicalRecord", timestamps: true }
);

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
