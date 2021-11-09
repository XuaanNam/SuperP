const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const User = new Schema(
    {
        userName: { type: String },
        fullName: { type: String, maxlength: 255 },
        email: { type: String },
        image: { type: String, default: 'resources/images/' },
        password: { type: String },
        slug: { type: String, slug: 'userName', unique: true },
    },
    {
        timestamps: true,
    } //tự động tạo createdTime & updatedTime
);

module.exports = mongoose.model('User', User);
