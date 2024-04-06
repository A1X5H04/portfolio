import { useCallback, useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useTranslation } from "react-i18next";
import { gradientColors, gradientTypes } from "../data/gradients";

function generateRandomTailwindGradients() {
  let randomGradients =
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";
  const randomColor =
    gradientColors[Math.floor(Math.random() * gradientColors.length)];
  const randomType =
    gradientTypes[Math.floor(Math.random() * gradientTypes.length)];
  randomGradients = `${randomType} ${randomColor}`;

  return randomGradients;
}

const headingStyle = {
  filter: "url(#glitch)",
  animationDelay: "700ms",
};

function HeroText() {
  const [index, setIndex] = useState(Math.floor(Math.random() * 8));
  const { t } = useTranslation();

  const generateRandomValues = useCallback((maxValue, numberOfValues) => {
    let randomValues = [];
    for (let i = 0; i < numberOfValues; i++) {
      randomValues.push(Math.floor(Math.random() * maxValue));
    }
    console.log(randomValues);
    return randomValues;
  }, []);

  const headingTextArray = [
    t("home.title.headings.web_designer"),
    t("home.title.headings.react_developer"),
    t("home.title.headings.nextjs_developer"),
    t("home.title.headings.cs_student"),
    t("home.title.headings.android_developer"),
    t("home.title.headings.oss_contributor"),
    t("home.title.headings.linux_enthusiast"),
    t("home.title.headings.frontend_developer"),
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div>
        <TextTransition
          delay={250}
          inline
          springConfig={presets.stiff}
          className="text-center"
        >
          <div
            style={headingStyle}
            className={`${generateRandomTailwindGradients()} bg-clip-text animate-bg-span text-center `}
          >
            <h1 className="font-extrabold sm:inline-flex gap-5 tracking-wider h-full py-2 mb-2 mx-6 lg:text-7xl text-5xl text-transparent font-display ">
              {headingTextArray[index % headingTextArray.length]}
            </h1>
          </div>
        </TextTransition>
      </div>
      <svg className="absolute h-1 w-1 overflow-hidden">
        <defs>
          <filter id="glitch">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0 .3275"
              numOctaves="12"
              result="NOISE"
            >
              <animate
                attributeName="seed"
                dur="20s"
                values="10;20;30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190;200;210;220;230;240;250;260;270;280"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feGaussianBlur
              in="SourceGraphic"
              result="BLURRED"
              stdDeviation="0"
            >
              <animate
                attributeName="stdDeviation"
                dur="0.5s"
                values="5;2.5;0.15"
                repeatCount="1"
              />
            </feGaussianBlur>
            <feDisplacementMap
              id="displacer"
              in2="NOISE"
              in="BLURRED"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="R"
              result="DISPLACED"
            >
              <animate
                attributeName="scale"
                dur="10s"
                values={generateRandomValues(15, 5).join(";").toString()}
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default HeroText;
