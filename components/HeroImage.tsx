import React, { useState } from "react";
import Image from "next/image";
import dashImage from "../public/dash.jpg";

export const HeroImage = ({
  className,
  scrollOpacityEnabled,
}: {
  className: string;
  scrollOpacityEnabled?: boolean;
}) => {
  const [opacity, setOpacity] = useState(1);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const opacityResult = 1 - (winScroll + -30) / 120;
    const opacity = Math.max(0, Math.min(1, opacityResult));
    setOpacity(opacity);
  };

  React.useEffect(() => {
    if (scrollOpacityEnabled) {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    } else {
      window.removeEventListener("scroll", listenToScroll);
    }
  }, [scrollOpacityEnabled]);

  return (
    <div className={className}>
      <div className="h-full w-full overflow-hidden">
        <Image
          style={{ opacity }}
          className="h-full animate-fade-in object-cover object-[50%_68%]"
          src={dashImage}
          alt="Sabrina Satti Dog Photgraphy - photo of Dash the Corgi in Central Park, New York"
          priority
        />
      </div>
    </div>
  );
};
