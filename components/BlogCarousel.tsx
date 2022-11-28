import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Café e amor",
      text: "Um café e um amor. Quentes, por favor. pra ter calma nos dias frios, pra dar colo quando as coisas estiverem por um fio",
      image:
        "https://th.bing.com/th/id/R.ef7d5dcb4f1e99d3929a77b45d056acd?rik=5wIS2xVDZSKW4w&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f38100000%2f-Coffee-coffee-38175764-2048-2048.jpg&ehk=KMzIyHPWj10%2bmd%2fJhHTTw0jbOfK0ZsSXBhKRZhwaUyE%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        title: "Como ter os melhores grãos?",
        text: "Um café e um amor. Quentes, por favor. pra ter calma nos dias frios, pra dar colo quando as coisas estiverem por um fio",
        image:
          "https://th.bing.com/th/id/OIP.JBkSfx0h_Rl1fTrgQvpd9AHaHa?pid=ImgDet&rs=1",
      },
      {
        title: "É melhor café a dois?",
        text: "Um café e um amor. Quentes, por favor. pra ter calma nos dias frios, pra dar colo quando as coisas estiverem por um fio",
        image:
          "https://th.bing.com/th/id/R.a8f27fcd8a69d37413e032622a022933?rik=UUW0uX8accGPUQ&pid=ImgRaw&r=0",
      },
  ];

  return (
    <Box
      position={"relative"}
      height={top === "90%" ? "unset" : "550px"}
      w={top === "90%" ? "100vw" : "1170px"}
      paddingRight="5%" paddingLeft="5%"
      overflow={"hidden"}
      marginBottom="20px"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        hidden={top === '90%' ? true : false}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        hidden={top === '90%' ? true : false}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box key={index}>
              
              <Stack direction={['column', 'row']} alignItems="center" justify="center" >
                <Box minW="500px" maxH={500} paddingRight="5%" paddingLeft="5%">
                <Image
                boxSize={500}
                  objectFit='cover'
                  src={card.image}
                  alt='coffe'
                />
                </Box>
                {/* This is the block you need to change, to customize the caption */}
                <Stack>
                  <Heading color="#FFBB00" fontSize={{ base: "6xl", md: "5xl", lg: "6xl" }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "24px", lg: "lg" }} maxWidth={460} lineHeight="36px" color="#ADADAD">
                    {card.text}
                  </Text>
                  <Button marginBottom={50} w={157}  h={46}>
                    Saiba Mais
                  </Button>
                </Stack>
              </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
