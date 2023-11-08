import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
`;

export const ContactsSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--white-text);
  text-indent: 48px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.3;
  color: #ffffff;
`;

export const Span = styled.span`
  color: var(--brand-color);
  text-transform: none;
  margin-left: 48px;
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EmailName = styled.p`
  color: var(--white-text);
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const Email = styled.a`
  color: var(--brand-color);
  font-size: 12px;
  line-height: 1.3;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  background-color: var(--product-background);
  border-radius: 10px;
  border: 0.5px solid rgba(216, 233, 254, 0.15);
  padding: 24px 16px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--brand-color);
  font-size: 11px;
  line-height: normal;
`;

export const Input = styled.input`
  padding: 11px 0;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 0.5px solid var(--brand-color);
  font-size: 14px;
  line-height: normal;
  color: var(--white-text);
`;

export const CommentInput = styled.textarea`
  display: block;
  min-height: 68px;
  background: none;
  outline: none;
  border: none;
  padding: 8px 0;
  font-size: 14px;
  line-height: normal;
  color: var(--white-text);
`;

export const PostBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  font-size: 13px;
  line-height: 1.23;
  color: var(--brand-color);
  margin-left: auto;
`;
