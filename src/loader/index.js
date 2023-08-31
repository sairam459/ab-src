import React from "react";
import "./loader.css";

export function ParagraphSkeleton({ lines }) {
  return (
    <div className="skeleton-para">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="skeleton-para-line" />
      ))}
    </div>
  );
}

export function ImageSkeleton() {
  return <div className="skeleton-image" />;
}

export function DefaultSkeleton() {
  return <div className="skeleton" />;
}

export function SkeletonLoader({ children, ready = false, skeleton }) {
  const isValidSkeleton = [ImageSkeleton, ParagraphSkeleton].includes(
    skeleton?.type
  );
  return (
    <>{ready ? children : isValidSkeleton ? skeleton : <DefaultSkeleton />}</>
  );
}
