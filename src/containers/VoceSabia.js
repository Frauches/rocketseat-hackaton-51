import React from 'react';
import { Button, Paragraph, CarreiraContainer } from '../styles';

const VoceSabia = () => {

  const formView = (
    <div>
        <h1> Você sabia? </h1>
        
        <Paragraph> A informática teve seu inicio na história como uma precursora da revolução tecnológica, 
            pois ela surgiu de uma dificuldade ou necessidade dentro da, quando um Francês denominado de 
            Blaise Pascal, desenvolve a primeira máquina de calcular, a primeira calculadora, esta por sua 
            vez foi desenvolvida para realizar cálculos.</Paragraph>    
      <Button>Próximo</Button>
    </div>
  );

  return (
    <CarreiraContainer>
        {formView}
    </CarreiraContainer>
  );
}

export default VoceSabia;