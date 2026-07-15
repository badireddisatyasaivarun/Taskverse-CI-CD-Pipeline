let users = [
    {
        id: 1,
        name: "User 1"
    },
    {
        id: 2,
        name: "User 2"
    }
];

const getUserById = (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.json(user);
};

module.exports = {
    getUserById
}