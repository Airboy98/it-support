const Appointment = require("../models/appointmentModel");
const mongoose = require("mongoose");

// get all appointments
const getAppointments = async (req, res) => {
  const appointments = await Appointment.find({}).sort({ createdAt: -1 });

  res.status(200).json(appointments);
};

// get a single appointment
const getAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such appointment" });
  }

  const appointment = await Appointment.findById(id);

  if (!appointment) {
    return res.status(404).json({ error: "No such appointment" });
  }

  res.status(200).json(appointment);
};

// create new appointment
const createAppointment = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const appointment = await Appointment.create({ title, load, reps });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a appointment
const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such appointment" });
  }

  const appointment = await Appointment.findOneAndDelete({ _id: id });

  if (!appointment) {
    return res.status(400).json({ error: "No such appointment" });
  }

  res.status(200).json(appointment);
};

// update a appointment
const updateAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such appointment" });
  }

  const appointment = await Appointment.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!appointment) {
    return res.status(400).json({ error: "No such appointment" });
  }

  res.status(200).json(appointment);
};

module.exports = {
  getAppointments,
  getAppointment,
  createAppointment,
  deleteAppointment,
  updateAppointment,
};
