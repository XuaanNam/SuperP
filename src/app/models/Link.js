const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Link = new Schema(
    {
        OwnerBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        linkNumber: [
            {
                title: String,
                url: String,
            },
        ],
    },
    {
        timestamps: true,
    } //tự động tạo createdTime & updatedTime
);

module.exports = mongoose.model('Link', Link);
