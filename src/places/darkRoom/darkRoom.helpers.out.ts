import { removeByClassName } from "../../shared/helpers";
import { randomInRange, randomIntegerInRange } from "../../shared/helpers";
import { makeCoordinateStringVH } from "../../shared/helpers";

interface Coordinates {
  fromLeft: number;
  fromTop: number;
  diameter: number;
}

function makeCloudCircle(className: string, { fromLeft, fromTop, diameter }: Coordinates, counter: number, parent: HTMLDivElement) {
  const cloudCircle = document.createElement('div');
  cloudCircle.classList.add(cloudCircleClassName, className, `${counter}`);
  const diameterString = makeCoordinateStringVH(diameter)
  cloudCircle.style.width = diameterString;
  cloudCircle.style.height = diameterString;
  cloudCircle.style.left = makeCoordinateStringVH(fromLeft);
  cloudCircle.style.top = makeCoordinateStringVH(fromTop);
  parent.append(cloudCircle);
}
const cloudCircleClassName = 'cloud-circle';
const cloudCircleClassNameColors = ['light', 'medium', 'dark', 'bg'];

const cloudCount = 2;
const cloudCircleCountMinimum = 3;
const cloudCircleCountMaximum = 9;
const cloudCircleDiameterMinimum = 10;
const cloudCircleDiameterMaximum = 30;

const firstCoordinates = { fromLeft: 60, fromTop: 20, diameter: 20 }

function situateCloud(lastCoordinates: Coordinates): Coordinates {
  const { fromLeft, fromTop, diameter } = lastCoordinates;
  const newDiameter = randomInRange(cloudCircleDiameterMinimum, cloudCircleDiameterMaximum);
  const newFromLeft = randomInRange(fromLeft - diameter, fromLeft + diameter);
  const newFromTop = randomInRange(fromTop - diameter, fromTop + diameter);
  return { fromLeft: newFromLeft, fromTop: newFromTop, diameter: newDiameter };    
}

function makeCloud(className: string, circleCount: number, oldCoordinates: Coordinates, counter: number, parent: HTMLDivElement) {
  if (circleCount === 0) {
    return;
  } else {
    const newCoordinates = situateCloud(oldCoordinates);
    makeCloudCircle(className, newCoordinates, counter, parent);
    makeCloud(className, circleCount - 1, newCoordinates, counter, parent)
  }
}

function makeClouds(counter: number, parent: HTMLDivElement) {
  cloudCircleClassNameColors.forEach(color => {
    for (let i = 0; i < cloudCount; i++) {
      const circleCount = randomIntegerInRange(cloudCircleCountMinimum, cloudCircleCountMaximum)
      makeCloud(color, circleCount, firstCoordinates, counter, parent);
    }
  }); 
}

function removeOldElements(oldCounter: number) {
  removeByClassName(`${oldCounter}`);
}

export function move(counter: number, parent: HTMLDivElement, isVerna: boolean = false) {
  const oldCounter = counter + 1;
  setTimeout(() => removeOldElements(oldCounter), 2000);
  if (counter === 0) {
    return;
  }
  makeClouds(counter, parent);
  setTimeout(() => move(counter - 1, parent, isVerna), 10000);
}