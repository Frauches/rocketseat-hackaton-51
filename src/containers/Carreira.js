import React, { useState } from "react";
import InputText from "../components/InputText";
import { Button, CarreiraContainer, ItemContainer } from "../styles";

const Carreira = () => {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    escolaridade: "",
    profissao: ""
  });
  const [formQuestionNumber, setFormQuestionNumber] = useState(0);
  const [containerActive, setContainerActive] = useState(0);
  const questionItems = [
    "Diga-nos seu nome",
    "Diga-nos sua idade",
    "Diga-nos sua escolaridade",
    "E quais profissões você mais se identifica?"
  ];

  const handleChange = field => event => {
    setForm({
      ...form,
      [field]: event.target.value
    });
  };

  const formView = (
    <ItemContainer isActive={containerActive === 0}>
      {questionItems.map((questionItem, index) => {
        return (
          <InputText
            isHidden={formQuestionNumber + 1 <= index}
            label={questionItem}
            value={form[index]}
            onChange={event => handleChange(Object.keys(form)[index])(event)}
          />
        );
      })}
      {formQuestionNumber + 1 < questionItems.length && <Button
        onClick={() => setFormQuestionNumber(formQuestionNumber + 1)}
      >
        >
      </Button>}
      {formQuestionNumber + 1 >= questionItems.length && <Button
        onClick={() => setContainerActive(containerActive + 1)}>
        Avançar
      </Button>}
    </ItemContainer>
  );

  // Início - Questionário - 1
  const formQuestionario1View = (
    <ItemContainer isActive={containerActive === 1}>
      <div>
        <h1>Questionário 1:</h1>
      </div>
      <br />
      <h3>Você conhece a área de tecnologia da informação?</h3>
      <br />
      <br />
      <Button
        disabled={formQuestionNumber + 1 > questionItems.length}
        onClick={() => setFormQuestionNumber(formQuestionNumber + 1)}
      >
        Próximo
      </Button>
    </ItemContainer>
  );
  // Fim - Questionário - 1

  const contentContainers = [formView, formQuestionario1View];

  return (
    <CarreiraContainer>      
      {contentContainers[containerActive]}
    </CarreiraContainer>
  );
};

export default Carreira;
