class Arma {
    constructor(Nombre, Durabilidad, Ataque) {
        this._nombre = Nombre;
        this._durabilidad = Durabilidad;
        this._ataque = Ataque;
    }
    get nombre(){
        return this._nombre;
    }
    get durabilidad() {
        return this._durabilidad;
    }
    get ataque() {
        return this._ataque;
    }
    set nombre(a) {
        if (typeof a==="string") {
            this._nombre=a;
        }
    }
    set durabilidad(a) {
        if (typeof a==="number") {
            this._durabilidad=a;
        }
    }
    set ataque(a) {
        if (typeof a==="number") {
            this._ataque=a;
        }
    }
}
class Armadura {
    constructor(Nombre, Durabilidad, Defensa) {
        this._nombre = Nombre;
        this._durabilidad = Durabilidad;
        this._defensa = Defensa;
    }
    get nombre(){
        return this._nombre;
    }
    get durabilidad() {
        return this._durabilidad;
    }
    get defensa() {
        return this._defensa;
    }
    set nombre(a) {
        if (typeof a==="string") {
            this._nombre=a;
        }
    }
    set durabilidad(a) {
        if (typeof a==="number") {
            this._durabilidad=a;
        }
    }
    set defensa(a) {
        if (typeof a==="number") {
            this._defensa=a;
        }
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

    //Ahora colocamos los getters para recoger las propiedades de la clase Heroe

    get nombre(){
        return this._nombre;
    }
    get vida(){
        return this._vida;
    }
    get ataque(){
        return this._ataque;
    }
    get defensa(){
        return this._defensa;
    }
    get suerte(){
        return this._suerte;
    }
    get renombre() {
        return this._renombre;
    }
    get arma() {
        return this._arma;
    }
    get armadura() {
        return this._armadura;
    }

    //Ahora colocamos los setters para darle propiedades a los objetos de la clase Heroe

    set nombre(a){
        if (typeof a==="string"){
            this._name=a;
        }
    }
    set vida(a){
        if (typeof a==="number"){
            this._vida=a;
        }
    }
    set ataque(a){
        if (typeof a==="number"){
            this._ataque=a;
        }
    }
    set defensa(a){
        if (typeof a==="number"){
            this._defensa=a;
        }
    }
    set suerte(a){
        if (typeof a==="number"){
            this._suerte=a;
        }
    }
    set renombre(a) {
        if (typeof a==="number"){
            this._renombre=a;
        }
    }
    set arma(a) {
       this._arma=a;
    }
    set armadura(a) {
       this._armadura=a;
    }

    recoger_arma(arma) {
        if (this.arma==="No") {
            console.log(this.nombre + ": Recojo el arma " + arma.nombre);
            this.arma=arma;
            this.ataque+=arma.ataque;
        }
        else {
            console.log("No tengo espacio para otro arma.")
        }

    }

    recoger_armadura(armadura) {
        if (this.arma==="No") {
            console.log(this.nombre + ": Recojo la armadura " + armadura.nombre);
            this.armadura=armadura;
            this.defensa+=arma.armadura;
        }
        else {
            console.log("No tengo espacio para otra armadura.")
        }

    }
    ataca(target) {
        var conseguido = false
        if (target.defensa<this.ataque){
            target.vida-=(this.ataque-target.defensa);
            conseguido = true;
        }
        else {
            this.vida-=target._defensa-this.ataque;
        }
        return conseguido;

        // Esta parte está pendiente de tests

        if (this.arma!=="No") {
            this.arma.durabilidad-=1;
        }
        if (target.armadura!=="No") {
            target.armadura.durabilidad-=1;
        }
    }
    saludar(interlocutor) {
        this.renombre++;
        interlocutor.renombre++;
    }
}

class Luchador extends Heroe {
    constructor(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura, Fuerza, Mana) {
        super(Nombre, Vida, Ataque, Defensa, Suerte, Renombre, Arma, Armadura);
        this.fuerza = Fuerza;
        this.mana = Mana;
    }
    ataque_cargado(target) {
        if (this.mana>=40) {
            target.vida -= (this.ataque + this.fuerza);
            console.log("----" + this.nombre + " ataque cargado a " + target.nombre + "----");
            console.log(this._nombre + ": " + target._nombre + ", ahora tu vida es " + target._vida);
        }
        else {
            console.log("No tengo maná suficiente. Necesito 40");
        }

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

/*
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

 */

//Ya creadas las clases, demos funcionalidad a la página

// Nos va a ser útil una función que nos dé un número aleatorio
// entre dos dados. La escribimos aquí

function random(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Aquí creamos el evento de guardar un personaje. Añadimos el evento al dar click
//al boton con id #btn_guardar que llama a la funcion crear

var create_btn = document.getElementById("btn_guardar");

var personajes_plaza=[];

var personaje=null;

var atributos = ['Clase', 'Nombre', 'Vida', 'Ataque', 'Defensa', 'Suerte', 'Renombre', 'Arma',
    'Armadura', 'Inteligencia', 'Fuerza', 'Mana', 'Fotico', 'Ataque', 'Saludo', 'Interacci&oacute;n'];

var historico = document.getElementById('historial');

create_btn.addEventListener("click", function crear() {
    let nombre = document.getElementById("pj_nombre").value;
    let clase = document.getElementById("elegir_clase").value;

    let table_pj = document.getElementById("pj_stats");

    personaje=create_pj(nombre, clase);

    var fila = table_pj.insertRow();
    for (let i = 1; i <=16 ; i++) {
        let celda = fila.insertCell();
        celda.innerHTML = atributos[i-1];
        celda.classList.add('titulo_personaje');
    }
    add_pj_tabla(personaje, table_pj, 'principal');
    document.querySelector("#pj_init").innerHTML = '';
});

let plaza_btn = document.getElementById("btn_plaza");

plaza_btn.addEventListener("click", abrir_plaza);

function create_pj(nombre, clase) {
    let pj=null;
    switch (clase) {
        case '1':
            pj = new Luchador(nombre, random(900, 1100), random(50, 60),
                random(50, 60), random(10, 20), random(30, 45), "No", "No", random(30, 40), random(90, 110));
            break;
        case '2':
            pj = new Mago(nombre, random(400, 500), random(60, 70), random(20, 30), random(15, 25), random(10, 20),
                "No", "No", random(70, 90), random(90, 110));
            break;
        case '3':
            pj = new Arquero(nombre, random(400, 500), random(60, 70), random(20, 30), random(15, 25), random(10, 20),
                "No", "No", random(90, 110));
            break;
        case '4':
            pj = new Clerigo(nombre, random(400, 500), random(10, 20), random(10, 20), random(15, 25), random(40, 50),
                "No", "No", random(30, 40), random(90, 110));
            break;
        case '5':
            pj = new Ladron(nombre, random(400, 500), random(20, 30), random(20, 30), random(15, 25), random(0, 5),
                "No", "No");
            break;
    }
    return pj;
}

function abrir_plaza() {
    let nombre = document.getElementById("pj_plaza_nombre").value;
    let clase = document.getElementById("elegir_clase_plaza").value;
    let pj_plaza = create_pj(nombre, clase);
    personajes_plaza.push(pj_plaza);

    actualizar_pj_plaza();
}

function actualizar_pj_plaza() {
    var plaza = document.getElementById("plaza");
    plaza.innerHTML = "";

    var fila = plaza.insertRow();
    for (let i = 1; i <=16 ; i++) {
        let celda1 = fila.insertCell();
        celda1.innerHTML = atributos[i-1];
        celda1.classList.add('titulo_plaza');
    }

    for (let i in personajes_plaza) {
        let pj = personajes_plaza[i];
        add_pj_tabla(pj, plaza, i);
    }
}

function add_historico(mensaje) {
    let li = document.createElement('LI');
    var t = document.createTextNode(mensaje);
    li.appendChild(t);
    historico.appendChild(li);
}

function saludar(e) {
    let fila = e.target.parentNode.parentNode;
    let celda = fila.insertCell();

    let id_boton = e.target.id;
    let id_boton_array = id_boton.split("_");
    let num_fila = id_boton_array[2];
    //let nombre_pj = fila.childNodes[1].innerHTML;

    personaje.saludar(personajes_plaza[num_fila]);
    celda.classList.add("saludo");
    let a = personaje.nombre+": Hola, "+personajes_plaza[num_fila].nombre;
    celda.innerHTML = a;
    add_historico(a);

    setTimeout(actualizar_pj_plaza, 3000);

}

function pelear(e) {
    let fila = e.target.parentNode.parentNode;
    let celda = fila.insertCell();


    let id_boton = e.target.id;
    let id_boton_array = id_boton.split("_");
    let num_fila = id_boton_array[2];

    let conseguido = personaje.ataca(personajes_plaza[num_fila]);
    celda.classList.add("ataque");

    let a = personaje.nombre + ' intenta atacar a '+ personajes_plaza[num_fila].nombre;
    add_historico(a);

    if (conseguido) {
        let a = personaje.nombre + ": Muere, " + personajes_plaza[num_fila].nombre;
        celda.innerHTML = a;
        add_historico(a);
    }
    else {
        let a = personajes_plaza[num_fila].nombre + ': ' + personaje.nombre + ', maldito torpe...';
        celda.innerHTML = a;
        add_historico(a);
    }

    setTimeout(actualizar_pj_plaza, 3000);
}

function add_pj_tabla(pj,tabla_de_pj, lugar) {


    let pj_array = Object.values(pj);

    let fila = tabla_de_pj.insertRow();
    let celda = fila.insertCell();
    celda.classList.add("nombre_clase");
    let clase = pj.constructor.name;
    celda.innerHTML = clase;
    celda.classList.add('titulo_clase');

    console.log(clase);
    switch (clase) {
        case 'Luchador' :
            for (let j =0; j<=7; j++) {

                var celdad = fila.insertCell();
                celdad.title = atributos[j+1];
                celdad.innerHTML = pj_array[j];
            }
            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene inteligencia';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = atributos[11];
            celdad.innerHTML = pj_array[8];

            var celdad = fila.insertCell();
            celdad.title = atributos[12];
            celdad.innerHTML = pj_array[9];

            var celdad = fila.insertCell();
            celdad.title = 'Luchador';
            celdad.innerHTML = '<img src=\'img/guerrero.jpg\' alt=\'Guerrero\' height=50px>';
            break;

        case 'Mago' :
            for (let j =0; j<=7; j++) {

                var celdad = fila.insertCell();
                celdad.title = atributos[j+1];
                celdad.innerHTML = pj_array[j];
            }
            var celdad = fila.insertCell();
            celdad.title = atributos[10];
            celdad.innerHTML = pj_array[8];

            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene fuerza';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = atributos[11];
            celdad.innerHTML = pj_array[9];

            var celdad = fila.insertCell();
            celdad.title = 'Mago';
            celdad.innerHTML = '<img src=\'img/mago.jpg\' alt=\'Mago\' height=50px>';
            break;

        case 'Arquero' :
            for (let j =0; j<=7; j++) {

                var celdad = fila.insertCell();
                celdad.title = atributos[j+1];
                celdad.innerHTML = pj_array[j];
            }
            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene inteligencia';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene fuerza';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = atributos[11];
            celdad.innerHTML = pj_array[8];

            var celdad = fila.insertCell();
            celdad.title = 'Arquero';
            celdad.innerHTML = '<img src=\'img/arquero.jpg\' alt=\'Arquero\' height=50px>';
            break;

        case 'Clerigo' :
            for (let j =0; j<=7; j++) {

                var celdad = fila.insertCell();
                celdad.title = atributos[j+1];
                celdad.innerHTML = pj_array[j];
            }
            var celdad = fila.insertCell();
            celdad.title = atributos[10];
            celdad.innerHTML = pj_array[8];

            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene fuerza';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = atributos[11];
            celdad.innerHTML = pj_array[9];

            var celdad = fila.insertCell();
            celdad.title = 'Cl&eacute;rigo';
            celdad.innerHTML = '<img src=\'img/clerigo.jpg\' alt=\'Cl&eacute;rigo\' height=50px>';
            break;

        case 'Ladron' :
            for (let j =0; j<=7; j++) {

                var celdad = fila.insertCell();
                celdad.title = atributos[j+1];
                celdad.innerHTML = pj_array[j];
            }
            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene inteligencia';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene fuerza';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = 'Este personaje no tiene man&aacute;';
            celdad.innerHTML = '-';

            var celdad = fila.insertCell();
            celdad.title = 'Ladr&oacute;n';
            celdad.innerHTML = '<img src=\'img/ladron.jpg\' alt=\'ladr&oacute;n\' height=50px>';
            break;
    }

    if (lugar!=='') {
        var celda_pelea = fila.insertCell();
        var link_pelea = document.createElement("button");
        link_pelea.id = "btn_pelea_"+lugar;
        link_pelea.addEventListener("click", pelear);
        link_pelea.classList.add("pelea");
        link_pelea.innerHTML = "Pelear";
        celda_pelea.appendChild(link_pelea);

        var celda_saludo = fila.insertCell();
        var link_saludo = document.createElement("button");
        link_saludo.id = "btn_saludo_"+lugar;
        link_saludo.addEventListener("click", saludar);
        link_saludo.classList.add("saludo");
        link_saludo.innerHTML = "Saludar";
        celda_saludo.appendChild(link_saludo);
    }

}