interface ProjectCardAttributes {
  link: String;
  title: String;
  body: String;
  image: String;
}

const ProjectCard = ({ link, title, body, image }: ProjectCardAttributes) => {
  return (
    <a
      className="rounded-lg shadow-md bg-gray-100 border border-gray-300 transition-transform scale-100 hover:scale-105 flex flex-col  tex-black"
      style={{ transitionDuration: "400ms" }}
      href={`${link}`}
      target="_blank"
    >
      <div className="flex justify-center items-center w-full rounded-t-lg">
        <img src={`${image}`} className="rounded-t-lg" alt="project-picture"/>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="font-normal text-gray-700">{body}</p>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <div className="w-full bg-sky-100 font-4 text-center" id="projects-section">
      <div
        className="flex flex-col justify-center gap-5"
        style={{ padding: "60px 20% 20px 20%" }}
        id="home-section"
      >
        <h1 className="font-1 text-2xl text-center">#PROJECTS</h1>
        <div className="grid grid-cols-3 gap-5">
          <ProjectCard
            link="https://github.com/emreguven72/portfolio-website"
            title="Portfolio Website"
            body="Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order."
            image="/images/portfolio-website.webp"
          />
          <ProjectCard
            link="https://github.com/emreguven72/Spring-Inventory-Control-System-Backend"
            title="Inventory Control System"
            body="Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order."
            image="/images/inventory-control.webp"
          />
          <ProjectCard
            link="https://github.com/emreguven72/Mobiliz-Backend-Case/tree/main"
            title="Vehicle Authorization System"
            body="Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order."
            image="/images/vehicle-authorization.webp"
          />
          <ProjectCard
            link="https://github.com/emreguven72/React-Authorization-System"
            title="User Authentication and Authorization System"
            body="Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order."
            image="/images/react-authorization.webp"
          />
          <ProjectCard
            link="https://sustechclick.com/"
            title="SustechClick Website"
            body="Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order."
            image="/images/sustech-website.webp"
          />
          <ProjectCard
            link="https://kobidestekcileri.com/"
            title="Kobi Destekçileri Website"
            body="Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order."
            image="/images/kobidestekcileri-website.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
