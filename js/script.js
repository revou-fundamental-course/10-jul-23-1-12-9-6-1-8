let button - document.getElementById('btn');

button.addEventListener('click', ()  => {
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value); 
    const result = document.getElementById('output');
    let weight_status=false, height_status=false;
    
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        = document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        = document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }
    
    if(weight_status && height_status){ 
        const bmi (weight / ((height*height)/10000)).toFixed(2);
        
        if(bmi < 18.6){
            result.innerHTML 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerlITML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }});
