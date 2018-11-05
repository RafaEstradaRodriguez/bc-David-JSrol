class Arma {
    constructor(Nombre, Durabilidad, Ataque) {
        this._nombre = Nombre;
        this._durabilidad = Durabilidad;
        this._ataque = Ataque;
    }
}
class Armadura {
    constructor(Nombre, Durabilidad, Defensa) {
        this._nombre = Nombre;
        this._durabilidad = Durabilidad;
        this._defensa = Defensa;
    }
}
class Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura) {
        this._nombre = Nombre;
        this._vida = Vida;
        this._ataque = Ataque;
        this._defensa = Defensa;
        this._suerte = Suerte;
        this._renombre = Renombre;
        this._arma = Arma;
        this._armadura = Armadura;
    }
    get nombre(){
        return "Mi nombre es: " + this._nombre;
    }
    get vida(){
        return "Mi nombre es: " + this._vida;
    }
    get ataque(){
        return "Mi nombre es: " + this._ataque;
    }
    get defensa(){
        return "Mi nombre es: " + this._defensa;
    }
    get suerte(){
        return "Mi nombre es: " + this._suerte;
    }
    get renombre() {
        return "Mi renombre es " + this._renombre;
    }
    recoger_arma(arma) {
        console.log(this._nombre + ": Recojo el arma " + arma._nombre);
        this._arma=arma;
        this._ataque+=arma._ataque;
    }
    recoger_armadura(armadura) {
        console.log(this._nombre + ": Recojo la armadura " + armadura._nombre);
        this._armadura=armadura;
        this._defensa+=arma._armadura;
    }
    ataca(target) {
        console.log("----" + this._nombre + " ataca a " + target._nombre + "----");
        if (target._defensa<this._ataque){
            console.log(this._nombre + ": ¡Vamoooooos!");
            target._vida-=(this._ataque-target._defensa);
            console.log(target._nombre + ": Ahora mi vida ha bajado a : "+ target._vida);
        }
        else {
            console.log(target._nombre + ": Menudo inútil...");
            this._vida-=target._defensa-this._ataque;
            console.log(this._nombre + ": Ahora mi vida es " + this._vida);
        }
        if (this._arma!=="No") {
            this._arma._durabilidad-=1;
        }
        if (target._armadura!=="No") {
            target._armadura._durabilidad-=1;
        }
    }
    saludar(interlocutor) {
        console.log(this._nombre + ": Ola k ase "+ interlocutor._nombre);
        this._renombre++;
        interlocutor._renombre++;
    }
}

class Luchador extends Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura, Fuerza, Mana) {
        super(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura);
        this._fuerza = Fuerza;
        this._mana = Mana;
    }
    ataque_cargado(target) {
        target._vida -= (this._ataque + this._fuerza);
        console.log("----" + this._nombre + " ataque cargado a " + target._nombre + "----");
        console.log(this._nombre + ": " + target._nombre + ", ahora tu vida es " + target._vida);
    }

}
class Mago extends Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura, Inteligencia, Mana) {
        super(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura);
        this._inteligencia = Inteligencia;
        this._mana = Mana;
    }
    ataque_cargado(target) {
        console.log("----" + this._nombre + " ataque cargado a " + target._nombre + "----");
        if (this._mana>40) {
            target._vida -= (this._ataque + this._inteligencia);
            console.log(this._nombre + ": " + target._nombre + ", ahora tu vida es " + target._vida);
        }
        else {
            console.log(this._nombre + ": Menudo manco que soy, la virgen...");
        }
    }

    regenerar_mana(target) {
        target._mana+=35;
        console.log(target._nombre + ": Ahora tu maná es " + this._mana);
    }
}
class Clerigo extends Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura, Inteligencia, Mana) {
        super(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura, Inteligencia, Mana);
        this._mana = Mana;
        this._inteligencia = Inteligencia;
    }
    curar(target) {
        if (this._mana>40) {
            target._vida+=this._inteligencia;
            console.log(this._nombre + ": " + target._nombre + ", ahora tu vida es " + target._vida);
        }

    }
}
class Arquero extends Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura, Mana) {
        super(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura, Mana)
    }
    ataque(target) {
        console.log("----" + this._nombre + " ataque cargado a " + target._nombre + "----")
        if (target._defensa<this._ataque){
            console.log(this._nombre + ": ¡Vamoooooos!");
            target._vida-=(this._ataque-target._defensa);
            console.log(this._nombre + ": Ahora tu vida ha bajado a : " + target._vida);
        }
        if (this._arma!=="No") {
            this._arma._durabilidad-=1;
            if (this._arma._durabilidad===0) {
                this._arma = "No";
                console.log(this._nombre + ": ¡Noo, mi " + this._arma._nombre + " se ha roto!");
            }
        }
    }
}
class Ladron extends Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura,) {
        super(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura,)
    }

    robo(target) {
        console.log("----" + this._nombre + " intenta robar el arma a " + target._nombre + "----");
        if (target._suerte < this.suerte) {
            target._arma = "No";
            console.log(this._nombre + ": Ahora no tienes arma, " + target._nombre);
        }
        else {
            this._vida -= (target._suerte - this.suerte) * (target._defensa);
            console.log(this._nombre + ": Nooo, he sido descubierto...");
            console.log(this._nombre + ": Ahora mi vida es: " + this._vida);
        }
    }
}
class Dios extends Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura){
        super(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura)
    }
    destruir(target) {
        console.log(this._nombre + ": Desaparece, " + target._nombre);
        target._vida=0;
    }
}
//Ahora que ya hemos definido las clases, vamos a crear algunos objetos para hacer pruebas.

var Espada = new Arma("Espada", 35, 40);
var Sable = new Arma("Sable", 20, 45);
var Libro_de_Hechizos = new Arma("Libro de Hechizos", 50, 25);
var Vara_Letal = new Arma("Vara Letal", 20, 60);
var Arco_de_Roble = new Arma("Arco de Roble", 30, 40);
var Arco_Elfico = new Arma("Arco Élfico", 35, 35);
var Espada_de_Dios = new Arma("Espada de Dios", 1000000, 100);

var Pechera_de_Cuero = new Armadura("Pechera de Cuero", 70, 10);
var Cota_de_Malla = new Armadura("Cota de Malla", 100, 20);
var Yelmo = new Armadura("Yelmo", 40, 15);
var Toga = new Armadura("Toga", 10, 10);
var Pechera_Tocha = new Armadura("Pechera Tocha", 100, 150);
var Armadura_de_Dios = new Armadura("Armadura de Dios", 3000, 300);

var Sebas = new Arquero("Sebas", 500, 30, 20, 5, 10, "No", "No", 100);
var Ammad = new Ladron("Ammad", 300, 40, 20, 30, 0, "No", "No");
var Isaac = new Arquero("Isaac", 500, 30, 20, 5, 10, "No", "No");
var Paloma = new Mago("Paloma", 300, 25, 20, 10, 15, "No", "No", 40, 100);
var Cesar = new Luchador("Cesar", 1000, 40, 50, 5, 20, "No","No", 20, 70);
var Kamil = new Clerigo("Kamil", 300, 10, 30, 10, 30, "No", "No", 2, 100);
var David = new Dios("David", 10000, 200, 300, 50, 50, "No", "No");

//Ahora veamos algunas interacciones



David.recoger_arma(Espada_de_Dios);


Cesar.ataque_cargado(David);

Cesar.ataca(David);

David.ataca(Cesar);


Kamil.curar(Cesar);
Kamil.curar(Cesar);

Isaac.ataca(David);


Paloma.saludar(Sebas);

Paloma.regenerar_mana(Kamil);