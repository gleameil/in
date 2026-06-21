import { describe, it, expect, beforeEach } from 'vitest';
import { makeLinearGradient, makeCoordinateStringVH, makeCoordinateStringVW, createDivWithElements, createButtonWithText, setBackground } from '../../src/shared/helpers';

describe('shared helpers (unit)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('makes a linear gradient string', () => {
    const g = { degrees: 45, color1: 'red', color2: 'blue' } as any;
    expect(makeLinearGradient(g)).toBe('linear-gradient(45deg, red, blue)');
  });

  it('formats coordinate strings', () => {
    expect(makeCoordinateStringVH(10)).toBe('10vh');
    expect(makeCoordinateStringVW(5)).toBe('5vw');
  });

  it('creates a div with elements and classes', () => {
    const child = document.createElement('span');
    child.id = 'child';
    const div = createDivWithElements([child], ['a', 'b'], 'mydiv') as HTMLDivElement;
    expect(div.id).toBe('mydiv');
    expect(div.classList.contains('a')).toBe(true);
    expect(div.querySelector('#child')).not.toBeNull();
  });

  it('creates a button with text', () => {
    const btn = createButtonWithText('hi', ['c'], 'btn1');
    expect(btn.id).toBe('btn1');
    expect(btn.innerText).toBe('hi');
    expect(btn.classList.contains('c')).toBe(true);
  });

  it('setBackground applies styles to provided parent', () => {
    const parent = document.createElement('div');
    parent.id = 'p';
    document.body.append(parent);
    setBackground('pink', undefined, parent, undefined);
    expect(parent.style.backgroundColor).toBe('pink');
  });
});
