import "./form.css";
import { useState } from "react";
import { Label } from "./Label/Label";
import { Input } from "./Input/Input";
import { SelectInput } from "./Select/Select";
import { PrimaryButton } from "../Buttons/Button";
import { TEAMS_CATEGORIES as categories } from "../const";
import { v4 as uuidv4 } from 'uuid';

const FormInput = ({ id, label, type, placeholder, css, initVal, updateVal }) => {
  return (
    <div className={css || ''}>
      <Label forId={id}>
        {label}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={initVal}
          changeValue={updateVal}
        />
      </Label>
    </div>
  )
}

const FormSelect = ({ id, name, options, initVal, updateVal }) => {
  return (
    <Label forId={id}>
      Equipo
      <SelectInput
        id={id}
        name={name}
        options={options}
        initVal={initVal}
        changeValue={updateVal}
      />
    </Label>
  )
}

export const Form = ({ id, title, css, shareState, setShareState }) => {

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    role: '',
    photo: '',
    teamId: ''
  });

  const inputHandle = (evn) => { 
    setFormData({
      ...formData,
      id: uuidv4(),
      [evn.target.name]: evn.target.value
    });
  };

  const handleTeams = (memberData) => {
    const copyMember = {...memberData};

    const createTeam = (name, member) => {
      const team = [...shareState, { id: name, members: [member] }];
      setShareState(team);
    }

    const addMemberTo = (teamData, member) => {
      const modiefiedTeam = shareState.map(team => {
        return team.id === teamData.id ? {
          ...teamData,
          members:[
            ...teamData.members, 
            member
          ]
        } : team
      });

      setShareState(modiefiedTeam);
    }

    const team = shareState.find(team => team.id == copyMember.teamId)

    team === undefined ? 
    createTeam(copyMember.teamId, copyMember)
    : addMemberTo(team, copyMember);
  }

  const handleMemeber = (even) => {
    even.preventDefault();
    handleTeams(formData);
    setFormData({
      id: '',
      name: '',
      role: '',
      photo: '',
      teamId: ''
    })
  }


  return (
    <form onSubmit={handleMemeber} className={css} id={id}>
      <h1 className="formTitle">{title}</h1>
      <FormInput
        id="name"
        label="name"
        type="text"
        placeholder="Ingresar nombre"
        initVal={formData.name}
        updateVal={inputHandle}
      />
      <FormInput
        id="role"
        label="Puesto"
        type="text"
        placeholder="Ingresar puesto"
        initVal={formData.role}
        updateVal={inputHandle}
      />
      <FormInput
        id="photo"
        label="Foto"
        type="field"
        placeholder="Ingresar enlace de foto"
        initVal={formData.photo}
        updateVal={inputHandle}
      />
      <FormSelect
        id="team"
        name="teamId"
        options={categories}
        initVal={formData.teamId}
        updateVal={inputHandle}
      />
      <PrimaryButton type="submit">Crear</PrimaryButton>
    </form>
  )
}

