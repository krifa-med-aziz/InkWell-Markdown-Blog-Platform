import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useBlogPostsContext } from "../lib/hooks";

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const { blogPosts, handleQueryParamChange } = useBlogPostsContext();

  const allTags = React.useMemo(() => {
    const tagsArr: string[] = [];
    blogPosts.forEach((post) => {
      if (post.tags) {
        post.tags.forEach((tag) => tagsArr.push(tag));
      }
    });
    return Array.from(new Set(tagsArr));
  }, [blogPosts]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    if (value === 0) {
      handleQueryParamChange("type", null);
    } else {
      const selectedTag = allTags[value - 1];
      if (selectedTag) {
        handleQueryParamChange("type", selectedTag);
      }
    }
  }, [value, handleQueryParamChange, allTags]);
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
