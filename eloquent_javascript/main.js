// ========== CHAPTER 1: Values, Types and Operators ==========

// TASK 01

// Треугольник в цикле
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = '#'; i.length < 8; i += '#') {
    console.log(i);
}