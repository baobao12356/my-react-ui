
// 对于贝塞尔曲线之类的可以单独拎出来放到shared的animation.tsx里。
import { keyframes } from "styled-components";

export const easing = {
  rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)",
};

export const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;


export const iconSpin = keyframes`
  0% {
     transform: rotate(0deg);
  }
  100% {
     transform: rotate(360deg);
  }
`;