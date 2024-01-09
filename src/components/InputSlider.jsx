import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import "./InputSlider.css";

const Input = styled(MuiInput)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderBottom: "none", // Remove bottom border
    },
    "&:hover fieldset": {
      borderBottom: "none", // Remove bottom border on hover
    },
    "&.Mui-focused fieldset": {
      borderBottom: "none", // Remove bottom border when focused
    },
  },
});

export default function InputSlider() {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    // Append the percentage symbol to the value before setting it in state
    const inputValue = event.target.value;
    setValue(inputValue === "" ? 0 : inputValue + "%");
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom></Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            sx={{ marginLeft: "-10px", color: "#85afff", width: "120%" }}
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item sx={{ marginLeft: "20px" }}>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
