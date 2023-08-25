import "./card.css";
import { useState } from "react";
import { teams_colors } from "../themes";
import { Input } from "../../Form/Input/Input";

const CustomizeTheme = ({ theme, updateTheme }) => {
  const customizeTheme = (e) => updateTheme({ color: e.target.value })
  return (
    <Input
      id={"theme"}
      type={"color"}
      css={"card__custom__theme"}
      value={theme.color}
      changeValue={customizeTheme}
    />
  )
}

export const Card = ({id, teamId,  background, img, name, description, removeMember}) => {
  const style = {
    background: `linear-gradient(
      to bottom, ${background} 35%,white 0%
    )` 
  }

  const handleRemove = () => removeMember(id, teamId);

  return (
    <div style={style} className={`card__item__container`}>
      <button onClick={handleRemove}>
        <i className="material-symbols-outlined">close</i>
      </button>
      <img className="card__item_img" src={img} alt="user image" />
      <span className="card__item__text color-violet">{name}</span>
      <span className="card__item__text">{description}</span>
    </div>
  );
  
}

export const CardGroup = ({ categorie, list, title, updateShareState}) => {
  const currentTheme = teams_colors[categorie];
  const [theme, setTheme] = useState({color: currentTheme.dark});
  const styles = [{ backgroundColor:theme.color+85 }, { textDecorationColor: theme.color }];

  const handleMember = (id, teamId) => {
    const filterList = list.filter(member => member.id !== id);
    updateShareState(teamId, filterList)
  }
 
  return (
    <div style={styles[0]} id={categorie} className={`card__group__container`}>
      <h1 style={styles[1]} className={`card__group__title team__title__underline`}>
        {title}
      </h1>
      <CustomizeTheme theme={theme} parentId={categorie} updateTheme={setTheme}/>
      <div className="card__group__flex">
        {
          list.map(
            (item, index) => {
              return (
                <Card 
                  key={index}
                  id={item.id}
                  teamId={item.teamId}
                  img={item.photo}
                  name={item.name}
                  description={item.role}
                  background={theme.color}
                  removeMember={handleMember}
                />
              )
            }
          )
        }
      </div>
    </div>
  )
}
