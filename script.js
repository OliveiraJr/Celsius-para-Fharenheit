const inputCelsius = document.getElementById('celsius')
const inputFahrenheit = document.getElementById('fahrenheit')

const buttonCelsiusParaFahrenheit = document.getElementById('celsiusParaFahrenheit')
const buttonFahrenheitParaCelsius = document.getElementById('fahrenheitParaCelsius')

const resultado = document.getElementById('resultado')


function converterCelsiusFahrenheit() {
    // Adicionar temperatuda no input
    // Clicar no botão "converter"
    // Deve exibir em tela o resultado da conversão
    const celsius = inputCelsius.value

    if (celsius != '') {
        const valorConvertido = (celsius * 9 / 5) + 32

        const valorFormatado = Number.isInteger(valorConvertido) ? valorConvertido : valorConvertido.toFixed(3)

        resultado.textContent = `${celsius} °C são ${valorFormatado} °F`
    } else {
        alert('Coloque um Valor Válido!')
    }
    //F = (C * 9/5) + 32
}

function converterFahrenheitCelsius() {

    const fahrenheit = inputFahrenheit.value

    if (fahrenheit != '') {
        const valorConvertido = (fahrenheit - 32) * 5 / 9

        const valorFormatado = Number.isInteger(valorConvertido) ? valorConvertido : valorConvertido.toFixed(3)

        resultado.textContent = `${fahrenheit} °F são ${valorFormatado} °C`
    } else {
        alert('Coloque um Valor Válido!')
    }
    // C = (F - 32) * 5/9
}
