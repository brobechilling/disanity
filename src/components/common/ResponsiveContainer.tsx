import React, { useState, useEffect, useRef } from "react";

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  originalHeight: number;
  children: React.ReactNode;
}

export default function ResponsiveContainer({
  originalHeight,
  children,
  className = "",
  style = {},
  ...props
}: ResponsiveContainerProps) {
  const [scale, setScale] = useState(1);
  const nativeDprRef = useRef(1);

  useEffect(() => {
    // Capture the initial device pixel ratio to use as the baseline native DPR.
    nativeDprRef.current = window.devicePixelRatio || 1;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const currentDpr = window.devicePixelRatio || 1;
      
      // Calculate the zoom-invariant width in CSS pixels.
      const unzoomedWidth = (currentWidth * currentDpr) / nativeDprRef.current;
      
      // ONLY scale down when the viewport width is smaller than 1440px.
      // On desktop screens larger than 1440px, the content stays centered at its original 1440px size (scale = 1)
      // while the background image and header/footer backgrounds expand to cover 100% of the viewport width.
      if (unzoomedWidth < 1440) {
        setScale(unzoomedWidth / 1440);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const childrenArray = React.Children.toArray(children);
  const mainBgImage = childrenArray[0];
  const otherChildren = childrenArray.slice(1);

  const outerStyle: React.CSSProperties = {
    width: "100%",
    height: `${originalHeight * scale}px`,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const innerStyle: React.CSSProperties = {
    transform: `scale(${scale})`,
    transformOrigin: "top center",
    width: "1440px",
    height: `${originalHeight}px`,
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: "-720px",
    zIndex: 2,
    ...style,
  };

  // Parse original height and top from background image className to scale it correctly without squashing/misalignment
  let originalBgHeight = originalHeight;
  let originalBgTop = 0;

  if (React.isValidElement(mainBgImage)) {
    const bgClass = (mainBgImage.props as any).className || "";
    const hMatch = bgClass.match(/h-\[(\d+)px\]/);
    if (hMatch) {
      originalBgHeight = parseInt(hMatch[1], 10);
    }
    const tMatch = bgClass.match(/top-\[(\d+)px\]/);
    if (tMatch) {
      const isNegative = bgClass.includes(`-top-[${tMatch[1]}px]`);
      originalBgTop = parseInt(tMatch[1], 10) * (isNegative ? -1 : 1);
    }
  }

  // Get original styling of background image if any, to preserve opacity, filters, etc.
  const originalBgStyle = React.isValidElement(mainBgImage)
    ? (mainBgImage.props as any).style || {}
    : {};

  return (
    <div style={outerStyle}>
      {/* 1. Main Page Background - Always unscaled horizontally, stretching 100% of viewport, but scaled vertically for coordinate mapping */}
      {React.isValidElement(mainBgImage) && React.cloneElement(
        mainBgImage as React.ReactElement<{ style?: React.CSSProperties }>,
        {
        style: {
          ...originalBgStyle,
          position: "absolute",
          left: 0,
          top: `${originalBgTop * scale}px`,
          width: "100%",
          height: `${originalBgHeight * scale}px`,
          objectFit: "fill",
          maxWidth: "none",
          pointerEvents: "none",
          zIndex: 0,
        }
      })}

      {/* 2. Header Background Red Bar - Always unscaled, covering 100% of the viewport width */}
      <div 
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: `${181 * scale}px`,
          backgroundColor: "#6C0B0B",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 2.5 Green Background Section Segment (Home Page Only) - Always unscaled, covering 100% of viewport width */}
      {originalHeight === 6940 && (
        <div 
          style={{
            position: "absolute",
            left: 0,
            top: `${2915 * scale}px`,
            width: "100%",
            height: `${1725 * scale}px`,
            overflow: "hidden",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <img
            src="/Image143(1).png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
            alt="Mockup Background Segment"
          />
          <div 
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      {/* 3. Footer Background Red Bar - Always unscaled, covering 100% of the viewport width at the bottom */}
      <div 
        style={{
          position: "absolute",
          left: 0,
          top: `${(originalHeight - 390) * scale}px`,
          width: "100%",
          height: `${390 * scale}px`,
          backgroundColor: "#6C0B0B",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 4. Centered Scaled Content Container - Contains all absolute text, images, and cards */}
      <div
        className={`bg-transparent overflow-hidden ${className}`}
        style={innerStyle}
        {...props}
      >
        {otherChildren}
      </div>
    </div>
  );
}

