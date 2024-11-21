import { InfoPessoal } from '../../Components/InfoPessoal';
import { InfoEntrega } from '../../Components/InfoEntrega';
import { MainHeader } from '../../components/MainHeader';


export const InfosPedido: React.FC = () => {
    return (
        <>
        <MainHeader/>
        <InfoPessoal/>
        <InfoEntrega/>
        </>
    );
  };