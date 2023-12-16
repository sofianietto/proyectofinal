

const  boton = document.getElementById("button")

boton.addEventListener("click",  calcular)
let RESP = document.getElementById("respuesta")
const RES = document.getElementById("resultados")
const CONT2 = document.getElementById("contenedor2")
const NOR = document.getElementById('normal')
const SOBRE = document.getElementById('sobrepeso')
const OBE1 = document.getElementById('obesidad')
const OBE2 = document.getElementById('obesidad2')
const BAJO = document.getElementById('bajopeso')
const PI = document.getElementById("pesoideal")
document.getElementById("edadinput").addEventListener("keyup", leerenter)
document.getElementById("alturainput").addEventListener("keyup", leerenter)



function calcular(){
    const EDAD = document.getElementById("edadinput").valueAsNumber
    const ALTURA = document.getElementById("alturainput").valueAsNumber
    const SEXO = document.getElementById("sexo").value
    let kg = [0, 0, 0, 0]
    let imc = [18, 23, 28, 38]
    console.log("Estatura:", ALTURA, "Sexo:", SEXO, "Edad:", EDAD)
    
    if (ALTURA>=35 && ALTURA<=198){
        if(SEXO==="Mujer"){
            imc[0]--
            imc[1]--
            imc[2]--
            imc[3]--
        }
        if(EDAD>=64){
                imc[0] = imc[0]+6
                imc[1] = imc[1]+6
                imc[2] = imc[2]+6
                imc[3] = imc[3]+6
            }else if(EDAD>=54){
                imc[0] = imc[0]+5
                imc[1] = imc[1]+5
                imc[2] = imc[2]+5
                imc[3] = imc[3]+5
            }else if(EDAD>=44){
                imc[0] = imc[0]+4
                imc[1] = imc[1]+4
                imc[2] = imc[2]+4
                imc[3] = imc[3]+4
            }else if(EDAD>=34){
                imc[0] = imc[0]+3
                imc[1] = imc[1]+3
                imc[2] = imc[2]+3
                imc[3] = imc[3]+3
            }else if(EDAD>=24){
                imc[0] = imc[0]+2
                imc[1] = imc[1]+2
                imc[2] = imc[2]+2
                imc[3] = imc[3]+2
            }else if(EDAD>=1){
                imc[0]++
                imc[1]++
                imc[2]++
                imc[3]++
            }else{
                console.log("Por favor ingrese correctamente los datos")
                CONT2.style.display = "block"
                RESP.innerHTML = "Ingrese correctamente los campos";
                RESP.style.backgroundColor="#ffaaaa"
                RESP.style.color = "red"
                RES.style.display = "none"
                return
            }
            kg[0] = (ALTURA/100)*(ALTURA/100)*imc[0]
            kg[1] = (ALTURA/100)*(ALTURA/100)*imc[1]
            kg[2] = (ALTURA/100)*(ALTURA/100)*imc[2]
            kg[3] = (ALTURA/100)*(ALTURA/100)*imc[3]

            RESP.innerHTML = "Estos son tus resultados";
            RESP.style.backgroundColor="#FDFFFC"
            RESP.style.color = "black"
            CONT2.style.display = "block"
            RES.style.display  = "block";
            PI.innerHTML = "Rango de peso ideal es<br>" + kg[0].toFixed(1) + "Kg - " + kg[1].toFixed(1) + "Kg"
            BAJO.innerHTML= kg[0].toFixed(1) + " Kg";
            BAJO.style.display="block";
            NOR.innerHTML= kg[1].toFixed(1) + " Kg";
            NOR.style.display= "block";
            SOBRE.innerHTML= kg[2].toFixed(1) + " Kg";
            SOBRE.style.display="block";
            OBE1.innerHTML= kg[3].toFixed(1) + " Kg";
            OBE1.style.display="block";
            
        }else{
            console.log("ERROR: ingrese todos los campos")
            CONT2.style.display = "block"
                RESP.innerHTML = "Ingrese correctamente los campos";
                RESP.style.backgroundColor="#ffaaaa"
                RESP.style.color = "red"
                RES.style.display = "none"
            return
        }

}
function leerenter(e){
    if(e.key==="Enter"){
        console.log("leerenter")
        calcular()
    }
}
