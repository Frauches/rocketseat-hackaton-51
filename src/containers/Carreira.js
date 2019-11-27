import React, { useState } from "react";
import InputText from "../components/InputText";
import { Button, CarreiraContainer, ItemContainer, Paragraph } from "../styles";

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
      {formQuestionNumber + 1 < questionItems.length && (
        <Button onClick={() => setFormQuestionNumber(formQuestionNumber + 1)}>
          >
        </Button>
      )}
      {formQuestionNumber + 1 >= questionItems.length && (
        <Button onClick={() => setContainerActive(containerActive + 1)}>
          Avançar
        </Button>
      )}
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

  const formFriendRelativeView = (
    <ItemContainer isActive={containerActive === 3}>
      <div>
        <p>
          Você possui algum conhecido que trabalha na área amigo ou parente?
        </p>
        <Button>Sim</Button>
        <Button>Não</Button>
      </div>
      <Button
        disabled={formQuestionNumber + 1 > questionItems.length}
        onClick={() => setFormQuestionNumber(formQuestionNumber + 1)}
      >
        Próximo
      </Button>
    </ItemContainer>
  );

  const contentContainers = [
    formView,
    formFriendRelativeView,
    formQuestionario1View
  ];
  // Início - Você Sabia - 1
  const VoceSabia = () => {
    const formView = (
      <ItemContainer isActive={containerActive === 4}>
        <div>
          <h1> Você sabia? </h1>

          <Paragraph>
            {" "}
            A informática teve seu inicio na história como uma precursora da
            revolução tecnológica, pois ela surgiu de uma dificuldade ou
            necessidade dentro da, quando um Francês denominado de Blaise
            Pascal, desenvolve a primeira máquina de calcular, a primeira
            calculadora, esta por sua vez foi desenvolvida para realizar
            cálculos.
          </Paragraph>
          <Button>Próximo</Button>
        </div>
      </ItemContainer>
    );

    return <CarreiraContainer>{formView}</CarreiraContainer>;
  };
  // FIM - Você Sabia - 1

  const contentContainers = [formView, formQuestionario1View, VoceSabia];

  return (
    <CarreiraContainer>{contentContainers[containerActive]}</CarreiraContainer>
  );
};

export default Carreira;
