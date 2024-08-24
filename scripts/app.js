const app = {

    calcul() {

        this.nbface = document.getElementsByName("nbface")[0].value;
        this.nbde = document.getElementsByName("nbde")[0].value;
        this.nblance = document.getElementsByName("nblance")[0].value;
        this.resok = document.getElementsByName("resok")[0].value;
        this.resaccept1 = document.getElementsByName("resaccept1")[0].value;
        this.resaccept2 = document.getElementsByName("resaccept2")[0].value;
        this.resaccept3 = document.getElementsByName("resaccept3")[0].value;
        this.resaccept4 = document.getElementsByName("resaccept4")[0].value;
        this.resaccept5 = document.getElementsByName("resaccept5")[0].value;
        this.resaccept6 = document.getElementsByName("resaccept6")[0].value;
        this.resultat = [];

        for (let numeroDeLance = 0; numeroDeLance < this.nblance; numeroDeLance++) {

            const unResultatDeLance = { 
                lance: numeroDeLance, 
                res: [],
            };

            for (let numeroDeDe = 0; numeroDeDe < this.nbde; numeroDeDe++) {
                unResultatDeLance.res.push(this.getRandomInt(1, parseInt(this.nbface) + 1));
            };

            this.resultat.push(unResultatDeLance);
        }
        
        let lineOk = 0;
        let html = "<table border=1><tr><th>lancé</th><th>dés</th><th>nombre de résultats acceptables</th></tr>";

        for (let row = 0; row < this.resultat.length; row++) {
            let serieN = "";
            let nbAcceptableDansLaSerie = 0;
            for (let resElement = 0; resElement < this.resultat[row].res.length; resElement++) {

                serieN += this.resultat[row].res[resElement] + ",";

                if (
                    (this.resultat[row].res[resElement] == this.resaccept1) || 
                    (this.resultat[row].res[resElement] == this.resaccept2) || 
                    (this.resultat[row].res[resElement] == this.resaccept3) || 
                    (this.resultat[row].res[resElement] == this.resaccept4) || 
                    (this.resultat[row].res[resElement] == this.resaccept5) || 
                    (this.resultat[row].res[resElement] == this.resaccept6)
                ) {
                    nbAcceptableDansLaSerie++;
                }
            }
            if (nbAcceptableDansLaSerie >= this.resok) {
                lineOk++;
            }
            html += "<tr><td>"+ parseInt(this.resultat[row].lance + 1) +"</td><td>"+ serieN +"</td><td>" + nbAcceptableDansLaSerie + "</td></tr>";
        }
        
        html = `Compte : ${lineOk} ${html}`;
        html += "</table>";
        document.getElementById("resultat").innerHTML = html;
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
};

window.app = app;