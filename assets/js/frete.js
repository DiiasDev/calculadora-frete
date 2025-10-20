export class Frete {
    constructor() {

    }

    calculaFrete() {
        try {
            const peso = parseFloat(document.getElementById('peso').value)
            const distancia = parseFloat(document.getElementById('distancia').value)
            const taxaBase = parseFloat(document.getElementById('taxa-base').value)
            const taxaPeso = parseFloat(document.getElementById('taxa-peso').value)
            const taxaDistancia = parseFloat(document.getElementById('taxa-distancia').value)

            const calculo = taxaBase + (peso * taxaPeso) + (distancia * taxaDistancia)

            console.log('Calculo = ', calculo)

            const resultadoDiv = document.getElementById('resultado')
            resultadoDiv.innerHTML = `Valor do frete: R$ ${calculo.toFixed(2)}`

            // Add show class with a small delay for better animation
            setTimeout(() => {
                resultadoDiv.classList.add('show')
            }, 100)

            return calculo
        } catch (error) {
            console.error("Erro ao calcular frete: ", error)
        }
    }
}