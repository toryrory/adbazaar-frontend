import { List, Item, Title, Text } from './BookShipping.styled';

export default function BookShipping() {
  return (
    <List>
      <Item>
        <Title>Pickup</Title>
        <Text>today</Text>
        <Text style={{ border: 'none', width: 100 }}>free of charge</Text>
      </Item>
      <Item>
        <Title>Mail delivery</Title>
        <Text>3 day</Text>
        <Text style={{ border: 'none', width: 100 }}>$ 5.50</Text>
      </Item>
      <Item>
        <Title>One company delivery</Title>
        <Text>24 h</Text>
        <Text style={{ border: 'none', width: 100 }}>$ 2.50</Text>
      </Item>
    </List>
  );
}
