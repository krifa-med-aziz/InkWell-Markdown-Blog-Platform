import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useBlogPostsContext } from "../lib/hooks";

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const { blogPosts, setFilterby } = useBlogPostsContext();

  const tagsArr: string[] = [];
  blogPosts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tagsArr.push(tag));
    }
  });
  const allTags = Array.from(new Set(tagsArr));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    if (value === 0) {
      setFilterby("");
    } else {
      setFilterby(allTags[value - 1]);
    }
  }, [value, allTags, setFilterby]);
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
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1rem",
            },
          }}
          label="For You"
        />
        {allTags.map((t) => (
          <Tab
            sx={{
              fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
                md: "1rem",
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
