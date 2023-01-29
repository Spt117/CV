export default (req, res) => {
    const Mdp = process.env.mdp;
    const body = req.body;
    body === Mdp ? res.status(201).json(true) : res.status(400).json(false);
};
