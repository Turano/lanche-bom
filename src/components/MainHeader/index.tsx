import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer, Logo } from './styles';
import { SearchButton } from '../SearchButton';
import { usePocket } from '../../contexts/api/usePocket';

export const MainHeader = () => {
  const { getLogo } = usePocket();

  console.log(getLogo);

  return (
    <HeaderContainer>
      <HamburgerMenu />
      <Logo
        src={getLogo.data}
        alt="Logo do lanche bom: Uma tampinha de garrafa vermelha contendo o texto Lanche Bom e Pastelaria"
      />
      <SearchButton />
    </HeaderContainer>
  );
};
