
// importa os bibliotecas necessários
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

// constantes para configurações
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// habilita ou desabilita a inserção de dados no banco de dados
const HABILITAR_OPERACAO_INSERIR = true;

// função para comunicação serial
const serial = async (
    ValoresSensorTemperatura,
    valoresSensorDigital,
) => {

    // conexão com o banco de dados MySQL
    let poolBancoDados = mysql.createPool(
        {
            // host: '127.0.0.1',
            // user: 'aluno',
            // password: 'Sptech#2024',
            // database: 'BeeAware',
            // port: 3307
            host: '127.0.0.1',
            user: 'coordenador',
            password: 'Urubu100@',
            database: 'beeaware',
            port: 3306
        }
    ).promise();

    // lista as portas seriais disponíveis e procura pelo Arduino
    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }

    // configura a porta serial com o baud rate especificado
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );

    // evento quando a porta serial é aberta
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });

    // processa os dados recebidos do Arduino
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        console.log(data);
        const valores = data.split(';');
        // const sensorDigital = parseInt(valores[0]);
        const sensorAnalogico1 = parseFloat(valores[0]);
        const sensorAnalogico2 = parseFloat(valores[1]);
        const sensorAnalogico3 = parseFloat(valores[2]);

        // armazena os valores dos sensores nos arrays correspondentes
        ValoresSensorTemperatura.push(sensorAnalogico1);
        ValoresSensorTemperatura.push(sensorAnalogico2);
        ValoresSensorTemperatura.push(sensorAnalogico3);
        // valoresSensorDigital.push(sensorDigital);

        // insere os dados no banco de dados (se habilitado)
        if (HABILITAR_OPERACAO_INSERIR) {

            // este insert irá inserir os dados na tabela "medida"
            await poolBancoDados.execute(
                'INSERT INTO leitura (temperatura, dtLeitura, fkSensor) VALUES (?, current_time(), 1)',
                [sensorAnalogico1]
            );
            console.log("valores inseridos no banco: ", sensorAnalogico1);
            
            await poolBancoDados.execute(
                'INSERT INTO leitura (temperatura, dtLeitura, fkSensor) VALUES (?, current_time(), 2)',
                [sensorAnalogico2]
            );
            console.log("valores inseridos no banco: ", sensorAnalogico2);

            await poolBancoDados.execute(
                'INSERT INTO leitura (temperatura, dtLeitura, fkSensor) VALUES (?, current_time(), 3)',
                [sensorAnalogico3]
            );
            console.log("valores inseridos no banco: ", sensorAnalogico3);
            
            
             if(true){

                

             }   


            if(sensorAnalogico1 > 39 || sensorAnalogico1 < 20 ){ 
            var resposta = await poolBancoDados.execute(
                "select * from leitura where fkSensor = 1 order by idLeitura desc limit 1;"
            )

                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 1, 3, current_time())`
            );
            }else if(sensorAnalogico1 > 36 || sensorAnalogico1 < 32){
                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 1, 2, current_time())`
            );
            }else{
                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 1, 1, current_time())`
            );
            }
            
            if(sensorAnalogico2 > 39 || sensorAnalogico2 < 20 ){ 

                var resposta = await poolBancoDados.execute(
                "select * from leitura where fkSensor = 2 order by idLeitura desc limit 1;"
                )

                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 2, 3, current_time())`
            );
            }else if(sensorAnalogico2 > 36 || sensorAnalogico2 < 32){
                await poolBancoDados.execute(
                    `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 2, 2, current_time())`
            );
            }else{
                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 2, 1, current_time())`
            );
            }

           

            if(sensorAnalogico3 > 39 || sensorAnalogico3 < 20 ){ 

                var resposta = await poolBancoDados.execute(
                "select * from leitura where fkSensor = 3 order by idLeitura desc limit 1;"
                )

                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 3, 3, current_time())`
                
                
            );
            }else if(sensorAnalogico3 > 36 || sensorAnalogico3 < 32){
                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 3, 2, current_time())`
            );
                

            }else{
                await poolBancoDados.execute(
                `INSERT INTO recomendacaoLeitura (fkLeitura, fkSensor, fkRecomendacao, dtRecomendacao) VALUES ( ${resposta[0].idLeitura}, 3, 1, current_time())`

            );
            }
            
            // 19 menos -cuidado
            // 31 a 20  - atenção
            // 32 a 36  - ideal
            // 37 a 39  - atenção
            // 40 mais  - Cuidado 
            

        }

    });

    // evento para lidar com erros na comunicação serial
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}

// função para criar e configurar o servidor web
const servidor = (
    ValoresSensorTemperatura,
    valoresSensorDigital
) => {
    const app = express();

    // configurações de requisição e resposta
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    // inicia o servidor na porta especificada
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    // define os endpoints da API para cada tipo de sensor
    app.get('/sensores/analogico', (_, response) => {
        return response.json(ValoresSensorTemperatura);
    });
    app.get('/sensores/digital', (_, response) => {
        return response.json(valoresSensorDigital);
    });
}

// função principal assíncrona para iniciar a comunicação serial e o servidor web
(async () => {
    // arrays para armazenar os valores dos sensores
    const ValoresSensorTemperatura = [];
    // const valoresSensorDigital = [];

    // inicia a comunicação serial
    await serial(
        ValoresSensorTemperatura,
        // valoresSensorDigital
    );

    // inicia o servidor web
    servidor(
        ValoresSensorTemperatura,
        // valoresSensorDigital
    );
})();