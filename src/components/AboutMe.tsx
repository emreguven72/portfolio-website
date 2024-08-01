import ProgressBar from "./ProgressBar";

const AboutMe = () => {
  return (
    <div
      className="flex flex-row justify-center"
      style={{ padding: "60px 20% 20px 20%" }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="font-2 text-2xl text-center">#ABOUT ME</h1>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col w-1/2 items-center justify-center">
            <div className="flex flex-col gap-5">
              <p className="font-2 text-base">
                I am a full stack software developer. I graduated from Mersin
                University, Department of Computer Engineering in 2023. I am
                currently working on a small company as a full stack developer
                in Adana. I worked on projects in many different fields such as
                backend development, web development and mobile development. I
                am a person who is always open and eager to learn.
              </p>
              <div className="flex flex-col font-2 text-sm gap-1">
                <p>AGE: 24</p>
                <p>EMAIL: emreguven72@gmail.com</p>
                <p>PHONE NUMBER: +90 551 013 0330</p>
                <p>AGE: 24</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 items-center gap-5">
          <div className="flex flex-col w-full">
              <h1 className="font-2 text-xl">React</h1>
              <ProgressBar finalProgress={85} />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="font-2 text-xl">Java</h1>
              <ProgressBar finalProgress={80} />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="font-2 text-xl">NodeJS</h1>
              <ProgressBar finalProgress={80} />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="font-2 text-xl">Flutter</h1>
              <ProgressBar finalProgress={75} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
