@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom 3D Transformation Utilities */
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

/* Custom Animation Keyframes */
@keyframes beat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
}

.animate-beat {
  animation: beat 1.5s infinite;
}

/* Gentle bounce definition for the 'For You' button */
@keyframes bounce-gentle {
    0%, 100% {
        transform: translateY(-5%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}

.animate-bounce-gentle {
    animation: bounce-gentle 2s infinite;
}
