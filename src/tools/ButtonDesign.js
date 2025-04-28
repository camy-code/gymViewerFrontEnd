
const getButtonStyle = (mColor, mHoverCol, mTextCol) => {
return { backgroundColor: mColor,
    color:mTextCol,
    textTransform: "none",
    fontSize: "1.5rem",
    padding: "16px 32px",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: mHoverCol,
    },
    border: "2px solid black",
    
   }
}

export default {getButtonStyle}