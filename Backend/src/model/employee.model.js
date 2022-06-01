const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    id:{type: Number},
    leave_type:{type: String, required:true},
    to:{type: String, required:true},
    Datefrom:{type: String, required:true},
    Dateto:{type: String, required:true},
    reason:{type: String, required:true},
    signature:{type: String, required:true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("employee", employeeSchema);