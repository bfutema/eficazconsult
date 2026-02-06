import * as S from './Footer.styles';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.FooterInner>
        <S.Brand>
          <S.Logo>
            Eficaz<span>Consult</span>
          </S.Logo>
          <S.Description>
            Soluções contábeis e fiscais com excelência. Sua empresa merece
            uma contabilidade que transforma números em estratégia.
          </S.Description>
        </S.Brand>
        <S.Column>
          <S.ColumnTitle>Navegação</S.ColumnTitle>
          <S.LinkList>
            <S.LinkItem>
              <S.FooterLink href="#inicio">Início</S.FooterLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.FooterLink href="#servicos">Serviços</S.FooterLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.FooterLink href="#sobre">Sobre</S.FooterLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.FooterLink href="#contato">Contato</S.FooterLink>
            </S.LinkItem>
          </S.LinkList>
        </S.Column>
        <S.Column>
          <S.ColumnTitle>Contato</S.ColumnTitle>
          <S.LinkList>
            <S.LinkItem>
              <S.FooterLink href="mailto:contato@eficazconsult.com.br">
                contato@eficazconsult.com.br
              </S.FooterLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.FooterLink href="tel:+5511999999999">
                (11) 99999-9999
              </S.FooterLink>
            </S.LinkItem>
          </S.LinkList>
        </S.Column>
      </S.FooterInner>
      <S.BottomBar>
        © {currentYear} Eficaz Consult. Todos os direitos reservados.
      </S.BottomBar>
    </S.FooterWrapper>
  );
}
