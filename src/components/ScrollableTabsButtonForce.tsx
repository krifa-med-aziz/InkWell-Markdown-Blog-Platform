import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { seedData } from "../utils/data";

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const tagsArr: string[] = [];
  seedData.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tagsArr.push(tag));
    }
  });
  //   console.log(tagsArr[value]);
  const allTags = Array.from(new Set(tagsArr));
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 320, sm: 420, md: 750 },
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs "
      >
        <Tab
          sx={{
            fontSize: {
              xs: "0.75rem", // small for mobile
              sm: "0.875rem", // slightly bigger on small screens
              md: "1rem", // default on medium+
            },
          }}
          label="For You"
        />
        {allTags.map((t) => (
          <Tab
            sx={{
              fontSize: {
                xs: "0.75rem", // small for mobile
                sm: "0.875rem", // slightly bigger on small screens
                md: "1rem", // default on medium+
              },
            }}
            key={t}
            label={t}
          />
        ))}
      </Tabs>
    </Box>
  );
}
