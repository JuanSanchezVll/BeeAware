use beeaware;

create table historicoTemperatura(
temperatura float,
historico datetime
);

create table sensorTemperatura(
idSensor int primary key auto_increment,
temperatura float,
historico datetime
);
