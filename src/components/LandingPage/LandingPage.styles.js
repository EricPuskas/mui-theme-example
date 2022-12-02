/**
 * Imports styled
 */
import { styled } from "@mui/material";

/**
 * Styles the container
 */
export const Title = styled("h1")((props) => {
  const { theme } = props;

  return {
    color: theme.palette.scheduled.main
  };
});
