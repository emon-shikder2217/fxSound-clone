import React from "react";
import "./Page2.css";
import eq from '../../assets/sliders.svg';
import bars from '../../assets/bars.png';
import presetIcon from '../../assets/list.png';
import speaker from '../../assets/speaker.svg';
import circle from "../../assets/circle.svg";
import circle2 from "../../assets/circle2.svg";
import circle3 from "../../assets/circle3.svg";

const features = [
  {
    icon: eq,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "music",
    className: "child1 child1Icon",
    title: "EQ",
    text: "Balanced your sound with our 9-band EQ with customizable center frequencies.",
  },
  {
    icon: bars,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "controller",
    className: "child2 child2Icon",
    title: "Visualizer",
    text: "Feel your music in a new way. ",
  },
  {
    icon: speaker,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "tv",
    className: "child3 child3Icon",
    title: "Effects",
    text: "Boosted bass and volume that will make your neighbors complain.",
  },
  {
    icon: presetIcon,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "mic",
    className: "child4 child1Icon",
    title: "Presets",
    text: "Presets professionally designed for music, gaming, movies, transcription, and more.",
  },
];

const Page2 = () => {
  return (
    <div className="page2">
      <div className="page2Content">
        <div className="page2Title">
          <h1>Customize your sound to your exact taste</h1>
        </div>
        <div className="parent1">
          {features.map((feature, index) => (
            <div className={`child${index + 1}`} key={index}>
              <div className={feature.className}>
                <img
                  src={feature.circle}
                  className={`circle circle${index + 1}-1`}
                  alt="circle"
                />
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className={feature.alt}
                />
                <img
                  src={feature.circle2}
                  className={`circle2 circle${index + 1}-2`}
                  alt="circle2"
                />
                <img
                  src={feature.circle3}
                  className={`circle3 circle${index + 1}-3`}
                  alt="circle3"
                />
              </div>
              <div className={`child${index + 1}Txt`}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;

