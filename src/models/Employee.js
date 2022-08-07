import { Schema, model, models } from "mongoose";

const EmployeeSchema = new Schema({
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

const Employee = models.Employee || model("Employee", EmployeeSchema);

export default Employee;
