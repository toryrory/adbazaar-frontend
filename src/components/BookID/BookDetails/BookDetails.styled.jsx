import styled from 'styled-components';

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ActiveType = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid var(--light-grey);
  color: var(--light-grey);
  font-size: 14px;
  line-height: 1.15;
  padding: 12px 0;
  width: 99px;
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid rgba(184, 205, 225, 0.5);
  color: rgba(184, 205, 225, 0.5);
  font-size: 14px;
  line-height: 1.15;
  padding: 12px 0;
  width: 99px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
`;

export const Item = styled.li`
  width: 99px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-bottom: 1px solid var(--light-grey);
`;

export const Subtitle = styled.h4`
  color: var(--brand-color);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.15;
`;

export const ActiveDescription = styled.p`
  color: var(--white-text);
  font-size: 14px;
  line-height: 1.15;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Description = styled.p`
  color: rgba(184, 205, 225, 0.5);
  font-size: 14px;
  line-height: 1.15;
`;
