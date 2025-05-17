import React from "react";
import "./Page2.css";
import musicIcon from "../../assets/music.png";
import controllerIcon from "../../assets/controller.png";
import micIcon from "../../assets/mic.svg";
import fileIcon from "../../assets/film.png";
import circle from "../../assets/circle.svg";
import circle2 from "../../assets/circle2.svg";
import circle3 from "../../assets/circle3.svg";

const features = [
  {
    icon: musicIcon,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "music",
    className: "child1 child1Icon",
    title: "Music",
    text: "FxSound corrects the limitations of your devices and compressed audio.",
  },
  {
    icon: controllerIcon,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "controller",
    className: "child2 child2Icon",
    title: "Video Games",
    text: "Surround sound to create full immersion into your virtual world.",
  },
  {
    icon: fileIcon,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "tv",
    className: "child3 child3Icon",
    title: "Tv and Movies",
    text: "FxSound smooths and improves audio for your favorite shows and movies.",
  },
  {
    icon: micIcon,
    circle: circle,
    circle2: circle2,
    circle3: circle3,
    alt: "mic",
    className: "child4 child1Icon",
    title: "Transcription",
    text: "FxSound boosts your clarity to save your sanity. Rewind less, get paid more.",
  },
];

const Page2 = () => {
  return (
    <div className="page2">
      <div className="page2Content">
        <div className="page2Title">
          <h1>Amazing sound for everything you listen to</h1>
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

