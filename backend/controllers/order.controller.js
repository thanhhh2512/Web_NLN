const Order = require('../models/order');

exports.getOrders = async (req, res) => {
    try {
        const data = await Order.findOne();
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

exports.getOrder = async (req, res) => {
    try {
        const orderId = req.param.id;
        const data = await Order.findById(orderId);
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const data = await Order.findByIdAndUpdate(orderId, updatedData, options);

        if (!data) {
            return res.status(404).json({ error: "Order not found" });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

exports.createOrder = async (req, res) => {
    try {
        const data = await Order.create(req.body);
        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;

        const data = await Order.findByIdAndDelete(orderId);

        if (!data) {
            return res.status(404).json({ error: "Order not found" });
        }

        return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}