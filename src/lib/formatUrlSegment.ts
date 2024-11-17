// File: src/lin/formatUrlSegment.ts

export function formatUrlSegment(segment: string) {
  return segment.replace(/-/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
