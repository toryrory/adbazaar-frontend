import { Box, Chat, Email, Phone, TgWhite, FbWhite, InstWhite } from "../../../../public/svg-account";
import Link from "next/link";
import {
  Container,
  ListItem,
  SocialsBox,
  List,
  IconBox,
  Terms,
  Text
} from "./Support.styled";

export default function Support() {
  return (
    <Container>
      <List>
        <ListItem>
          <IconBox>
            <Phone style={{ width: 24, height: 24 }} />
          </IconBox>
          <Text>+38 (066) 555 44 33 </Text>
        </ListItem>
        <ListItem>
          <IconBox>
            <Email style={{ width: 24, height: 24 }} />
          </IconBox>
          <Text>adbazaar@gmail.com</Text>
        </ListItem>
        <ListItem>
          <IconBox>
            <Chat style={{ width: 24, height: 24 }} />
          </IconBox>
          <SocialsBox>
            <Link href={"https://web.telegram.org/k/"} passHref legacyBehavior>
              <a target='_blank'>
                <TgWhite style={{ width: 24, height: 24 }} />
              </a>
            </Link>
            <Link href={"https://uk-ua.facebook.com/"} passHref legacyBehavior>
              <a target='_blank'>
                <FbWhite style={{ width: 24, height: 24 }} />
              </a>
            </Link>
            <Link href={"https://www.instagram.com/"} passHref legacyBehavior>
              <a target='_blank'>
                <InstWhite style={{ width: 24, height: 24 }} />
              </a>
            </Link>
          </SocialsBox>
        </ListItem>
        <ListItem>
          <IconBox>
            <Box style={{ width: 24, height: 24 }} />
          </IconBox>
          <Link
            href={
              "https://www.worldbank.org/en/about/legal/terms-and-conditions"
            }
            passHref
            legacyBehavior
          >
            <Terms target='_blank'>Our Terms and Conditions</Terms>
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}
