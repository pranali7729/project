import { Box, Flex, Spinner, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const [showHelloBox, setShowHelloBox] = useState(false);
  const showToast = useShowToast();
  const [helloBoxBgColor, setHelloBoxBgColor] = useState("#5755FE");

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);

  const hideHelloBox = () => {
    setShowHelloBox(false);
  };

  const toggleHelloBox = () => {
    setShowHelloBox(!showHelloBox);
  };

  const changeHelloBoxBgColor = () => {
    if (helloBoxBgColor === "black") {
      setHelloBoxBgColor("#5755FE");
    } else {
      setHelloBoxBgColor("black");
    }
  };

  return (
    <Flex gap="10" alignItems="flex-start">
      <Box flex={110}>
        {!loading && posts.length === 0 && (
          <h1>Follow some users to see the feed</h1>
        )}

        {loading && (
          <Flex justify="center">
            <Spinner size="xl" />
          </Flex>
        )}

        {posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>
      <Box
        flex={30}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <SuggestedUsers />
      </Box>
      <Box paddingTop={{base:"50px",md:"60px"}} position="absolute" top="0" right="0">
        <Button onClick={toggleHelloBox}>
          {showHelloBox ? "Hide Event" : "Show Event"}
        </Button>
        {showHelloBox && (
          <Box
            padding={"10px"}
            width={{ base: "150px", md: "400px" }} // Responsive width
            height={{ base: "540px", md: "690px" }} // Responsive height
            bg={helloBoxBgColor}
            position="absolute"
            top={{ base: "100px", md: "40px" }} // Responsive top position
            right="0"
            p="4"
            zIndex="1"
            color={helloBoxBgColor === "black" ? "white" : "black"}
          >
            <Button onClick={changeHelloBoxBgColor} height={"15px"}>
              {helloBoxBgColor === "black"
                ? "Change Theme"
                : "Change Theme"}
            </Button>
            <br />
            <br />
            <div className="event">
              <p>Third Event</p>
              <p>2024-07-10</p>
              <p>Another Location</p>
            </div>
            <br />
            <div className="event">
              <p>Another Event</p>
              <p>2024-06-20</p>
              <p>Location</p>
            </div>
            <br />
            <div className="event">
              <p>Annual Sports Meet</p>
              <p>2024-05-15</p>
              <p>Sports Ground</p>
            </div>

            <Button
              top={{ base: "180px", md: "310px" }} // Responsive top position
              marginBottom={"10px"}
              onClick={hideHelloBox}
            >
              Hide Event
            </Button>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default HomePage;
