const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First Name cannot be empty."],
		maxLength: [15, "Max length cannot be more than 15 characters."],
	},

	lastName: {
		type: String,
		required: [true, "Last Name cannot be empty."],
		maxLength: [15, "Max length cannot be more than 15 characters."],
	},

	phoneNumber: {
		type: String,
		required: [true, "Phone Number cannot be empty."],
		maxLength: [14, "Max length cannot be more than 14 characters."],
	},

	email: {
		type: String,
		required: [true, "Email cannot be empty."],
		maxLength: [40, "Max length cannot be more than 40 characters."],
		unique: true,
	},

	role: {
		type: String,
		required: true,
	},
});

model.exports =
	mongoose.models.Project || mongoose.model("Project", ProjectSchema);
