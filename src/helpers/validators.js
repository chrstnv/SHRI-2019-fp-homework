/*
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import { replace, length, compose, test, allPass, anyPass, lt, gt, match, equals } from 'ramda';

const replaceNumbers = replace(/[^0-9]/g, '');

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);


const ltThanTwo = x => lt(x, 2);

const ltThanFour = x => lt(x, 4);

const ltThanFive = x => lt(x, 5);

const ltThanEight = x => lt(x, 8);

const ltThanTen = x => lt(x, 10);


const gtThanOne = x => gt(x, 1);

const gtThanTwo = x => gt(x, 2);

const gtThanThree = x => gt(x, 3);

const gtThanFour= x => gt(x, 4);

const gtThanFive = x => gt(x, 5);

const gtThanEight = x => gt(x, 8);


const eqZero = x => equals(x, 0);

const eqOne = x => equals(x, 1);


/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */

const numCountGtThanOne = compose(gtThanOne, getNumbersCount);

const numCountGtThanTwo = compose(gtThanTwo, getNumbersCount);

const numCountGtThanThree = compose(gtThanThree, getNumbersCount);

const numCountGtThanFour = compose(gtThanFour, getNumbersCount);

const numCountLtThanTwo = compose(ltThanTwo, getNumbersCount);

const numCountLtThanFive = compose(ltThanFive, getNumbersCount);


/**
 * Функции для проверки выполнения условий с длиной строки
 */

const strLengthLtThanFour = compose(ltThanFour, length);

const strLengthLtThanFive = compose(ltThanFive, length);

const strLengthLtThanEight = compose(ltThanEight, length);

const strLengthLtThanTen = compose(ltThanTen, length);

const strLengthGtThanFive = compose(gtThanFive, length);

const strLengthGtThanEight = compose(gtThanEight, length);


/**
 * Функции для проверки наличия конкретного символа в строке
 */

const getNumFour = str => match(/[4]/g, str);

const getNumSeven = str => match(/[7]/g, str);

const strHasOneNumFour = compose(eqOne, length, getNumFour);

const strHasOneNumSeven = compose(eqOne, length, getNumSeven);

const strHasNoNumFour = compose(eqZero, length, getNumFour);


// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = allPass([strLengthLtThanFive, numCountGtThanTwo]);

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = allPass([strLengthLtThanFive, numCountLtThanTwo]);

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = anyPass([strLengthGtThanFive, numCountGtThanOne]);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = allPass([strLengthLtThanTen, numCountGtThanTwo, strHasOneNumFour]);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = allPass([strLengthLtThanTen, numCountGtThanOne, strHasNoNumFour]);

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = anyPass([strLengthGtThanFive, strHasOneNumSeven]);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = allPass([strLengthGtThanEight, numCountGtThanThree, containsOnlyEng]);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = anyPass([numCountLtThanFive, containsOnlyEng, strHasOneNumSeven]);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = allPass([strLengthLtThanEight, numCountGtThanFour, containsOnlyEng]);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = anyPass([strLengthLtThanFour, numCountGtThanTwo, containsOnlyEng]);
