import './App.css';
import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Teams } from './components/Teams/Team';
import { Header } from './components/Header/Header';
import { useChangeState } from './components/hooks/useChangeState';
import { Footer } from './components/Footer/Footer';

function App() {
  const [show, setShow] = useChangeState(true);
  const [teams, setTeams] = useState([{id:'', members: []}]);

  return (
    <>
      <Header />
      {
        show &&
        <Form
          id="createTeam"
          css="formContainer"
          title="Rellena el formulario para crear el colaborador."
          shareState={teams}
          setShareState={setTeams}
        />
      }
      <Teams
        teamsState={teams}
        setTeamsState={setTeams}
        hiddenForm={[show, setShow]}
      />
      <Footer/>
    </>
  )
}

export default App
