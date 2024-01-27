/*
    El tipo de archivo de este archivo es: .mjs
    para importar el style
*/
import "../styles.css";

class Cl_Menor {
  constructor(a) {
    this.atributo = a;
  }

  Metodo(parametro) {
    return parametro;
  }
}

class Cl_Mayor {
  constructor() {
    this.contadorTotalClaseMenor = 0;
    this.acumuladorDeCantidadDeLetras = 0;
  }

  ProcesarMenor(menor) {
    this.acumuladorDeCantidadDeLetras += menor.atributo.length;
    this.contadorTotalClaseMenor++;
  }
}

class App {
  constructor() {
    this.salidaCabecera = document.getElementById("salida_cabecera");
    this.salidaRegistros = document.getElementById("salida_registros");
    this.salidaPie = document.getElementById("salida_pie");
    this.salidaRespuestas = document.getElementById("salida_respuestas");
  }

  TableHead() {
    return `
    <tr>
      <th>atributo</th>
      <th>Metodo( )</th>
    </tr>
    `;
  }

  TableRow(atributo, metodo) {
    return `
    <tr>
      <td>${atributo}</td>
      <td>${metodo}</td>
    </tr>
    `;
  }

  TableFoot(totalPagos) {
    return `
    <tr>
      <th colspan="1">Total letras de los nombre</th>
      <th>${totalPagos}</th>
    </tr>
    `;
  }

  run() {
    let mayor = new Cl_Mayor();
    let menor1 = new Cl_Menor("Nombre", 1);
    let menor2 = new Cl_Menor("Nombre2", 1);

    mayor.ProcesarMenor(menor1);
    mayor.ProcesarMenor(menor2);

    this.salidaCabecera.innerHTML = `
      ${this.TableHead()}
    `;

    this.salidaRegistros.innerHTML = `
      ${this.TableRow(menor1.atributo, menor1.Metodo(":D"))}
      ${this.TableRow(menor2.atributo, menor2.Metodo(":("))}
    `;

    this.salidaPie.innerHTML = `
      ${this.TableFoot(mayor.acumuladorDeCantidadDeLetras)}
    `;

    this.salidaRespuestas.innerHTML = `
      <h3>a) total de registros: ${mayor.contadorTotalClaseMenor} </h3>
    `;
  }
}

new App().run();
