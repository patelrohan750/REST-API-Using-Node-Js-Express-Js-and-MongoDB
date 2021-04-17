const express = require('express');

const Student = require('../models/student');

const router = new express.Router();

router.get('/students', async (req, res) => {
	try {
		const studentdata = await Student.find({});
		res.status(201).send(studentdata);
	} catch (e) {
		res.status(400).send(e);
	}
});
router.post('/students', async (req, res) => {
	try {
		const studentData = new Student(req.body);
		const saveData = await studentData.save();
		res.status(201).send(saveData);
		console.log(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.put('/students/:id', async (req, res) => {
	try {
		const _id = req.params.id;
		const updateData = await Student.findByIdAndUpdate(_id, req.body, {
			new: true
		});
		res.send(updateData);
		console.log(updateData);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/students/:id', async (req, res) => {
	try {
		const _id = req.params.id;
		const studentData = await Student.findById(_id);

		if (!studentData) {
			return res.status(404).send();
		} else {
			res.send(studentData);
			console.log(studentData);
		}
	} catch (e) {
		resstatus(500).send(e);
	}
});

router.delete('/students/:id', async (req, res) => {
	try {
		const _id = req.params.id;
		const deleteData = await Student.findByIdAndDelete(_id);
		if (!_id) {
			return res.status(404).send();
		}
		res.send(deleteData);
		console.log(deleteData);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
