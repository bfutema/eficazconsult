import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import * as S from './Contact.styles';

const contactItems = [
  {
    icon: '✉️',
    label: 'E-mail',
    value: 'contato@eficazconsult.com.br',
    href: 'mailto:contato@eficazconsult.com.br',
  },
  {
    icon: '📞',
    label: 'Telefone',
    value: '(11) 99999-9999',
    href: 'tel:+5511999999999',
  },
  {
    icon: '📍',
    label: 'Endereço',
    value: 'São Paulo, SP',
    href: '#',
  },
];

export function Contact() {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <S.SectionWrapper id="contato">
      <S.SectionInner ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.SectionLabel>Contato</S.SectionLabel>
          <S.SectionTitle>Vamos conversar?</S.SectionTitle>
          <S.SectionDescription>
            Estamos prontos para atender sua empresa. Entre em contato e
            descubra como podemos ajudar no crescimento do seu negócio.
          </S.SectionDescription>
        </motion.div>
        <S.ContactCard
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <S.ContactGrid>
            {contactItems.map((item) => (
              <S.ContactItem key={item.label} href={item.href}>
                <S.ContactIcon>{item.icon}</S.ContactIcon>
                <S.ContactLabel>{item.label}</S.ContactLabel>
                <S.ContactValue>{item.value}</S.ContactValue>
              </S.ContactItem>
            ))}
          </S.ContactGrid>
          <S.CtaButton href="mailto:contato@eficazconsult.com.br">
            Enviar mensagem
          </S.CtaButton>
        </S.ContactCard>
      </S.SectionInner>
    </S.SectionWrapper>
  );
}
