import React, { useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

export default function NoodleInfoPage() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <Box
      id="noodle-info"
      data-aos="fade"
      sx={{
        width: "100vw",
        padding: "50px 20px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        scrollMarginTop: "120px",
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "white", // Background color of the content box
          borderRadius: "15px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", color: "#23a6e5", mb: "20px" }}
        >
          Pre-Defined Radii 3D Noodles & Fillers
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "600", mb: "10px", color: "#333" }}
        >
          Noodle Types
        </Typography>
        <Box sx={{ mb: "20px" }}>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            <strong>Type 1:</strong> Firm
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            <strong>Type 2:</strong> Soft
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            <strong>Type 3:</strong> Special
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            <strong>Type 4:</strong> Non-crimp
          </Typography>
        </Box>

        <Divider sx={{ my: "20px" }} />

        <Typography
          variant="h6"
          sx={{ fontWeight: "600", mb: "10px", color: "#333" }}
        >
          Noodle Configurations
        </Typography>
        <Box sx={{ mb: "20px" }}>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            Noodles with either equal or unequal radii. Single radius on
            request.
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            Width and Height depend on radii. Special constructions on request.
          </Typography>
        </Box>

        <Divider sx={{ my: "20px" }} />

        <Typography
          variant="h6"
          sx={{ fontWeight: "600", mb: "10px", color: "#333" }}
        >
          Technical Specifications
        </Typography>
        <Box sx={{ mb: "20px" }}>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            <strong>Radius:</strong> 3 mm and above
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            <strong>Fibre Type:</strong> According to customer’s specifications
          </Typography>
        </Box>

        <Divider sx={{ my: "20px" }} />

        <Typography
          variant="h6"
          sx={{ fontWeight: "600", mb: "10px", color: "#333" }}
        >
          Advantages
        </Typography>
        <Box sx={{ mb: "20px" }}>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            ✓ Ready-to-use
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            ✓ Consistent radii
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            ✓ Form retention on curving
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            ✓ Good cavity fit
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            ✓ Permeable
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            ✓ Saves time, effort, costs
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{ fontWeight: "600", mb: "10px", color: "#333" }}
        >
          Applications
        </Typography>
        <Box>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            • Aerospace Components
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            • Automotive Parts
          </Typography>
          <Typography variant="body1" sx={{ mb: "5px", color: "#333" }}>
            • Marine Industry
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            • Industrial Applications
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
