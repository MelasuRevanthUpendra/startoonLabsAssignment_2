let piechart=document.getElementById("piechart");
let inputValue=360;
let maxValue=360;
piechart.style.backgroundImage="conic-gradient(#6EA3F2 0 "+inputValue+"deg,#E4EBF5 0 "+maxValue+"deg)";

function inputChange(){
    let input=Number(document.getElementById("inputValueElement").value);
    console.log(input);
    let max=Number(document.getElementById("inputMaxValueElement").value);
    console.log(max);
    if(input<max){
        let factor=(input/max);
        let inputValue=360*factor;
        let maxValue=360;
        piechart.style.backgroundImage="conic-gradient(#6EA3F2 0 "+inputValue+"deg,#E4EBF5 0 "+maxValue+"deg)";
    }
    else{
        alert("Enter value less than max value");
    }
    
}
