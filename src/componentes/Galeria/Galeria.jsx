import Titulo from "../Titulo/Titulo";
import Populares from "./Populares/Populares";
import Tags from "./Tags/Tags";
import { styled } from "styled-components";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
  return (
    <>
        <Tags/>

        <GaleriaContainer>

            <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo>
            </SecaoFluida>
        
            <Populares/>

        </GaleriaContainer>
    </>
  )
}

export default Galeria