//importando una clase
import {Cliente} from './cliente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import{CuentaCorriente} from './Cuentas/cuentaCorriente.js';
import {Cuenta} from "./Cuentas/Cuenta.js";
import {CuentaNomina} from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';

const cliente =new Cliente('Leonardo','1242412','123445');
const cliente2 =new Cliente('Maria', '1242512', '321414');

const empleado =new Empleado('Juan Perez', '831297213', 2000);
const gerente = new Gerente('Pedro Rivas', '2312323132',17000);
const director = new Director('Elena Moreno', '873218212', 150000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());