// Declaração e atribuição de variaveis
const int PINO_SENSOR_TEMPERATURA = A0;
float temperaturaCelsius1;
float temperaturaCelsius2;
float temperaturaCelsius3;
int numeroAleatorio;
void setup() {
  Serial.begin(9600);
  randomSeed(analogRead(0));
}

void loop() {
  numeroAleatorio = random(1, 11);
  int valorLeitura = analogRead(PINO_SENSOR_TEMPERATURA); //A0
  temperaturaCelsius1 = ((valorLeitura * 5.0 / 1023.0) / 0.01) + numeroAleatorio;
  temperaturaCelsius2 = ((valorLeitura * 5.0 / 1023.0) / 0.01) + numeroAleatorio;
  temperaturaCelsius3 = ((valorLeitura * 5.0 / 1023.0) / 0.01) + numeroAleatorio;
  Serial.print(temperaturaCelsius1);
  Serial.print(";");
  Serial.print(temperaturaCelsius2);
  Serial.print(",");
  Serial.println(temperaturaCelsius3);
  
  delay(2000);
}
