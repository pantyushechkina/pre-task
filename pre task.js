const formData = document.getElementById('form');

function getValue(){

    const fields = document.querySelectorAll('input.data');
    console.log(fields);
    const values = {};

    fields.forEach(field => {
        const {name, value} = field;
        values[name] = value;
    });

    let xhr = new XMLHttpRequest();

    url = "";
    xhr.open("POSt",url,true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(values));
}

formData.addEventListener('submit', getValue);

