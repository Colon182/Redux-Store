const db = require('./connection');
const { User, Product, Category, Order } = require('../models');

db.once('open', async () => {

    console.log('DB Test started ....');

    // Option 1 - orders in User model is defined as [ Order.schema ]
    // const users = await User.find({}).populate({
    //     path: 'orders.products',
    //     populate: 'category'
    // });
    // console.log("users: ", JSON.stringify(users, null, 2));

    // Option 2: orders in User model treated as defined as [ type: Schema.Type.ObjectId, ref: 'Order']
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
