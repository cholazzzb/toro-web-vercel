import { Flex, Text } from '@chakra-ui/react';
import {
  faClose,
  faHome,
  faPaperPlane,
  faPenNib,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import RoundButton from './RoundButton';
import Show from './Show';

type NavButtonProps = {
  open: boolean;
  onClick: () => void;
};

function NavButton(props: PropsWithChildren<NavButtonProps>) {
  return (
    <>
      <Show when={props.open}>
        <Flex
          backgroundColor="rgba(255,255,255,0.2)"
          width="full"
          height="100vh"
          alignItems="center"
          justifyContent="center">
          <Flex justifyContent="center" marginRight={10}>
            <Link href="/">
              <RoundButton>
                <FontAwesomeIcon icon={faHome} height={25} width={25} />
              </RoundButton>
              <Text textAlign="center">Home</Text>
            </Link>
          </Flex>

          <Flex justifyContent="center">
            <Link href="/blogs">
              <RoundButton>
                <FontAwesomeIcon icon={faPenNib} height={25} width={25} />
              </RoundButton>
              <Text textAlign="center">Blog</Text>
            </Link>
          </Flex>
        </Flex>
      </Show>
      <Flex
        zIndex={200}
        position="fixed"
        bottom={3}
        right={6}
        borderRadius="50%"
        backgroundColor="rgba(255,255,255,0.3)"
        color="white"
        alignItems="center"
        justifyContent="center">
        <RoundButton onClick={props.onClick}>
          <FontAwesomeIcon
            icon={props.open ? faClose : faPaperPlane}
            height={25}
            width={25}
          />
        </RoundButton>
      </Flex>
    </>
  );
}

export default NavButton;
