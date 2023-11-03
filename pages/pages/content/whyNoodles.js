import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import dog from "./dog.png";
import noodles3 from "./noodles3.jpg";
import { useEffect } from "react";
import { baseTheme, themeMain } from "@/styles/styles";
import { BackToTopButton } from "../../components/BackToTopButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CheckIcon from "@mui/icons-material/Check";
import {
  Instagram,
  LinkedIn,
  EmailOutlined,
  LinkedInOutlined,
  LinkedCameraOutlined,
  Book,
  Height,
  RoundedCorner,
} from "@mui/icons-material";
import Aos from "aos";

export default function WhyNoodles() {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  });
  return (
    <Box>
      <Box
        id="whynoodles"
        sx={{
          width: "100vw",
          height: "20vh",
          "@media (max-width: 768px)": {
            height: "15vh",
          },
        }}
      />
      <Box
        data-aos="fade"
        data-aos-anchor-placement="top-center"
        sx={{
          width: "100vw",
          height: "80vh",

          display: "flex",
          alignContent: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          "@media (max-width: 768px)": {
            height: "120vh",
          },
        }}
      >
        <Box
          id="text"
          sx={{
            maxWidth: "40%",
            display: "flex",
            flexDirection: "column",
            //justifyContent: "space-between",
            color: "black",
            p: "0px",
            textAlign: "center",
            "@media (max-width: 768px)": {
              p: "0px",
              maxWidth: "70%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              py: "30px",
              fontFamily: [""],
              fontWeight: "650",
            }}
          >
            Noodles made by 3D Noodles International will offer many advantages:
          </Typography>
          <Box
            sx={{
              alignItems: "flex-start",
              alignContent: "flex-start",
              textAlign: "left",

              display: "flex",
              p: "",
              flexDirection: "column",
              gap: "10px 30px",
              fontSize: "30",
              justifyContent: "center",
            }}
          >
            <Typography x sx={{ fontWeight: "cursive" }}></Typography>
            <Box
              sx={{
                display: "flex",

                justifyContent: "space-between",
              }}
            >
              <Box>
                <CheckIcon
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                    color: "green",
                  }}
                />
              </Box>
              <Box>
                <Typography>
                  {"    "}
                  Provide directly the concave sides of required radius
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",

                justifyContent: "space-between",
              }}
            >
              <Box>
                <CheckIcon
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                    color: "green",
                  }}
                />
              </Box>
              <Box>
                <Typography>
                  {"    "}
                  Speed up composite production, no investments needed low
                  production cost, save labour and inventory
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",

                justifyContent: "space-between",
              }}
            >
              <Box>
                <CheckIcon
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                    color: "green",
                  }}
                />
              </Box>
              <Box>
                <Typography>
                  {"    "}
                  Generate virtually no waste Repeatable defined shape for
                  consistent properties
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",

                justifyContent: "space-between",
              }}
            >
              <Box>
                <CheckIcon
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                    color: "green",
                  }}
                />
              </Box>
              <Box>
                <Typography>
                  {"    "}
                  Enable consistent quality Improve mechanical performance
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",

                justifyContent: "space-between",
              }}
            >
              <Box>
                <CheckIcon
                  sx={{
                    color: "green",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                />
              </Box>
              <Box>
                <Typography>
                  {"    "}
                  Provide customized solutions Allow scaling-up the process The
                  noodles can be produced in different shapes and sizes with
                  different fibers and tailored to solution
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
