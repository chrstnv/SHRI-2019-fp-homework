import { prop, cond, compose, applySpec } from 'ramda';

import { SHAPES } from '../constants';

// Использовать для округления результата
const round = num => Math.round(num * 10) / 10;

/**
 * Функции возвращающие св-ва объекта эквивалент
 *
 * const propShape = obj => obj.shape
 **/
const propShape = prop('shape');
const propHeight = prop('height');
const propDensity = prop('density');
const propSize = prop('size');

/**
 * Промежуточные формулы для расчета, указанные в задании
 */
const G = 9.8;

const momentumFormula = ({ mass, velocity }) => mass * velocity;

const velocityFormula = height => Math.sqrt(2 * G * height);

const massFormula = ({ volume, density }) => volume * density;

const cubeVolumeFormula = n => Math.pow(n, 3);

const sphereVolumeFormula = d => (Math.PI * Math.pow(d, 3)) / 6;

const tetrahedronVolumeFormula = r => (Math.pow(r, 3) * Math.sqrt(2)) / 12;

const eqCube = shape => shape === SHAPES.CUBE;

const eqSphere = shape => shape === SHAPES.SPHERE;

const eqTetrahedron = shape => shape === SHAPES.TETRAHEDRON;

const shapeEqualsCube = compose(
  eqCube,
  propShape
);

const shapeEqualsSphere = compose(
  eqSphere,
  propShape
);

const shapeEqualsTetrahedron = compose(
  eqTetrahedron,
  propShape
);

const calcCubeVolume = compose(
  cubeVolumeFormula,
  propSize
);

const calcSphereVolume = compose(
  sphereVolumeFormula,
  propSize
);

const calcTetrahedronVolume = compose(
  tetrahedronVolumeFormula,
  propSize
);

const calcVolume = cond([
  [shapeEqualsCube, calcCubeVolume],
  [shapeEqualsSphere, calcSphereVolume],
  [shapeEqualsTetrahedron, calcTetrahedronVolume]
]);

const calcVolumeAndDensity = applySpec({
  volume: calcVolume,
  density: propDensity
});

const calcMass = compose(
  massFormula,
  calcVolumeAndDensity
);

const calcVelocity = compose(
  velocityFormula,
  propHeight
);

const calcMassAndVelocity = applySpec({
  mass: calcMass,
  velocity: calcVelocity
});

const computeMomentum = compose(
  round,
  momentumFormula,
  calcMassAndVelocity
);

export default computeMomentum;
