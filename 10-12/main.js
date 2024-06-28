function calculateExpression(a, b, c) {
    const numerator = Math.sqrt(2 * b + 1);
    const denominator = Math.abs(a - b) - 5 * (Math.pow(c, 2) + Math.PI);

    if (denominator === 0) {
        document.write("Знаменатель равен нулю. Невозможно выполнить деление.");
        return null;
    }

    const result = numerator / denominator;
    return result;
}

const a = 10; 
const b = 5; 
const c = 2; 

const expressionResult = calculateExpression(a, b, c);
if (expressionResult !== null) {
    document.write("<p>Результат выражения"+ expressionResult +"</p>");
}
