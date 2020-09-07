const Game = require("../models/Game");

module.exports = {
    async store(req, res) {
        const game = await Game.create(req.body);

        res.status(200).json(game);
    },
    async index(req, res) {
        const games = await Game.findAll({ order: [["id", "DESC"]] });

        res.status(200).json(games);
    },
    async update(req, res) {
        if (isNaN(req.params.id))
            res.status(400).json({ error: "Invalid id" });

        const id = parseInt(req.params.id);

        let game = await Game.findByPk(id);

        game.update(req.body);

        res.status(200).json(game);
    },
    async single(req, res){
        const game = await Game.findByPk(req.params.id);

        if(game == undefined)
            res.status(404).json({ error: "resource not found" });        

        res.status(200).json(game);
    },
    async delete(req, res){
        const id = req.params.id;
        await Game.destroy({ where: { id }});
        
        res.status(200).json({ message: "ok" });
    }
}