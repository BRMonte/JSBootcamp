let day = 3;

if (day === 1) {
  console.log('LUNEDI/LUNDI/LUNES');
}
else if (day === 2) {
  console.log('MARTEDI/MARDI/MARTES');
}
else if (day === 3) {
  console.log('MERCREDI/MERCOLEDI/MIERCOLES');
}
else if (day === 4) {
  console.log('GIOVEDI/JEUDI/JUEVES');
}
else if (day === 5) {
  console.log('VENERDI/VENDREDI/VIERNES');
}
else if (day === 6) {
  console.log('SABATO/SAMEDI/SABADO');
}
else if (day === 7) {
  console.log('DOMENICA/DIMANCHE/DOMINGO');
}
else {
  console.log('INVALID DAY');
}
//////////////////////////////////////////////////////

switch (day) {
  case 1:
    console.log('LUNEDI/LUNDI/LUNES');
    break;
  case 2:
    console.log('MARTEDI/MARDI/MARTES');
    break;
  case 3:
    console.log('MERCREDI/MERCOLEDI/MIERCOLES');
    break;
  case 4:
    console.log('GIOVEDI/JEUDI/JUEVES');
    break;
  case 5:
    console.log('VENERDI/VENDREDI/VIERNES');
    break;
  case 6:
    console.log('SABATO/SAMEDI/SABADO');
    break;
  case 7:
    console.log('DOMENICA/DIMANCHE/DOMINGO');
    break;
  default:
    console.log('INVALID DAY');
}
