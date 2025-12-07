// utils.js
export function getIsMobile() {
    return /iPhone|iPad|Android/i.test(navigator.userAgent);
}

export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

export function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}