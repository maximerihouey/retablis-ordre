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
            {"name": '🎵️ André Rieu joue "Les Corons" à Bollaert', "date": new Date("2005-02-19")},
            {"name": '🎵️ "Bo le lavabo (WC Kiss)" Vincent Lagaf', "date": new Date("1990-03-01")},
            {"name": '👑️ Sacre de Napoléon Ier', "date": new Date("1804-05-18")},
            {"name": '👨‍🚀️ "Un petit pas pour l\'homme, un bond de géant pour l\'humanité"', "date": new Date("1969-07-20")},
            {"name": '🎵️ La Flûte enchantée, Mozart', "date": new Date("1791-09-30")},
            {"name": '🕊️ Armistice Guerre franco-allemande de 1870', "date": new Date("1871-01-29")},
            {"name": '💥️ Début Bataille de Verdun', "date": new Date("1916-02-21")},
            {"name": '🎖️ Fin Bataille de la Somme', "date": new Date("1916-11-18")},
            {"name": '💪️ Coup d\'État du 18 Brumaire', "date": new Date("1799-11-09")},
            {"name": '🎵️ Macarena, Los del Río', "date": new Date("1996-08-03")},
            {"name": '⚔️ Assassinat de Jean Jaurès', "date": new Date("1914-07-31")},
            {"name": '⚔️ Assassinat de John F. Kennedy', "date": new Date("1963-11-22")},
            {"name": '⚔️ Assassinat de Martin Luther King', "date": new Date("1968-04-04")},
            {"name": '📖️ Du côté de chez Swann, Marcel Proust', "date": new Date("1913-11-14")},
        ]
        this.size = this.data.length
    }

    someRandomEvents() {
        var howmany = 3 + Math.floor(Math.random() * Math.floor(5));
        return pickRandom(this.data, {count: howmany});
    }
}

export default GameData;
