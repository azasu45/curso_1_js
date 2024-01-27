/*
    El tipo de archivo de este archivo es: .mjs
    para importar
*/
import "../styles.css";

class Cl_Vehiculo {
  constructor(placa, tipoVehiculo) {
    this.placa = placa;
    this.tipoVehiculo = tipoVehiculo;
  }

  Pago() {
    if (this.tipoVehiculo === 1) {
      return 10;
    } else if (this.tipoVehiculo === 2) {
      return 20;
    } else if (this.tipoVehiculo === 3) {
      return 50;
    }
  }
}

class Cl_Peaje {
  constructor() {
    this.acumPagosTotal = 0;
    this.contTipo1 = 0;
    this.contTipo2 = 0;
    this.contTipo3 = 0;
    this.contTotal = 0;
  }
  ProcesarVehiculo(vehiculo) {
    if (vehiculo.tipoVehiculo === 1) {
      this.contTipo1++;
    } else if (vehiculo.tipoVehiculo === 2) {
      this.contTipo2++;
    } else if (vehiculo.tipoVehiculo === 3) {
      this.contTipo3++;
    }
    this.contTotal++;
    this.acumPagosTotal += vehiculo.Pago();
  }

  PorcentajeVehiculoTipo1() {
    return (this.contTipo1 / this.contTotal) * 100;
  }

  PorcentajeVehiculoTipo2() {
    return (this.contTipo2 / this.contTotal) * 100;
  }

  PorcentajeVehiculoTipo3() {
    return (this.contTipo3 / this.contTotal) * 100;
  }

  TotalPagos() {
    return this.acumPagosTotal * 0.4;
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
      <th>Placa</th>
      <th>Tipo de Vehiculo</th>
      <th>Pago( )</th>
    </tr>
    `;
  }

  TableRow(placa, tipoVehiculo, pago) {
    return `
    <tr>
      <td>${placa}</td>
      <td>${tipoVehiculo}</td>
      <td>${pago}</td>
    </tr>
    `;
  }

  TableFoot(totalPagos) {
    return `
    <tr>
      <th colspan="2">Total pagos</th>
      <th>${totalPagos}</th>
    </tr>
    `;
  }

  run() {
    let peaje = new Cl_Peaje();

    let vehiculo1 = new Cl_Vehiculo("111", 1);
    let vehiculo2 = new Cl_Vehiculo("222", 3);
    let vehiculo3 = new Cl_Vehiculo("333", 2);
    let vehiculo4 = new Cl_Vehiculo("444", 1);

    peaje.ProcesarVehiculo(vehiculo1);
    peaje.ProcesarVehiculo(vehiculo2);
    peaje.ProcesarVehiculo(vehiculo3);
    peaje.ProcesarVehiculo(vehiculo4);

    this.salidaCabecera.innerHTML = `
      ${this.TableHead()}
    `;

    this.salidaRegistros.innerHTML = `
      ${this.TableRow(vehiculo1.placa, vehiculo1.tipoVehiculo, vehiculo1.Pago())}
      ${this.TableRow(vehiculo2.placa, vehiculo2.tipoVehiculo, vehiculo2.Pago())}
      ${this.TableRow(vehiculo3.placa, vehiculo3.tipoVehiculo, vehiculo3.Pago())}
      ${this.TableRow(vehiculo4.placa, vehiculo4.tipoVehiculo, vehiculo4.Pago())}
    `;

    this.salidaPie.innerHTML = `
      ${this.TableFoot(peaje.acumPagosTotal)}
    `;

    this.salidaRespuestas.innerHTML = `
    <h3>a) Pocentaje por vehiculo </h3>
    <p>Tipo 1 = ${peaje.PorcentajeVehiculoTipo1()} %</p>
    <p>Tipo 2 = ${peaje.PorcentajeVehiculoTipo2()} %</p>
    <p>Tipo 3 = ${peaje.PorcentajeVehiculoTipo3()} %</p>
    <h3>b) Al peaje le toca el 40% son ${peaje.TotalPagos()}}</h3>
  `;
  }
}

new App().run();
