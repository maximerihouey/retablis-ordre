import pickRandom from 'pick-random';

class GameData {

    constructor() {
        this.data = [
            {"name": '🏅️ Inauguration JO moderne', "date": new Date("1896-04-06")},
            {"name": '👶️ Naissance André Breton', "date": new Date("1896-02-18")},
            {"name": '☠️ Décès Paul Verlaine', "date": new Date("1896-01-08")},
            {"name": '📺️ Première Loft Story saison 1 (France)', "date": new Date("2001-04-26")},
            {"name": '🕊️ Armistice de la Guerre de Corée', "date": new Date("1953-07-27")},
            {"name": '🇨🇿️ Début du Printemps de Prague', "date": new Date("1968-01-05")},
            {"name": '⚽️ Match de la honte (RFA–Autriche)', "date": new Date("1982-06-25")},
            {"name": '👶️ Naissance Victor Hugo', "date": new Date("1802-02-26")},
            {"name": '☠️ Décès Victor Hugo', "date": new Date("1885-05-22")},
            {"name": '⚽️ 1ère Finale de la Coupe des clubs champions européens', "date": new Date("1956-06-13")},
        ]
        this.size = this.data.length
    }

    someRandomEvents() {
        var howmany = 3 + Math.floor(Math.random() * Math.floor(5));
        return pickRandom(this.data, {count: howmany});
    }
}

export default GameData;
