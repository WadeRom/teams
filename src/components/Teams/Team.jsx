import "./team.css";
import { CardGroup } from "./Card/Card";
import { PrimaryButton } from "../Buttons/Button";
import { useState } from "react";

export const Teams = ({ hiddenForm, teamsState, setTeamsState }) => {
  return (
    <TeamsContainer
      teamsState={teamsState}
      hiddenForm={hiddenForm}
      setTeamsState={setTeamsState}
    />
  )
}

const TeamsContainer = ({ hiddenForm, teamsState, setTeamsState }) => {
  return (
    <section className="team__main__container">
      <TeamsTitle hiddenForm={hiddenForm}>Teams</TeamsTitle>
      <TeamsList teamsState={teamsState} setTeamsState={setTeamsState} />
    </section>
  )
}

const TeamsTitle = ({ children, hiddenForm }) => {
  const [state, setState] = hiddenForm;
  return (
    <div className="team__container">
      <h1 className="team__title color-violet team__title__underline decoration-violet">{children}</h1>
      <PrimaryButton
        css="team__btn"
        clickHandle={() => setState(!state)}
      >
        <img src="/images/btn__add.svg" alt="" />
      </PrimaryButton>
    </div>
  )
}

const TeamsList = ({ teamsState, setTeamsState }) => {
  const updateTeamList = (teamId, list) => {
    const removeTeamMembers = teamsState.map((team) => {
      if (team.id === teamId) {
        return {...team, members: list}
      }
      return team
    });
    setTeamsState(removeTeamMembers)
  }
    return teamsState.map((team, index) => {
      return (
        index > 0 &&
        <CardGroup
          key={team.id}
          title={team.id}
          categorie={team.id}
          list={team.members}
          updateShareState={updateTeamList}
        />
      )
    })
  }