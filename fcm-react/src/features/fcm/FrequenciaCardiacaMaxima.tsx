import React from "react";

function FrequenciaCardiacaMaxima() {

    const [nome, setNome] = React.useState("");
    const [idade, setIdade] = React.useState(0);

    const isIdadeValida = () => {
        return (idade) && idade > 0;
    };
    const maxima = () => {
        return isIdadeValida() ? 220 - idade : 0;
    };
    const condicionamento = () => {
        return isIdadeValida() ? (220 - idade) * 0.80 : 0;
    };

    const queima = () => {
        return isIdadeValida() ? (220 - idade) * 0.65 : 0;
    };
    const textoMotivacional = () => {
        let texto = "";
        if (isIdadeValida()) {
            if (idade < 20) {
                texto = " você tem a juventude à sua disposição!";
            } else if (idade < 40) {
                texto = " bora manter a atividade porque temos muito a perder!";
            } else if (idade < 60) {
                texto = " chegamos num ponto onde não temos mais escolha! Pratique atividade física!";
            } else if (idade < 80) {
                texto = " ainda dá tempo de tentar esticar um pouco a qualidade de vida, vamos nos exercitar!";
            } else if (idade < 100) {
                texto = " espero que tenha feito algo por você nesse tempo!";
            } else if (idade < 150) {
                texto = " ainda por aqui?!!?";
            } else {
                texto = " tá de brincadeira né?";
            }
            texto = `${nome}, ${texto}`;
        }
        return texto;
    }

    let configureValue = function (event: any, consume: (value: any) => void) {
        let toValue = event?.target?.value;
        consume(toValue);
    };

    const handleChangeNome = (event: any) => {
        configureValue(event, setNome);
    };

    const handleChangeIdade = (event: any) => {
        configureValue(event, setIdade)
    };

    return (
        <div>
            <div className="container mt-3">
                <div className="card mb-3">
                    <div className="card-header">
                        Cálculo da Freqüencia Cardíaca Máxima
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" value={nome} onChange={handleChangeNome} id="nome"
                                           className="form-control"></input>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="idade">Idade</label>
                                    <input type="number" value={idade} onChange={handleChangeIdade} id="idade"
                                           className="form-control"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" container">
                <div className="card">
                    <div className="card-header">
                        Olá {nome}. A seguir estão suas faixas de freqüencia cardíaca por objetivo.
                    </div>
                    <div className="card-body">
                        <p>Máxima: {maxima()}</p>
                        <p>Condicionamento: {condicionamento()}</p>
                        <p>Queima de Gordura: {queima()}</p>
                    </div>
                    <div className="card-footer min-h-50">
                        <span id="spanText">{textoMotivacional()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrequenciaCardiacaMaxima;