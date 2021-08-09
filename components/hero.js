/*@jsxImportSource theme-ui*/

import { Box, Container } from "theme-ui";

const Component = () => {
  return (
    <Box
      sx={{
        bg: "#ffcb05",
        color: "white",
        pt: [4],
        pb: [4],
        textAlign: "center",
        height: [250, 200],
        position: "relative",
      }}
    >
      <h1 sx={{ my: [0], fontSize: [4, 4, 5] }}>💓HAPPY BIRTHDAY REKHA MISS💓 </h1>
      <p sx={{ fontSize: [1], mt: [1] }}>
        A very very Happy Birthday to one of the backbones of KMEA Engineering college. 
      </p>
      <p sx={{ fontSize: [1], mt: [1] }}>
        From , HACK CLUB KMEA 💗
      </p>
      

      <div
        sx={{
          height: [40],
          width: "100vw",
          textAlign: "center",
        }}
      >
        <img
          src="./rekha2.jpg"
          sx={{
            borderRadius: "circle",
            width: [100, 100, 110, 125],
            mx: "auto",
            cursor: "pointer",
            transition: "1s",
            ":hover": {
              transform: "rotate(360deg)",
              transition: "2s",
            },
          }}
        />
      </div>
    </Box>
  );
};

export default Component;
