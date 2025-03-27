import SiteProfessionalTitleDesc from "./svg/professionalTitleDesc";
// import "./siteProfessionalTeam.css";
import ExpertDesc1 from "./svg/expertDesc1";
import ExpertDesc2 from "./svg/expertDesc2";
import ExpertDesc3 from "./svg/expertDesc3";

export interface siteProfessionalTeamProps {
  className: string;
}

export default function SiteProfessionalTeam({
  className = "",
}: siteProfessionalTeamProps) {
  return (
    <div className={className}>
      <SiteProfessionalTitleDesc className="" />
          <ExpertDesc1 className="" />
          <ExpertDesc2 className="" />
          <ExpertDesc3 className=""/>
    </div>
  );
}
