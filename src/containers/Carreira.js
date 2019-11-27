import React, { useState } from 'react';
import InputText from '../components/InputText';
import { Button, CarreiraContainer } from '../styles';

const Carreira = () => {

  const [form, setForm] = useState({
    nome: "",
    idade: "",
    escolaridade: "",
    profissao: ""
  });
  const [formQuestionNumber, setFormQuestionNumber] = useState(0);
  const [containerActive, setContainerActive] = useState(0);
  const questionItems = ["Diga-nos seu nome", "Diga-nos sua idade", "Diga-nos sua escolaridade", "E quais profissões você mais se identifica?"]


  const handleChange = field => (event) => {
    setForm({
      ...form,
      [field]: event.target.value
    });
  }

  const formView = (
    <div>
      {questionItems.map((questionItem, index) => {
        return (
          <InputText isHidden={formQuestionNumber + 1 <= index}
            label={questionItem}
            value={form[index]}
            onChange={(event) => handleChange(Object.keys(form)[index])(event)} />
        );
      })}
      <Button disabled={formQuestionNumber + 1 > questionItems.length} onClick={() => setFormQuestionNumber(formQuestionNumber + 1)}>Próximo</Button>
    </div>
  );

  const contentContainers = [formView];
  return (
    <CarreiraContainer>
      {contentContainers.map(formView => {
        return (formView);
      })}

    </CarreiraContainer>
  );
}

export default Carreira;