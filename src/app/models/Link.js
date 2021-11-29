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
                id: Number,
                title: String,
                url: String,
            },
        ],
        maxId: { type: Number, default: 1, index: true },
    },
    {
        timestamps: true,
    } //tự động tạo createdTime & updatedTime
);

module.exports = mongoose.model('Link', Link);
