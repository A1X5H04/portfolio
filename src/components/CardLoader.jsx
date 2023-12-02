import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import ContentLoader from "react-content-loader";

export default function CardLoader({ viewBox, children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox={viewBox}
      backgroundColor={theme === "dark" ? "#121212" : "#f1f5f9"}
      foregroundColor={theme === "dark" ? "#212529" : "#e2e8f0"}
    >
      {children}
    </ContentLoader>
  );
}
CardLoader.propTypes = {
  viewBox: PropTypes.string,
  children: PropTypes.node,
};
