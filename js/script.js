// 1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.

// var number1 = parseInt(prompt(1))
// var number2 = parseInt(prompt(10))

// if(number1 > number2){
//     console.log(`O maior número é: ` + number1);
// }else if(number2 > number1) { 
//     console.log(`O maior número é: ` + number2);

// }else{console.log(`Os número são iguais`);}

// 2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.

// var numero = parseInt(prompt("Digite um numero aqui"))

// if (numero % 2 === 0) {
//     console.log("O número " + numero + " é par.");
// } else {
//     console.log("O número " + numero + " é ímpar.");
// }

// 3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

// var numero = parseInt(prompt("Digite um número:"));

// console.log("Números pares entre 1 e " + numero + ":");

// for (var i = 1; i <= numero; i++) {
//     // Verifica se o número é par
//     if (i % 2 === 0) {
//         console.log(i); // Exibe o número par no console
//     }
// }

// 4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.

// var numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

// console.log("Tabuada do " + numero + ":");

// for (var i = 1; i <= 10; i++) {
//     console.log(numero + " x " + i + " = " + (numero * i));
// }
    

// 5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.

// var numero = parseFloat(prompt("Digite um número:"));

// if (numero > 0) {
//     console.log("O número " + numero + " é positivo.");
// } else if (numero < 0) {
//     console.log("O número " + numero + " é negativo.");
// } else {
//     console.log("O número é igual a zero.");
// }


// 6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

// var letra = prompt("Digite uma letra:").toLowerCase();

// if (letra.length === 1 && /^[a-zA-Z]$/.test(letra)) {
    
//     if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//         console.log("A letra \"" + letra + "\" é uma vogal.");
//     } else {
//         console.log("A letra \"" + letra + "\" é uma consoante.");
//     }
// } else {
//     console.log("Por favor, digite apenas uma letra.");
// }

// 7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.

// var nota = parseFloat(prompt("Digite a nota:"));

// if (nota >= 0 && nota <= 10) {
//     console.log("A nota " + nota + " é válida.");
// } else {
//     console.log("Nota inválida! A nota deve estar entre 0 e 10.");
// }

// 8. Escreva um programa em JavaScript que exiba os números de 1 a 100 no console. Utilize uma estrutura de repetição while, do-while ou for para percorrer os números de 1 a 100 e exibir cada número no console.

// var i = 1;

// for(var i = 1; i <=100; i++){
//     console.log(i);
// }

// var i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }


// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

// let g = 100

// do{
//     console.log(`valor de g:${g}`)
//         g=g-5
// }while(g >= 1)

// let i = 1

// for(let i = 0; 1 <=100; i+=5){
//     console.log(i);
// }

// console.log("Números de 100 À 0 em ordem Decrescente:")

// for(let i = 100; i >=0; i--){
//     console.log(i);
// }

// var i = 100;

// while(i >= 0){
//     console.log(i);
//     i-=3;
// }


// 9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

// var operacao = prompt("Digite a operação matemática que deseja realizar (+, -, *, /):");

// // Solicita o primeiro número
// var numero1 = parseInt(prompt("Digite o primeiro número:"));

// // Solicita o segundo número
// var numero2 = parseInt(prompt("Digite o segundo número:"));

// switch (operacao) {
//     case '+':
//         console.log("Resultado: " + (numero1 + numero2));
//         break;
//     case '-':
//         console.log("Resultado: " + (numero1 - numero2));
//         break;
//     case '*':
//         console.log("Resultado: " + (numero1 * numero2));
//         break;
//     case '/':
     
//     // Verifica se o divisor é zero antes de realizar a divisão
//         if (numero2 !== 0) {
//             console.log("Resultado: " + (numero1 / numero2));
//         } else {
//             console.log("Divisão por zero não é permitida.");
//         }
//         break;
//     default:
//         console.log("Operação inválida.");
//     }

// 10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.

// var numero = parseInt(prompt("Digite um número:"));

// console.log("Números ímpares entre 1 e " + numero + ":");

// for (var i = 1; i <= numero; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// var numero = parseInt(prompt("Digite um número:"));
// var i = 1;

// console.log("Números ímpares entre 1 e " + numero + ":");

// while (i <= numero) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// let n1 = parseInt(prompt(`Digite um número`))
// var nimpar = 0

// while(npar < n1){
//     npar++;
// }if (n1 & 1){
//     console.log(`O número escolhido (${n1}) é impar`)
// }else {
//     console.log(`O numero escolhido (${n1}) é par`)
// }