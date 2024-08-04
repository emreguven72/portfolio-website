import Typewriter from "./AnimatedText";

const HomeSection = () => {
  return (
    <div className="w-full bg-sky-100">
      <div
      className="flex flex-col md:flex-row justify-center gap-10 md:gap-0"
      style={{ padding: "20px 20% 20px 20%" }}
      id="home"
    >
      <div className="flex md:w-1/2 flex-col items-center justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold font-1 text-blue-500">HELLO</h1>
          <Typewriter text="I'M EMRE GUVEN" delay={150} />
          <p className="font-4 text-sm text-slate-500">FULL STACK DEVELOPER</p>
          <p className="font-4 text-base">
            a full stack developer based in Adana/Turkey specializing Mobile
            Development and Web Development
          </p>
          <div></div>
          <div>
            <a href="/Emre_Guven_Resume.pdf" download="Emre_Guven_Resume.pdf" className="rounded-md bg-neutral-700 text-center py-1 px-3 text-white font-4">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end md:w-1/2">
        <img
          src="/images/cv_picture.webp"
          className="rounded-md w-full md:w-4/5"
          alt="cv_picture"
        />
      </div>
    </div>
    </div>
  );
};

export default HomeSection;
