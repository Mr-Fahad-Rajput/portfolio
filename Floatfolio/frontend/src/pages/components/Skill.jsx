import { useEffect, useState } from "react";

const Skill = (props) => {
  const { skillLogo, skillName } = props;

  return (
    <div className="bg-lBrand dark:bg-mainBg px-1 m-1 rounded-lg text-dBrand flex justify-center grow border animate-scale-100 border-dBrand">
      {skillLogo && <img
        src={skillLogo}
        alt={`${skillName} Logo`}
        className="aspect-square w-6 rounded-lg"
      />}
      <h4 className="whitespace-nowrap">{skillName}</h4>
    </div>
  );
};

export default Skill;
