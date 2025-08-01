import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useBlogPostsContext } from "../lib/hooks";
import { useSearchParams } from "react-router-dom";

export default function ScrollableTabsButtonForce() {
  const { blogPosts, handleQueryParamChange } = useBlogPostsContext();
  const [searchParams] = useSearchParams();
  const currentTypeFilter = searchParams.get("type");

  const allTags = React.useMemo(() => {
    const tagsArr: string[] = [];
    blogPosts.forEach((post) => {
      if (post.tags) {
        post.tags.forEach((tag) => tag !== "" && tagsArr.push(tag));
      }
    });
    return Array.from(new Set(tagsArr));
  }, [blogPosts]);

  const sortedTags = React.useMemo(
    () =>
      [...allTags].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      ),
    [allTags]
  );

  const value = React.useMemo(() => {
    if (!currentTypeFilter) return 0;
    const tagIndex = allTags.findIndex((tag) => tag === currentTypeFilter);
    return tagIndex === -1 ? 0 : tagIndex + 1;
  }, [currentTypeFilter, allTags]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) {
      handleQueryParamChange("type", null);
    } else {
      const selectedTag = allTags[newValue - 1];
      if (selectedTag) {
        handleQueryParamChange("type", selectedTag);
      }
    }
  };
  return (
    <div className="flex justify-center">
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
          {sortedTags.map((t) => (
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
    </div>
  );
}
