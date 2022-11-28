import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string, subtitle: string, image: string
}

export default function ProductCard({ title, subtitle, image }: Props) {
    return (
      <Box paddingLeft={4}>
        <Box  width={360} height={476}  backgroundColor="white">
        <Stack align="center" paddingTop="20px">
        <Image width={288} height={288} src={image} />
        </Stack>
        <Stack paddingLeft="36px" justify="left" paddingTop="24px">
            <Heading fontSize="24px">{title}</Heading>
            <Text marginTop={12} maxW="288px">{subtitle}</Text>
        </Stack>
      </Box>
      </Box>
       
    )
  }