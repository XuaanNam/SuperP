const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongoose_delete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.plugin(slug);

const User = new Schema(
    {
        _id: Number,
        userName: { type: String },
        fullName: { type: String, maxlength: 255 },
        email: { type: String },
        image: { type: String, default: 'resources/images/' },
        password: { type: String },
        slug: { type: String, slug: 'userName', unique: true },
        // {slug: "name", unique: true} hỗ trợ tự động tạo dựa trên name:{} và không thể trùng
        //Nếu có 2 name trùng tên nhau, thì nó sẽ tạo ngẫu nhiên 1 short id vào cuối dòng slug
        //được hỗ trợ bởi mongoose-slug-generator
    },
    {
        _id: false,
        timestamps: true,
    } //tự động tạo createdTime & updatedTime
);
//add Plugins
User.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all',
});
User.plugin(AutoIncrement);

module.exports = mongoose.model('User', User);
