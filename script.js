function display(num){
    output.value+=num;
    }
    
    function clearInput(){
        output.value=""
    }
    
    function calculate(){
        output.value=eval(output.value)
    }
    
    function RemoveLast(){
        currentExp=output.value
        output.value=currentExp.slice(0,-1);
    }
    
    