const db = require('./connection');
const { User, Product, Category, Order } = require('../models');

db.once('open', async () => {

    console.log('DB Test started ....');

    const users = await User.find({})
        .populate('orders')
        .populate({
            path: 'orders',
            populate: {
                path: 'products',
                populate: 'category'
            }
        });

    console.log("users: ", JSON.stringify(usersNested, null, 2));

    process.exit();
});
