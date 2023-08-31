import React, { useEffect } from "react";
import { ImageSkeleton, ParagraphSkeleton, SkeletonLoader } from "./loader";
import "./card.css";

export function Card({}) {
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 3000);
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        <div className="image-container">
          <SkeletonLoader ready={ready} skeleton={<ImageSkeleton />}>
            <img src="https://picsum.photos/200" alt="random" height={200} width={200}/>
          </SkeletonLoader>
        </div>
        <div className="description-container">
          <SkeletonLoader
            ready={ready}
            skeleton={<ParagraphSkeleton lines={4} />}
          >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </SkeletonLoader>
        </div>
      </div>
    </div>
  );
}
