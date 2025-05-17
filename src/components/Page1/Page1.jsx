import React from "react";
import "./Page1.css";
import musicIcon from '../../assets/music.png';
import controllerIcon from '../../assets/controller.png';
import micIcon from "../../assets/mic.svg";
import fileIcon from "../../assets/film.png";

const features = [
  {
    icon: musicIcon,
    alt: "music",
    className: "child1 child1Icon",
    title: "Music",
    text: "FxSound corrects the limitations of your devices and compressed audio.",
  },
  {
    icon: controllerIcon,
    alt: "controller",
    className: "child2 child2Icon",
    title: "Video Games",
    text: "Surround sound to create full immersion into your virtual world.",
  },
  {
    icon: fileIcon,
    alt: "tv",
    className: "child3 child3Icon",
    title: "Tv and Movies",
    text: "FxSound smooths and improves audio for your favorite shows and movies.",
  },
  {
    icon: micIcon,
    alt: "mic",
    className: "child4 child1Icon",
    title: "Transcription",
    text: "FxSound boosts your clarity to save your sanity. Rewind less, get paid more.",
  },
];

const Page1 = () => {
  return (
    <div className="page1">
      <div className="page1Content">
        <div className="page1Title">
          <h1>Amazing sound for everything you listen to</h1>
        </div>
        <div className="parent1">
          {features.map((feature, idx) => (
            <div className={`child${idx + 1}`} key={idx}>
              <div className={feature.className}>
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className={feature.alt}
                />
              </div>
              <div className={`child${idx + 1}Txt`}>
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

export default Page1;
