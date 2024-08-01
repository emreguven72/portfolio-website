import profileImage from "../images/cv_picture.jpg";
import Typewriter from "./AnimatedText";

const HomeSection = () => {
  return (
    <div
      className="flex flex-row justify-center"
      style={{ padding: "20px 20% 20px 20%" }}
      id="home-section"
    >
      <div className="flex w-1/2 flex-col items-center justify-center">
        <div className="flex flex-col gap-2">
          <Typewriter text="I'M EMRE GUVEN" delay={150} />
          <p className="font-2 text-sm text-slate-500">FULL STACK DEVELOPER</p>
          <p className="font-2 text-base">
            a full stack developer based in Adana/Turkey specializing Mobile
            Development and Web Development
          </p>
          <div></div>
          <div>
            <button className="rounded-md bg-neutral-700 text-center py-1 px-3 text-white font-2">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-1/2">
        <img
          src={profileImage}
          className="rounded-md"
          height="80%"
          width="80%"
        />
      </div>
    </div>
  );
};

export default HomeSection;