import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProjectTile from "../components/ProjectTile";
import LoadingSpinner from "../components/LoadingSpinner";

function ProjectSection({ projectData, t }) {
  const [projectArray, setProjectArray] = useState([]);
  useEffect(() => {
    projectData
      .then((data) => {
        setProjectArray(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [projectData]);

  return (
    <div className="mt-8 px-5">
      {projectArray.length === 0 ? (
        <LoadingSpinner className="p-4" svgWidth={30} svgHeight={30} />
      ) : (
        <div className="h-min grid md:grid-cols-2 gap-4 grid-cols-1 ">
          {projectArray?.map((item) => {
            return (
              <ProjectTile
                key={item.repo}
                title={item.repo}
                description={item.description}
                link={item.link}
                language={item.language}
                website={item.website}
                languageColor={item.languageColor}
                stars={item.stars}
                forks={item.forks}
              />
            );
          })}
        </div>
      )}

      <a
        href="https://github.com/A1X5H04?tab=repositories"
        className="block w-full my-4 text-center hover:bg-slate-100 dark:hover:bg-gray-1000 text-sm font-bold py-2 rounded-md"
      >
        {t("home.project.show_more")}
      </a>
    </div>
  );
}

ProjectSection.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
};

export default ProjectSection;
