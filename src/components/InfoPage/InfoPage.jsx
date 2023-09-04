import { useRouter } from 'next/router';
import Layout from '../Layout/Layout';
import SearchBar from '../SearchBar/SearchBar';
import {
  Container,
  BackButton,
  Title,
  Subtitle,
  OrnamentContainer,
  OrnamentImg,
} from './InfoPage.styled';
import { ArrowBack } from '../../../public/svg-book';
import { FullOrnamentClipped, BgFull } from '../../../public/backgrounds';
import { HeroStar } from '@/styles/index.styled';

export default function InfoPage({ children, title, subtitle }) {
  const router = useRouter();
  return (
    <Layout>
      <Container>
        <HeroStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
        <SearchBar style={{ marginBottom: 8 }} />
        <BackButton type="button" onClick={() => router.back()}>
          <ArrowBack style={{ width: 21, height: 24 }} />
          Previous page
        </BackButton>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
        <OrnamentContainer>
          <OrnamentImg
            src={FullOrnamentClipped}
            alt="ornament"
            distance="pdp"
          />
        </OrnamentContainer>
      </Container>
    </Layout>
  );
}
