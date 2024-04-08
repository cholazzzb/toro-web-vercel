import {
  faClose,
  faGlobeAsia,
  faHome,
  faPenNib,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { Flex } from 'src/styled-system/jsx';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from './Breadcrumb';
import { Glassy } from './Glass';
import RoundButton from './RoundButton';
import Show from './Show';
import { Text } from './Text';

type NavButtonProps = {
  breadcrumbItems?: Array<{ url: string; text: string }>;
  open: boolean;
  onClick: () => void;
};

function NavButton(props: PropsWithChildren<NavButtonProps>) {
  return (
    <>
      <Show when={props.open}>
        <Flex
          backgroundColor="rgba(255,255,255,0.2)"
          flexWrap="wrap"
          width="full"
          height="100vh"
          alignItems="center"
          justifyContent="center">
          <Flex justifyContent="center" marginRight={10}>
            <Link href="/">
              <RoundButton>
                <FontAwesomeIcon icon={faHome} height={25} width={25} />
              </RoundButton>
              <Text center>Home</Text>
            </Link>
          </Flex>

          <Flex justifyContent="center" marginRight={10}>
            <Link href="/projects">
              <RoundButton>
                <FontAwesomeIcon icon={faPenNib} height={25} width={25} />
              </RoundButton>
              <Text center>Projects</Text>
            </Link>
          </Flex>

          <Flex justifyContent="center" alignItems="center">
            <Link href="/blogs">
              <RoundButton>
                <FontAwesomeIcon icon={faPenNib} height={25} width={25} />
              </RoundButton>
              <Text center>Blog</Text>
            </Link>
          </Flex>
        </Flex>
      </Show>
      <Flex
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
        zIndex={200}
        position="fixed"
        bottom={3}
        width="100%"
        paddingInline="28px">
        <Flex
          borderRadius="50%"
          backgroundColor="rgba(255,255,255,0.1)"
          color="white"
          alignItems="center"
          justifyContent="center">
          <RoundButton onClick={props.onClick}>
            <FontAwesomeIcon
              icon={props.open ? faClose : faGlobeAsia}
              height={25}
              width={25}
            />
          </RoundButton>
        </Flex>
        <Show when={!!props.breadcrumbItems}>
          <Glassy
            backgroundColor="rgba(255,255,255,0.3)"
            width="100%"
            padding="10px"
            marginInlineEnd="10px"
            borderRightRadius="20px">
            <Breadcrumb>
              {props.breadcrumbItems?.map((bci, idx) => {
                const isCurrentPage = idx + 1 === props.breadcrumbItems?.length;
                return (
                  <BreadcrumbItem
                    key={bci.url + bci.text}
                    isCurrentPage={isCurrentPage}>
                    <BreadcrumbLink
                      href={bci.url}
                      textDecoration={isCurrentPage ? 'underline' : 'none'}>
                      {bci.text}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                );
              })}
            </Breadcrumb>
          </Glassy>
        </Show>
      </Flex>
    </>
  );
}

export default NavButton;
