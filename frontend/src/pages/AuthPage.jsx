import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms/authAtom";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { useState, useEffect } from "react";

// Styled h1 with custom font
const StyledHeading = styled.h1`
  font-family: "Abcgintonord 800", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: blue;
  margin-bottom: 1rem;
`;

// Styled paragraph with custom styling
const StyledParagraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  width: 80%;
  text-align: center; /* Center-align the text */
`;

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 2000); // Delay image display by 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        {/* Set flex container height to full viewport height */}
        {/* Change flex direction based on screen size */}
        {/* Login or Signup section */}
        <Box
          order={{ base: 2, md: 1 }}
          flex={1}
          margin={{ base: "0", md: "1rem" }}
        >
          {" "}
          {/* Add margin */}
          {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
        </Box>
        {/* Welcome message and text */}
        <StyledWelcomeBox
          order={{ base: 1, md: 2 }}
          flex={1}
          textAlign={{ base: "center", md: "left" }}
          paddingTop="9rem"
        >
          {/* Add padding */}
          {/* Styled heading with custom font */}
          <StyledHeading>Welcome to ConnectLink</StyledHeading>
          {/* Additional text */}
          <StyledParagraph>
            ConnectLink is a platform where juniors connect with seniors.
          </StyledParagraph>
          <StyledParagraph>
            Join us now to explore a world of connections and opportunities!
          </StyledParagraph>
          <StyledParagraph>
            Discover, connect, and grow with ConnectLink.
          </StyledParagraph>
        </StyledWelcomeBox>
      </Flex>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        paddingTop={"5rem"}
        alignItems="center"
      >
        {/* Set flex container height to full viewport height */}
        {/* Change flex direction based on screen size */}
        {/* Login or Signup section */}
        <Box
          order={{ base: 2, md: 1 }}
          flex={1}
          margin={{ base: "0", md: "1rem" }}
        >
          {" "}
          {/* Add margin */}
          {showImages && (
            <StyledImage1
              src="https://media.istockphoto.com/id/1413735503/photo/social-media-social-media-marketing-thailand-social-media-engagement-post-structure.jpg?s=612x612&w=0&k=20&c=7Y4Bdom9c7paYa67nSCvwSuFoppYxJIh-CTYqe6J4Js="
              alt="Description of the image"
            />
          )}
        </Box>
        {/* Welcome message and text */}
        <StyledWelcomeBox
          order={{ base: 1, md: 2 }}
          flex={1}
          textAlign={{ base: "center", md: "left" }}
          paddingTop="9rem"
          paddingLeft={"2rem"}
        >
          {/* Add padding */}
          {/* Styled heading with custom font */}
          <StyledHeading>Connects with Seniors</StyledHeading>
          {/* Additional text */}
          <StyledParagraph>
            Empower your college journey by bridging the gap between students
            and esteemed senior members of our community.
          </StyledParagraph>
          <StyledParagraph>
            Unleash mentorship opportunities and ignite a vibrant exchange of
            knowledge.
          </StyledParagraph>
          <StyledParagraph>
            Discover, connect, and grow with ConnectLink.
          </StyledParagraph>
        </StyledWelcomeBox>
      </Flex>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        paddingTop={"5rem"}
        alignItems="center"
      >
        {/* Set flex container height to full viewport height */}
        {/* Welcome message and text */}
        <StyledWelcomeBox
          order={{ base: 1, md: 2 }}
          flex={1}
          textAlign={{ base: "center", md: "left" }}
          paddingTop="9rem"
        >
          {/* Add padding */}
          {/* Styled heading with custom font */}
          <StyledHeading>Information Access</StyledHeading>
          {/* Additional text */}
          <StyledParagraph>
            Forge meaningful relationships and connections with peers, mentors,
            and the broader college community.
          </StyledParagraph>
          <StyledParagraph>
            Join us now to explore a world of connections and opportunities!
          </StyledParagraph>
        </StyledWelcomeBox>
        {/* Change flex direction based on screen size */}
        {/* Login or Signup section */}
        <Box
          order={{ base: 1, md: 2 }}
          flex={1}
          margin={{ base: "0", md: "1rem" }}
        >
          {" "}
          {/* Add margin */}
          {showImages && (
            <StyledImage2
              src="https://previews.123rf.com/images/william87/william871805/william87180500010/102100212-teen-group-of-friends-with-smartphones-at-park-millennials-best-friends-using-mobile-phones-addicted.jpg"
              alt="Description of the image"
            />
          )}
        </Box>
      </Flex>
      {/* Footer */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }} // Center icons on mobile, space between on larger screens
        alignItems={{ base: "center", md: "center" }}
        padding="1rem"
        bg="white.800"
      >
        {/* Social icons */}
        <Box>
          <Flex
            justifyContent={{ base: "center", md: "center" }}
            alignItems="center"
          >
            <Icon
              as={FaFacebook}
              boxSize={{ base: 8, md: 8 }}
              color="blue"
              mr={4}
            />
            <Icon
              as={FaTwitter}
              boxSize={{ base: 8, md: 8 }}
              color="blue"
              mr={4}
            />
            <Icon as={FaInstagram} boxSize={{ base: 8, md: 8 }} color="blue" />
          </Flex>
        </Box>
        <Box>
          <StyledParagraph
            color="blue"
            textAlign={{ base: "center", md: "left" }}
          >
            &copy; 2024 ConnectLink. All rights reserved.
          </StyledParagraph>
          <StyledParagraph
            color="blue"
            textAlign={{ base: "center", md: "left" }}
          >
            Terms of Service | Privacy Policy
          </StyledParagraph>
        </Box>
      </Flex>
    </>
  );
};

// Styled Welcome Box with custom padding-left for specified screen size
const StyledWelcomeBox = styled(Box)`
  @media (min-width: 300px) and (max-width: 780px) {
    padding-left: 23px;
  }
`;

// Styled Image with transition effect, oval shape, border, and shadow
const StyledImage1 = styled.img`
  transition: transform 0.3s ease-in-out 1s; /* Add transition delay */
  width: 100%; /* Adjust image width to fit container */
  height: auto; /* Maintain aspect ratio */
  padding: 1rem; /* Add padding */
  border-radius: 50%; /* Oval shape */
  border: 2px solid #ccc; /* Add border */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow */
`;

// Styled Image with transition effect, oval shape, border, and shadow
const StyledImage2 = styled.img`
  transition: transform 0.9s ease-in-out 1s; /* Add transition delay */
  width: 100%; /* Adjust image width to fit container */
  height: auto; /* Maintain aspect ratio */
  padding: 1rem; /* Add padding */
  border-radius: 50%; /* Oval shape */
  border: 2px solid #ccc; /* Add border */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow */
`;

export default AuthPage;
