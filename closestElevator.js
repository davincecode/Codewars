const elevator = (left, right, call) =>
  Math.abs(left - call) < Math.abs(right - call) ? "left" : "right";
