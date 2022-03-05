const celciusSuhu = document.getElementById("celcius");
const fahrenheitSuhu = document.getElementById("fahrenheit");
const kelvinSuhu = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input",function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fahrenheitSuhu.value = (value*1.8) + 32;
                kelvinSuhu.value = value + 273.15;
                break;
            case "fahrenheit":
                celciusSuhu.value = (value - 32) / 1.8;
                kelvinSuhu.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusSuhu.value = value - 273.15;
                fahrenheitSuhu.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
}