class Site {
    constructor(name, url, description, techno) {}
}

const mySites = [{}];
export default function handler(req, res) {
    res.status(200).json({ name: "John Doe" });
}
