import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import * as S from './Services.styles';

const MotionGrid = motion(S.Grid);
const MotionCard = motion(S.Card);

const services = [
  {
    icon: '📊',
    title: 'Contabilidade Empresarial',
    description:
      'Gestão completa da contabilidade da sua empresa, com relatórios precisos e suporte especializado para tomada de decisões estratégicas.',
  },
  {
    icon: '📋',
    title: 'Assessoria Fiscal',
    description:
      'Otimização tributária, planejamento fiscal e cumprimento de obrigações acessórias. Mantenha sua empresa em dia com o Fisco.',
  },
  {
    icon: '👥',
    title: 'Departamento Pessoal',
    description:
      'Folha de pagamento, eSocial, férias e benefícios. Tudo com a segurança e conformidade que sua empresa precisa.',
  },
  {
    icon: '📈',
    title: 'Consultoria Empresarial',
    description:
      'Análises gerenciais, planejamento financeiro e indicadores que ajudam a impulsionar o crescimento do seu negócio.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <S.SectionWrapper id="servicos">
      <S.SectionInner ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.SectionHeader>
            <S.SectionLabel>O que fazemos</S.SectionLabel>
            <S.SectionTitle>Soluções completas para sua empresa</S.SectionTitle>
            <S.SectionDescription>
              Oferecemos um portfólio integrado de serviços contábeis e
              fiscais, sempre com foco em resultados e conformidade.
            </S.SectionDescription>
          </S.SectionHeader>
        </motion.div>
        <MotionGrid
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <MotionCard
              key={service.title}
              variants={itemVariants}
            >
              <S.CardIcon>{service.icon}</S.CardIcon>
              <S.CardTitle>{service.title}</S.CardTitle>
              <S.CardDescription>{service.description}</S.CardDescription>
            </MotionCard>
          ))}
        </MotionGrid>
      </S.SectionInner>
    </S.SectionWrapper>
  );
}
