import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      /*& <element> is used for any inner element in a css style */
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh" /* Main element in css is used for body of a page. 
      This allows the page body to have a minimum gap from footer */,
  },
  footer: {
    marginTop: 10,
    textAlign: "center" /* Aligning footer to center*/,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyles;
