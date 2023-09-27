import { useEffect, useState } from "react";

const Skill = (props) => {
  const { skillName } = props;

  return (
    <div className="bg-lBrand dark:bg-mainBg px-1 m-1 rounded-lg text-dBrand flex justify-center grow border animate-scale-100 border-dBrand ">
      <h4 className="whitespace-nowrap">{skillName}</h4>
    </div>
  );
};

export default Skill;
