import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, forwardRef } from 'react';

import { Flex, Stack, styled } from 'src/styled-system/jsx';
import { aspectRatio } from 'src/styled-system/patterns';

const StyledLink = forwardRef<HTMLAnchorElement, any>(function StyledLink(
  props,
  ref,
) {
  return (
    <styled.a
      ref={ref}
      color="blue.300"
      fontWeight="semibold"
      textDecoration="underline"
      textUnderlineOffset="4px"
      textDecorationColor="blue.300"
      _hover={{ bg: 'gray.700' }}
      {...props}
    />
  );
});

const CustomLink = (props: { href: string }) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return <StyledLink as={Link} {...props} />;
  }
  return <StyledLink target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents: Record<string, FunctionComponent<any>> = {
  A: CustomLink,
  Image({ ratio, alt, marginY = '20px', fit, caption, ...rest }) {
    if (ratio) {
      return (
        <Stack marginY={marginY}>
          <Flex
            aspectRatio={aspectRatio({ ratio })}
            position="relative"
            justifyContent="center"
          >
            <Image
              alt={alt}
              style={{ overflow: 'visible', objectFit: fit }}
              {...rest}
            />
          </Flex>
          {caption && (
            <styled.figcaption
              fontSize="small"
              textAlign="center"
              color="white"
            >
              {caption ?? alt}
            </styled.figcaption>
          )}
        </Stack>
      );
    }
    return (
      <Stack marginY={marginY}>
        <Image alt={alt} className="img" style={{ objectFit: fit }} {...rest} />
        {caption && (
          <styled.figcaption
            fontSize="small"
            textAlign="center"
            color="gray.400"
          >
            {alt}
          </styled.figcaption>
        )}
      </Stack>
    );
  },
};

export default MDXComponents;
