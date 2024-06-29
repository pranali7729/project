import { useState, useEffect } from "react";
import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [iconSize, setIconSize] = useState(30); // Initial size
  const [imageWidth, setImageWidth] = useState(8); // Initial width
  const [iconGap, setIconGap] = useState(16); // Initial icon gap
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  useEffect(() => {
    const handleResize = () => {
      // Adjust icon size, image width, and icon gap based on screen width
      if (window.innerWidth >= 300 && window.innerWidth <= 756) {
        setIconSize(13);
        setImageWidth(3.5);
        setIconGap(5);
      } else {
        setIconSize(30);
        setImageWidth(8);
        setIconGap(16);
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleColorMode = () => {
    toggleColorMode();
  };

  return (
    <Flex
      justifyContent={"space-between"}
      mt={0}
      mb="9"
      marginLeft="0px"
      bg={!user ? "#33" : colorMode === "dark" ? "black" : "#5755FE"} // Conditionally set background color
      width="100%"
      height="60px"
    >
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={iconSize} style={{ margin: iconGap }} />
        </Link>
      )}
      {!user ? (
        <p style={{ color: "white" }}></p> // Text color changed to white for better visibility
      ) : (
        <>
          <Image
            cursor={"pointer"}
            alt="logo"
            w={imageWidth}
            src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
            onClick={handleToggleColorMode}
          />

          <Flex alignItems={"center"} gap={iconGap}>
            <Link as={RouterLink} to={`/${user.username}`}>
              <RxAvatar size={iconSize} />
            </Link>
            <Link as={RouterLink} to={"/chat"}>
              <BsFillChatQuoteFill size={iconSize} />
            </Link>
            <Link as={RouterLink} to={"/settings"}>
              <MdOutlineSettings size={iconSize} />
            </Link>
            <Button size={"xs"} onClick={logout}>
              <FiLogOut size={iconSize} />
            </Button>
          </Flex>
        </>
      )}

      {!user && (
        <p></p>
      )}
    </Flex>
  );
};

export default Header;
