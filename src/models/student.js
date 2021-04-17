const mongoose = require('mongoose');
const validator = require('validator');

const StudentSchema = new mongoose.Schema({
	name: {
		type: String,
		requried: true,
		minlength: 3
	},
	email: {
		type: String,
		requried: true,
		unique: [ true, 'Email id already present' ],
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Invalid Email');
			}
		}
	},
	phone: {
		type: Number,
		requried: true,
		min: 10,
		unique: true
	},
	address: {
		type: String,
		requried: true
	}
});

const Student = new mongoose.model('Students', StudentSchema);

module.exports = Student;
