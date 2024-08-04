interface ExperienceAttributes {
  companyName: String;
  location: String;
  position: String;
  explonation: String;
  time: String;
}

const Experience = ({
  companyName,
  location,
  position,
  explonation,
  time,
}: ExperienceAttributes) => {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <div className="w-full md:w-1/2 flex">
        <div className="flex flex-col rounded-sm border border-slate-300 w-full px-5 py-3 gap-2">
          <h1 className="text-start font-4">
            {companyName} - {location}
          </h1>
          <p className="text-start font-4 text-sm text-slate-500">{position}</p>
          <p className="text-start font-4">{explonation}</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="h-1/2 bg-slate-300" style={{ width: "1px" }} />
        <div className="text-slate-300 text-base">+</div>
        <div className="h-1/2 bg-slate-300" style={{ width: "1px" }} />
      </div>
      <div className="hidden md:flex justify-start items-center w-1/2 font-4">
        <h1>{time}</h1>
      </div>
    </div>
  );
};

const ReverseExperience = ({
  companyName,
  location,
  position,
  explonation,
  time,
}: ExperienceAttributes) => {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <div className="hidden md:flex justify-end items-center w-1/2 font-4">
        <h1>{time}</h1>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="h-1/2 bg-slate-300" style={{ width: "1px" }} />
        <div className="text-slate-300 text-base">+</div>
        <div className="h-1/2 bg-slate-300" style={{ width: "1px" }} />
      </div>
      <div className="w-full md:w-1/2 flex">
        <div className="flex flex-col rounded-sm border border-slate-300 w-full px-5 py-3 gap-2">
          <h1 className="text-start font-4">
            {companyName} - {location}
          </h1>
          <p className="text-start font-4 text-sm text-slate-500">{position}</p>
          <p className="text-start font-4">{explonation}</p>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div className="w-full font-4 text-center" id="projects">
      <div
        className="flex flex-col justify-center gap-5"
        style={{ padding: "60px 20% 20px 20%" }}
        id="experiences"
      >
        <h1 className="font-1 text-2xl text-center">#Experiences</h1>
        <div className="flex flex-col justify-center gap-5 md:gap-0">
          <Experience
            companyName="Onay Yazılım"
            location="Adana/Turkey"
            position="Full Stack Developer"
            explonation="I developed two different mobile applications from scratch using Flutter and NodeJS. I am
currently working on a web application using React and NodeJS with a small team"
            time="November 2023 - Present"
          />
          <div
            className="hidden md:flex h-14 bg-slate-300 self-center"
            style={{ width: "1px" }}
          />
          <ReverseExperience
            companyName="Arnios"
            location="Mersin/Turkey"
            position="Full Stack Developer"
            explonation="I participated to development of a web application called Arazim Cebimde. I developed this
web application Using Angular and NodeJs"
            time="March 2023 - June 2023"
          />
          <div
            className="hidden md:flex h-14 bg-slate-300 self-center"
            style={{ width: "1px" }}
          />
          <Experience
            companyName="Hemengeliriz"
            location="Mersin/Turkey"
            position="Full Stack Developer"
            explonation="I did a voluntary internship here when I was in my third year of university. I participated to
development of a web application called hemengeliriz. I used PHP Laravel in this internship"
            time="March 2022 - October 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
