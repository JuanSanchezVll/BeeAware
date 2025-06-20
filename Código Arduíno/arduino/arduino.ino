// Declaração e atribuição de variaveis
const int PINO_SENSOR_TEMPERATURA = A0;
float temperaturaCelsius1;
float temperaturaCelsius2;
float temperaturaCelsius3;
float numeroAleatorio;
float numeroAleatorio2;
float numeroAleatorio3;

void setup() {
  Serial.begin(9600);
  randomSeed(analogRead(0));
}

void loop() {
  numeroAleatorio = random(1, 51);
  numeroAleatorio2 = random(1,51);
  numeroAleatorio3 = random(1,51);

  int valorLeitura = analogRead(PINO_SENSOR_TEMPERATURA); //A0

  temperaturaCelsius1 = ((valorLeitura * 5.0 / 1023.0) / 0.01) + 10 + ((numeroAleatorio + numeroAleatorio2) / 10);
  temperaturaCelsius2 = ((valorLeitura * 5.0 / 1023.0) / 0.01) + 10 + ((numeroAleatorio2 + numeroAleatorio3) / 10);
  temperaturaCelsius3 = ((valorLeitura * 5.0 / 1023.0) / 0.01) + 10 + ((numeroAleatorio3 + numeroAleatorio) / 10);
  
  Serial.print(temperaturaCelsius1);
  Serial.print(";");
  Serial.print(temperaturaCelsius2);
  Serial.print(";");
  Serial.println(temperaturaCelsius3);
  
  delay(5000);
}
