import styled from '@emotion/styled';

export const GenresList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 60px;
`;

export const GenresItem = styled.li`
  background-color: var(--product-background);
  color: var(--white-text);
  font-size: 12px;
  line-height: 1.3;
  padding: 4px 10px;
  border: 1px solid var(--dark-grey);
  border-radius: 25px;
`;

export const Title = styled.h2`
  color: var(--light-text);
  font-weight: 400;
  font-size: 32px;
  line-height: 1;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  color: var(--brand-color);
  font-size: 14px;
  line-height: 1.23;
  margin-bottom: 16px;
  width: 270px;
`;
